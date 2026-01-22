import { useState } from 'react';
import type { MBTIType } from '../constants/mbtiData';
import { AI_RISK_LABELS } from '../constants/mbtiData';
import { Toast } from './Toast';
import { AdSlot } from './AdSlot';

interface ResultCardProps {
  data: MBTIType;
  onReset: () => void;
}

export const ResultCard = ({ data, onReset }: ResultCardProps) => {
  const [showToast, setShowToast] = useState(false);

  const handleCopyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}?type=${data.type}`;
    try {
      await navigator.clipboard.writeText(url);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  return (
    <div className="space-y-6">
      <Toast message="링크가 복사되었습니다!" show={showToast} />

      {/* 메인 결과 카드 */}
      <div className={`result-card bg-gradient-to-br ${data.bgGradient}`}>
        {/* 헤더 */}
        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${data.color} text-4xl mb-4 shadow-lg`}>
            {data.emoji}
          </div>
          <h2 className="text-3xl font-black text-gray-800 mb-1">{data.type}</h2>
          <p className={`text-xl font-bold bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
            {data.name}
          </p>
        </div>

        {/* 성격 키워드 */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {data.keywords.map((keyword) => (
            <span
              key={keyword}
              className="px-3 py-1 bg-white/80 rounded-full text-sm font-medium text-gray-600"
            >
              #{keyword}
            </span>
          ))}
        </div>

        {/* 추천 직업 */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">💼</span>
            나에게 딱 맞는 인생 직업 TOP 5
          </h3>
          <div className="space-y-3">
            {data.careers.map((career, index) => (
              <div key={career.title} className="career-card">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-full bg-gradient-to-br ${data.color} text-white text-sm font-bold flex items-center justify-center`}>
                      {index + 1}
                    </span>
                    <h4 className="font-bold text-gray-800">{career.title}</h4>
                  </div>
                  <span className={`ai-badge ${AI_RISK_LABELS[career.aiRisk].color}`}>
                    AI대체 {AI_RISK_LABELS[career.aiRisk].text}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-2">{career.description}</p>
                <p className="text-sm">
                  <span className="text-gray-400">연봉:</span>
                  <span className="font-bold text-gray-700 ml-1">{career.salary}만원</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 행운 아이템 */}
        <div className="lucky-card mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🍀</span>
            <div>
              <h4 className="font-bold text-amber-800">행운의 아이템</h4>
              <p className="text-amber-700">{data.luckyItem}</p>
            </div>
          </div>
        </div>

        {/* 조언 */}
        <div className="advice-card mb-6">
          <div className="flex items-start gap-3">
            <span className="text-3xl">💡</span>
            <div>
              <h4 className="font-bold text-blue-800 mb-1">나를 위한 조언</h4>
              <p className="text-blue-700 text-sm leading-relaxed">{data.advice}</p>
            </div>
          </div>
        </div>

        {/* 궁합 */}
        <div className="text-center mb-6 p-4 bg-white/60 rounded-2xl">
          <p className="text-sm text-gray-500 mb-2">찰떡 궁합 MBTI</p>
          <div className="flex justify-center gap-3">
            {data.compatibility.map((type) => (
              <span key={type} className="px-4 py-2 bg-white rounded-xl font-bold text-purple-600 shadow-sm">
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* 버튼들 */}
        <div className="flex flex-col gap-3">
          <button onClick={handleCopyLink} className="copy-btn w-full flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            결과 링크 복사하기
          </button>
          <button
            onClick={onReset}
            className="w-full py-3 rounded-xl text-sm font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            다시 테스트하기
          </button>
        </div>
      </div>

      {/* 광고 */}
      <AdSlot slot="result-ad" format="rectangle" className="flex justify-center" />
    </div>
  );
};
