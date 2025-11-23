import { StockPrice } from '../types/stock';
import { useState, useEffect } from 'react';

interface ScrollingHistoryDataProps {
  prices: StockPrice[];
  stockName: string;
}

export default function ScrollingHistoryData({ prices, stockName }: ScrollingHistoryDataProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (prices.length <= 1) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % prices.length);
        setIsAnimating(false);
      }, 800);
    }, 3000);

    return () => clearInterval(interval);
  }, [prices.length]);

  if (prices.length === 0) {
    return null;
  }

  // 获取当前显示的3个条目
  const visiblePrices = [
    prices[currentIndex % prices.length],
    prices[(currentIndex + 1) % prices.length],
    prices[(currentIndex + 2) % prices.length]
  ];

  // 获取下一组的3个条目（用于动画）
  const nextPrices = [
    prices[(currentIndex + 1) % prices.length],
    prices[(currentIndex + 2) % prices.length],
    prices[(currentIndex + 3) % prices.length]
  ];

  const formatChange = (change: string, changePercent: string) => {
    const changeNum = parseFloat(change);
    const sign = changeNum >= 0 ? '+' : '';
    return `${sign}${change} (${changePercent}%)`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
  };

  const renderPriceItem = (price: StockPrice, index: number) => {
    return (
      <div
        key={`${price.date}-${index}`}
        className="mb-2 last:mb-0"
        style={{
          backgroundImage: 'url(/slider.png)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          padding: '8px 12px'
        }}
      >
        <div className="text-sm text-black">
          {price.code} {formatDate(price.date)}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-black">終値：</span>
          <span className="text-red-600">{price.close}</span>
          <span className="text-black">{stockName.slice(0, 4)}</span>
          <span className="text-black">前日比：</span>
          <span className="text-red-600">{price.change}</span>
          <span className="text-red-600">{price.changePercent}%</span>
        </div>
      </div>
    );
  };

  const renderGroup = (priceGroup: StockPrice[], position: 'current' | 'next') => {
    const baseStyle = {
      width: '100%',
      transition: 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out'
    };

    const positionStyle = position === 'current'
      ? (isAnimating
          ? { transform: 'translate(-50%, -150%)', opacity: 0 }
          : { transform: 'translate(-50%, -50%)', opacity: 1 })
      : (isAnimating
          ? { transform: 'translate(-50%, -50%)', opacity: 1 }
          : { transform: 'translate(-50%, 50%)', opacity: 0 });

    return (
      <div
        className="absolute top-1/2 left-1/2"
        style={{ ...baseStyle, ...positionStyle }}
      >
        {priceGroup.map((price, idx) => renderPriceItem(price, idx))}
      </div>
    );
  };

  return (
    <div className="px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div className="relative w-full overflow-hidden" style={{ height: '300px' }}>
          <div className="absolute inset-0">
            {renderGroup(visiblePrices, 'current')}
            {prices.length > 1 && renderGroup(nextPrices, 'next')}
          </div>
        </div>

        <div className="mt-3 text-center">
          <p className="text-xs text-blue-900">
            データ出典: 公開市場情報 | 更新: 準リアルタイム
          </p>
          <p className="text-xs text-blue-900 mt-1">
            ※過去のデータは将来の結果を保証するものではありません
          </p>
        </div>
      </div>
    </div>
  );
}
