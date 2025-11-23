import { Link } from 'react-router-dom';
import { FileText, Mail, ExternalLink, Phone, AlertTriangle, Shield, Building2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t-2 border-blue-500/30 mt-0">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-8">

        {/* Critical FSA Compliance Warning Banner */}
        <div className="mb-8 bg-red-50 border-2 border-red-400 rounded-lg p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-bold text-red-900 mb-2" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
                重要：本サービスは金融商品取引業者ではありません
              </h3>
              <div className="space-y-2 text-sm sm:text-base text-red-800" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
                <p className="leading-relaxed">
                  <strong>株式会社ネクストスフィアは広告サービス提供会社であり、金融庁登録の金融商品取引業者ではありません。</strong>
                  金融商品取引法第29条の登録を受けておらず、投資助言業・投資運用業・金融商品仲介業には該当しません。
                </p>
                <p className="text-sm leading-relaxed">
                  本サービスは情報提供のみを目的としており、個別銘柄の推奨や投資判断のアドバイスを行うものではありません。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Status Badges Section */}
        <div className="mb-8">
          <h4 className="text-sm font-bold mb-4 text-gray-800" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
            監督機関登録状況
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-gray-100 rounded-lg p-3 border border-gray-300">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-4 h-4 text-gray-600" />
                <span className="text-xs font-semibold text-gray-700" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>金融庁登録</span>
              </div>
              <p className="text-xs text-gray-600" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>非該当（情報提供のみ）</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-3 border border-gray-300">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-4 h-4 text-gray-600" />
                <span className="text-xs font-semibold text-gray-700" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>投資助言業</span>
              </div>
              <p className="text-xs text-gray-600" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>提供しておりません</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-3 border border-gray-300">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-4 h-4 text-gray-600" />
                <span className="text-xs font-semibold text-gray-700" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>金融商品販売</span>
              </div>
              <p className="text-xs text-gray-600" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>行っておりません</p>
            </div>

            <div className="bg-green-100 rounded-lg p-3 border border-green-300">
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-4 h-4 text-green-700" />
                <span className="text-xs font-semibold text-green-800" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>サービス区分</span>
              </div>
              <p className="text-xs text-green-700 font-semibold" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>無料情報提供（広告収益型）</p>
            </div>
          </div>
        </div>

        {/* Risk Warning Section */}
        <div className="mb-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 sm:p-5">
          <h4 className="text-sm sm:text-base font-bold text-amber-900 mb-3" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
            投資リスクに関する重要な注意事項
          </h4>
          <div className="space-y-2 text-xs sm:text-sm text-amber-900" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
            <p className="leading-relaxed">
              <strong className="text-base">株式等の売買には価格変動リスク等があり、損失が生じるおそれがあります。</strong>
            </p>
            <p className="leading-relaxed">
              投資判断は必ずご自身の責任で行ってください。過去の実績は将来の成果を保証するものではありません。
              実際に投資を行う際は、金融商品取引業者にご相談されることをお勧めします。
            </p>
          </div>
        </div>

        {/* Service Scope Clarification */}
        <div className="mb-8">
          <h4 className="text-sm font-bold mb-4 text-gray-800" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
            本サービスの範囲
          </h4>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h5 className="text-sm font-bold text-blue-900 mb-2" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
                ✓ 提供するサービス
              </h5>
              <ul className="space-y-1 text-xs text-gray-700" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
                <li>• AI技術を用いた情報分析</li>
                <li>• 株価データ・チャート表示</li>
                <li>• 統計情報の提供</li>
                <li>• 教育目的の情報提供</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h5 className="text-sm font-bold text-red-900 mb-2" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
                ✗ 提供しないサービス
              </h5>
              <ul className="space-y-1 text-xs text-gray-700" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
                <li>• 個別銘柄の売買推奨</li>
                <li>• 売買タイミングの指示</li>
                <li>• 運用代行・資産管理</li>
                <li>• 金融商品の仲介・販売</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Advertising Service Company Identity */}
        <div className="mb-8 bg-slate-50 rounded-lg p-4 sm:p-5 border border-slate-200">
          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
                運営会社について
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-2" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
                <strong>株式会社ネクストスフィア</strong>は、デジタルマーケティングおよび広告サービスを提供する企業です。
                本サービスは<strong>広告収益により運営</strong>されており、ユーザーの皆様には<strong>完全無料</strong>でご提供しています。
              </p>
              <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
                事業分類：広告代理業・インターネット情報提供サービス ｜
                証券取引手数料・投資助言料等は一切受領しておりません
              </p>
            </div>
          </div>
        </div>

        {/* External Regulatory Links */}
        <div className="mb-8 bg-blue-50 rounded-lg p-4 sm:p-5 border border-blue-200">
          <h4 className="text-sm font-bold text-gray-900 mb-3" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
            関連監督機関・情報源
          </h4>
          <p className="text-xs sm:text-sm text-gray-700 mb-3 leading-relaxed" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
            投資判断を行う際は、金融庁に登録された金融商品取引業者にご相談されることをお勧めします。
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            <a
              href="https://www.fsa.go.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm text-blue-700 hover:text-blue-900 hover:underline"
              style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}
            >
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
              金融庁（FSA）
            </a>
            <a
              href="https://www.jsda.or.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm text-blue-700 hover:text-blue-900 hover:underline"
              style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}
            >
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
              日本証券業協会（JSDA）
            </a>
            <a
              href="https://www.fsa.go.jp/ordinary/kinyusyohin/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm text-blue-700 hover:text-blue-900 hover:underline"
              style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}
            >
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
              登録業者検索
            </a>
            <a
              href="https://www.shikin-unyou.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm text-blue-700 hover:text-blue-900 hover:underline"
              style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}
            >
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
              投資信託協会
            </a>
          </div>
        </div>

        {/* Data Source Disclaimer */}
        <div className="mb-8 bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-2" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
            データ提供に関する免責事項
          </h4>
          <p className="text-xs text-gray-700 leading-relaxed" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
            提供データは第三者情報源に基づきます。リアルタイムデータではなく、遅延が発生する場合があります。
            データの正確性・完全性・適時性について保証いたしません。AI分析は過去データに基づくものであり、将来の結果を保証するものではありません。
          </p>
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

        {/* Bilingual Declaration */}
        <div className="mb-6 bg-slate-100 rounded-lg p-4 border border-slate-300">
          <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-2" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
            English Declaration
          </h4>
          <p className="text-xs text-gray-700 leading-relaxed" style={{ fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
            <strong>NextSphere Co., Ltd. is an advertising service provider, not a financial instruments business operator.</strong>
            This service is not regulated by the Financial Services Agency of Japan. We do not provide investment advisory services.
            This service is intended for users in Japan and operates through advertising revenue.
            Past performance is not indicative of future results. All investments involve risk.
          </p>
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
