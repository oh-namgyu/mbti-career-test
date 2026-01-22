import { useState, useEffect } from 'react';
import { MBTISelector, ResultCard, SeoContent, AdSlot } from './components';
import { getMBTIData } from './constants/mbtiData';
import type { MBTIType } from './constants/mbtiData';
import './index.css';

function App() {
  const [selectedMBTI, setSelectedMBTI] = useState<MBTIType | null>(null);

  // URL 파라미터에서 MBTI 타입 읽기
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    if (type) {
      const data = getMBTIData(type);
      if (data) {
        setSelectedMBTI(data);
      }
    }
  }, []);

  const handleSelect = (type: string) => {
    const data = getMBTIData(type);
    if (data) {
      setSelectedMBTI(data);
      // URL 업데이트
      window.history.pushState({}, '', `?type=${type}`);
    }
  };

  const handleReset = () => {
    setSelectedMBTI(null);
    window.history.pushState({}, '', window.location.pathname);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* 헤더 */}
        <header className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl mb-4 shadow-lg shadow-purple-200">
            <span className="text-3xl">✨</span>
          </div>
          <h1 className="text-2xl font-black text-gray-800 mb-2">
            MBTI별 <span className="gradient-text">찰떡 직업</span> 추천
          </h1>
          <p className="text-gray-500 text-sm">
            나의 MBTI에 딱 맞는 인생 직업을 찾아보세요!
          </p>
        </header>

        {/* 메인 컨텐츠 */}
        {selectedMBTI ? (
          <ResultCard data={selectedMBTI} onReset={handleReset} />
        ) : (
          <div className="space-y-6">
            {/* MBTI 선택 안내 */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm text-center">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                나의 MBTI를 선택하세요
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                16가지 유형 중 나와 맞는 MBTI를 클릭!
              </p>
              <MBTISelector onSelect={handleSelect} />
            </div>

            {/* 상단 광고 */}
            <AdSlot slot="top-content-ad" format="rectangle" className="flex justify-center" />
          </div>
        )}

        {/* SEO 콘텐츠 */}
        <div className="mt-8">
          <SeoContent />
        </div>

        {/* 하단 광고 */}
        <div className="mt-8">
          <AdSlot slot="bottom-content-ad" format="horizontal" className="w-full" />
        </div>

        {/* 푸터 */}
        <footer className="mt-12 text-center text-gray-400 text-xs">
          <p>MBTI별 찰떡 직업 추천 테스트</p>
          <p className="mt-1">&copy; 2026 MBTI Career Test. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
