import { Link } from 'react-router-dom';
import { FileText, Mail, ExternalLink, Phone, AlertTriangle, Building2, Activity } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t-2 border-blue-500/30 mt-0">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-8">

        {/* Quick Link to API Stats & Compliance Info */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-300 rounded-lg p-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
                  API統計・FSA合規情報
                </h3>
                <p className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
                  当サービスの運用状況と重要な金融庁関連情報をご確認いただけます
                </p>
              </div>
            </div>
            <Link
              to="/api-stats"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
              style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}
            >
              詳細を見る
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 pt-6 border-t border-gray-200">
          {/* Legal Documents */}
          <div>
            <h4 className="font-bold mb-3 flex items-center gap-2 text-sm" style={{ color: '#3c0800', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
              <FileText className="w-4 h-4" />
              法的文書
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  to="/disclaimer"
                  className="hover:underline flex items-center gap-1 font-semibold text-red-700"
                  style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}
                >
                  <AlertTriangle className="w-3 h-3" />
                  免責事項【必読】
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:underline flex items-center gap-1"
                  style={{ color: '#3c0800', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}
                >
                  利用規約 <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:underline flex items-center gap-1"
                  style={{ color: '#3c0800', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}
                >
                  プライバシーポリシー <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link
                  to="/specified-commercial-transaction-act"
                  className="hover:underline flex items-center gap-1"
                  style={{ color: '#3c0800', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}
                >
                  特定商取引法表記 <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link
                  to="/company-nature"
                  className="hover:underline flex items-center gap-1"
                  style={{ color: '#3c0800', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}
                >
                  会社概要・サービス性質 <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link
                  to="/api-stats"
                  className="hover:underline flex items-center gap-1 font-semibold text-blue-700"
                  style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}
                >
                  <Activity className="w-3 h-3" />
                  API統計・合規情報
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Information */}
          <div>
            <h4 className="font-bold mb-3 flex items-center gap-2 text-sm" style={{ color: '#3c0800', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
              <Building2 className="w-4 h-4" />
              会社情報
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm" style={{ color: '#3c0800', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
              <li>
                <strong>株式会社ネクストスフィア</strong>
              </li>
              <li>NextSphere Co., Ltd.</li>
              <li className="text-xs">
                事業：広告代理業・情報提供サービス
              </li>
              <li className="text-xs">
                〒160-6135 東京都新宿区西新宿8-17-1
              </li>
              <li className="text-xs pt-2 border-t border-gray-200 mt-2">
                <strong className="block mb-1">運営について</strong>
                本サービスは広告収益により運営されており、ユーザーの皆様には完全無料でご提供しています。証券取引手数料・投資助言料等は一切受領しておりません。
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3 flex items-center gap-2 text-sm" style={{ color: '#3c0800', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
              <Mail className="w-4 h-4" />
              お問い合わせ・苦情対応
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  to="/contact"
                  className="hover:underline flex items-center gap-1"
                  style={{ color: '#3c0800', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}
                >
                  お問い合わせフォーム <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:underline flex items-center gap-1"
                  style={{ color: '#3c0800', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}
                >
                  よくある質問 <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li className="flex items-center gap-1 mt-3" style={{ color: '#3c0800', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
                <Phone className="w-3 h-3" />
                <span>03-5944-8231</span>
              </li>
              <li style={{ color: '#3c0800', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
                support@stocktrends.jp
              </li>
              <li className="text-xs" style={{ color: '#3c0800', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
                受付時間: 平日 9:00-18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 pt-4 text-center">
          <p className="text-xs sm:text-sm mb-3 font-medium" style={{ color: '#3c0800', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
            &copy; {currentYear} 株式会社ネクストスフィア (NextSphere Co., Ltd.). All rights reserved.
          </p>
          <p className="text-xs leading-relaxed max-w-4xl mx-auto mb-2" style={{ color: '#3c0800', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
            当サイトで提供される情報は投資勧誘を目的としたものではありません。
            投資に関する最終決定は、利用者ご自身の判断でなさるようお願いいたします。
            掲載されている情報の正確性については万全を期しておりますが、その内容の正確性、安全性、有用性を保証するものではありません。
          </p>
          <p className="text-xs text-gray-600" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
            本サービスは日本国内のユーザー向けです ｜ This service is intended for users in Japan
          </p>
        </div>
      </div>
    </footer>
  );
}
