export const SeoContent = () => {
  return (
    <section className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        MBTI로 찾는 <span className="gradient-text">나만의 천직</span>
      </h2>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">MBTI와 직업 선택의 상관관계</h3>
          <p>
            MBTI(Myers-Briggs Type Indicator)는 칼 융의 심리 유형론을 바탕으로 개발된 성격 유형 검사입니다.
            16가지 성격 유형은 각각 고유한 강점과 선호하는 업무 환경을 가지고 있어, 직업 선택에
            중요한 참고 자료가 됩니다. 자신의 MBTI를 이해하면 자연스럽게 잘 맞는 직업군을
            파악할 수 있고, 직장에서의 만족도와 성과도 높아지는 경향이 있습니다.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">MBTI별 직업 만족도 순위</h3>
          <p>
            다양한 연구에 따르면 MBTI 유형별로 직업 만족도에 차이가 있습니다. 일반적으로
            외향형(E)은 사람들과 소통하는 직업에서, 내향형(I)은 집중력이 필요한 전문 직종에서
            높은 만족도를 보입니다. 직관형(N)은 창의적이고 전략적인 업무에, 감각형(S)은
            실용적이고 구체적인 업무에서 강점을 발휘합니다. 특히 ENTJ, ESTJ 같은 유형은
            리더십이 필요한 관리직에서 높은 성과를 보이며, INFP, ISFP 같은 유형은 예술이나
            상담 분야에서 뛰어난 만족도를 경험합니다.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">AI 시대의 직업 전망</h3>
          <p>
            2026년 현재, AI 기술의 발전으로 많은 직업이 변화하고 있습니다. 반복적이고 규칙적인
            업무는 자동화될 가능성이 높지만, 창의성, 공감 능력, 복잡한 의사결정이 필요한 직업은
            여전히 인간의 영역으로 남을 것으로 예상됩니다. 각 MBTI 유형별 추천 직업에는 AI 대체
            가능성을 함께 표시하여, 미래 지향적인 커리어 계획을 세우는 데 도움을 드리고 있습니다.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">나에게 맞는 직업 찾는 법</h3>
          <p>
            첫째, 자신의 MBTI 유형을 정확히 파악하세요. 온라인 테스트도 좋지만, 전문 기관의
            검사를 받으면 더 정확한 결과를 얻을 수 있습니다. 둘째, MBTI는 참고 자료일 뿐
            절대적인 기준이 아닙니다. 개인의 경험, 교육, 환경에 따라 적합한 직업은 달라질 수
            있습니다. 셋째, 관심 있는 직업에 대해 실제로 경험해보세요. 인턴십, 자원봉사,
            직무 체험 등을 통해 자신에게 정말 맞는지 확인하는 것이 중요합니다.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">성공적인 커리어를 위한 팁</h3>
          <p>
            자신의 강점을 살리는 직업을 선택하되, 약점도 개선해 나가세요. MBTI는 타고난 성향을
            보여주지만, 노력을 통해 다른 영역의 능력도 개발할 수 있습니다. 예를 들어 내향형이라도
            필요에 따라 프레젠테이션 능력을 키울 수 있고, 감각형이라도 전략적 사고를 훈련할 수
            있습니다. 중요한 것은 자신을 이해하고, 그 이해를 바탕으로 성장해 나가는 것입니다.
            직업은 인생의 큰 부분을 차지하므로, 충분한 자기 탐색과 정보 수집 후 신중하게
            결정하시기 바랍니다.
          </p>
        </div>
      </div>

      {/* MBTI 그룹별 직업 요약 */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        {[
          { icon: '🧠', label: '분석가형 (NT)', desc: '전략, 연구, 기술 분야' },
          { icon: '💚', label: '외교관형 (NF)', desc: '상담, 교육, 창작 분야' },
          { icon: '📋', label: '관리자형 (SJ)', desc: '행정, 금융, 관리 분야' },
          { icon: '🎨', label: '탐험가형 (SP)', desc: '예술, 스포츠, 서비스 분야' },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-4 text-center"
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="text-gray-800 font-bold text-sm">{item.label}</div>
            <div className="text-gray-500 text-xs mt-1">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
