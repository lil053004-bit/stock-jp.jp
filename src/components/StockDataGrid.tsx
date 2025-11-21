import { StockInfo, StockPrice } from '../types/stock';

interface StockDataGridProps {
  info: StockInfo;
  latestPrice?: StockPrice;
}

export default function StockDataGrid({ info, latestPrice }: StockDataGridProps) {
  const dataItems = [
    { label: '初期値', value: latestPrice?.open || info.price, color: '#16a34a' },
    { label: '高値', value: latestPrice?.high || info.price, color: '#16a34a' },
    { label: '一昨日の終わり', value: info.change, color: '#16a34a' },
    { label: '値', value: latestPrice?.close || info.price, color: '#16a34a' },
    { label: '最終値を調整する', value: latestPrice?.close || info.price, color: '#16a34a' },
    { label: '売買高', value: latestPrice?.volume || 'N/A', color: '#16a34a' },
  ];

  return (
    <div className="w-full px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          {dataItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-xs font-medium mb-1" style={{ color: '#384860' }}>
                {item.label}
              </div>
              <div className="text-lg font-bold" style={{ color: item.color }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
