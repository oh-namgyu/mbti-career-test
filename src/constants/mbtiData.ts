// ===================================
// MBTI별 찰떡 직업 추천 - 데이터
// ===================================

export interface Career {
  title: string;
  salary: string;
  aiRisk: 'low' | 'medium' | 'high';
  description: string;
}

export interface MBTIType {
  type: string;
  name: string;
  emoji: string;
  color: string;
  bgGradient: string;
  keywords: string[];
  careers: Career[];
  luckyItem: string;
  advice: string;
  compatibility: string[];
}

export const MBTI_TYPES: MBTIType[] = [
  // ===== 분석가형 (NT) =====
  {
    type: 'INTJ',
    name: '전략가',
    emoji: '🧠',
    color: 'from-purple-500 to-indigo-600',
    bgGradient: 'from-purple-50 to-indigo-50',
    keywords: ['전략적', '독립적', '분석적', '결단력', '완벽주의'],
    careers: [
      { title: '데이터 사이언티스트', salary: '6,000~1억', aiRisk: 'low', description: '데이터 분석 및 인사이트 도출' },
      { title: '경영 컨설턴트', salary: '5,000~1.2억', aiRisk: 'medium', description: '기업 전략 수립 및 자문' },
      { title: '투자 분석가', salary: '5,500~1억', aiRisk: 'medium', description: '투자 전략 및 리스크 분석' },
      { title: '소프트웨어 아키텍트', salary: '7,000~1.5억', aiRisk: 'low', description: '시스템 설계 및 기술 전략' },
      { title: '연구원 (R&D)', salary: '4,500~8,000', aiRisk: 'low', description: '신기술 연구 및 개발' },
    ],
    luckyItem: '검은색 수첩',
    advice: '완벽을 추구하는 것은 좋지만, 때로는 80%의 완성도로 빠르게 실행하는 것이 더 큰 성과를 가져옵니다.',
    compatibility: ['ENFP', 'ENTP'],
  },
  {
    type: 'INTP',
    name: '논리술사',
    emoji: '🔬',
    color: 'from-cyan-500 to-blue-600',
    bgGradient: 'from-cyan-50 to-blue-50',
    keywords: ['논리적', '호기심', '창의적', '분석적', '독창적'],
    careers: [
      { title: 'AI 연구원', salary: '6,000~1.2억', aiRisk: 'low', description: '인공지능 알고리즘 연구' },
      { title: '백엔드 개발자', salary: '5,000~9,000', aiRisk: 'low', description: '서버 및 데이터베이스 개발' },
      { title: '철학 교수', salary: '4,000~7,000', aiRisk: 'low', description: '철학 연구 및 강의' },
      { title: '게임 개발자', salary: '4,500~8,000', aiRisk: 'low', description: '게임 로직 및 시스템 개발' },
      { title: '특허 분석가', salary: '4,500~7,500', aiRisk: 'medium', description: '특허 기술 분석 및 평가' },
    ],
    luckyItem: '퍼즐 큐브',
    advice: '아이디어를 실행으로 옮기는 것이 중요합니다. 생각에만 머무르지 말고 작은 것부터 시작해보세요.',
    compatibility: ['ENTJ', 'ESTJ'],
  },
  {
    type: 'ENTJ',
    name: '통솔자',
    emoji: '👔',
    color: 'from-amber-500 to-orange-600',
    bgGradient: 'from-amber-50 to-orange-50',
    keywords: ['리더십', '효율적', '결단력', '자신감', '목표지향'],
    careers: [
      { title: 'CEO/창업가', salary: '다양함', aiRisk: 'low', description: '기업 경영 및 비전 수립' },
      { title: '프로젝트 매니저', salary: '5,000~9,000', aiRisk: 'low', description: '프로젝트 총괄 관리' },
      { title: '변호사', salary: '5,000~2억+', aiRisk: 'medium', description: '법률 자문 및 소송 대리' },
      { title: '금융 임원', salary: '8,000~3억+', aiRisk: 'low', description: '금융 전략 및 투자 결정' },
      { title: '정치인', salary: '다양함', aiRisk: 'low', description: '정책 수립 및 국정 운영' },
    ],
    luckyItem: '골드 펜',
    advice: '팀원들의 의견에도 귀 기울이세요. 혼자 이끄는 것보다 함께 성장하는 리더가 더 큰 성과를 만듭니다.',
    compatibility: ['INTP', 'ISTP'],
  },
  {
    type: 'ENTP',
    name: '변론가',
    emoji: '💡',
    color: 'from-yellow-500 to-amber-600',
    bgGradient: 'from-yellow-50 to-amber-50',
    keywords: ['창의적', '논쟁적', '다재다능', '호기심', '도전적'],
    careers: [
      { title: '스타트업 창업가', salary: '다양함', aiRisk: 'low', description: '새로운 비즈니스 창출' },
      { title: '마케팅 전략가', salary: '4,500~8,000', aiRisk: 'medium', description: '브랜드 전략 및 캠페인 기획' },
      { title: '기술 영업', salary: '5,000~1억+', aiRisk: 'low', description: 'B2B 기술 솔루션 영업' },
      { title: '크리에이티브 디렉터', salary: '5,000~1억', aiRisk: 'low', description: '광고/콘텐츠 창작 총괄' },
      { title: '방송 프로듀서', salary: '4,000~8,000', aiRisk: 'low', description: '콘텐츠 기획 및 제작' },
    ],
    luckyItem: '노란색 아이디어 노트',
    advice: '시작한 일은 끝까지 마무리하세요. 새로운 아이디어도 좋지만, 완성의 기쁨을 느껴보세요.',
    compatibility: ['INTJ', 'INFJ'],
  },

  // ===== 외교관형 (NF) =====
  {
    type: 'INFJ',
    name: '옹호자',
    emoji: '🌟',
    color: 'from-teal-500 to-emerald-600',
    bgGradient: 'from-teal-50 to-emerald-50',
    keywords: ['통찰력', '이상주의', '헌신적', '창의적', '결단력'],
    careers: [
      { title: '심리상담사', salary: '3,500~6,000', aiRisk: 'low', description: '정신건강 상담 및 치료' },
      { title: 'UX 리서처', salary: '4,500~8,000', aiRisk: 'low', description: '사용자 경험 연구' },
      { title: '작가/소설가', salary: '다양함', aiRisk: 'low', description: '문학 창작' },
      { title: '비영리단체 기획자', salary: '3,000~5,000', aiRisk: 'low', description: '사회공헌 프로젝트 기획' },
      { title: '인사 담당자', salary: '4,000~7,000', aiRisk: 'medium', description: '인재 채용 및 조직문화' },
    ],
    luckyItem: '에메랄드 액세서리',
    advice: '자신을 위한 시간도 확보하세요. 남을 돕는 것도 좋지만, 자기 자신도 소중히 여기세요.',
    compatibility: ['ENTP', 'ENFP'],
  },
  {
    type: 'INFP',
    name: '중재자',
    emoji: '🦋',
    color: 'from-pink-500 to-rose-600',
    bgGradient: 'from-pink-50 to-rose-50',
    keywords: ['이상주의', '공감능력', '창의적', '성찰적', '열정적'],
    careers: [
      { title: '콘텐츠 크리에이터', salary: '다양함', aiRisk: 'low', description: '유튜브/SNS 콘텐츠 제작' },
      { title: '그래픽 디자이너', salary: '3,500~6,500', aiRisk: 'medium', description: '시각 디자인 제작' },
      { title: '음악 치료사', salary: '3,000~5,000', aiRisk: 'low', description: '음악을 통한 심리 치료' },
      { title: '카피라이터', salary: '3,500~6,000', aiRisk: 'high', description: '광고 문구 작성' },
      { title: '독립 출판 에디터', salary: '3,000~5,500', aiRisk: 'medium', description: '도서 기획 및 편집' },
    ],
    luckyItem: '빈티지 다이어리',
    advice: '현실과 이상 사이의 균형을 찾으세요. 꿈을 쫓되, 발은 땅에 단단히 디디고 있어야 합니다.',
    compatibility: ['ENFJ', 'ENTJ'],
  },
  {
    type: 'ENFJ',
    name: '선도자',
    emoji: '🎭',
    color: 'from-red-500 to-pink-600',
    bgGradient: 'from-red-50 to-pink-50',
    keywords: ['카리스마', '이타적', '책임감', '공감능력', '설득력'],
    careers: [
      { title: '교육자/교수', salary: '4,000~7,000', aiRisk: 'low', description: '교육 및 학생 지도' },
      { title: '기업 트레이너', salary: '4,500~8,000', aiRisk: 'low', description: '직원 교육 및 역량 개발' },
      { title: '이벤트 플래너', salary: '3,500~6,000', aiRisk: 'low', description: '행사 기획 및 운영' },
      { title: '홍보 담당자', salary: '4,000~7,000', aiRisk: 'medium', description: 'PR 전략 및 미디어 관계' },
      { title: '사회복지사', salary: '3,000~4,500', aiRisk: 'low', description: '복지 서비스 제공' },
    ],
    luckyItem: '레드 스카프',
    advice: '모든 사람을 만족시킬 수는 없습니다. 때로는 "아니오"라고 말하는 것도 필요합니다.',
    compatibility: ['INFP', 'ISFP'],
  },
  {
    type: 'ENFP',
    name: '활동가',
    emoji: '🌈',
    color: 'from-orange-500 to-yellow-500',
    bgGradient: 'from-orange-50 to-yellow-50',
    keywords: ['열정적', '창의적', '사교적', '낙관적', '자유로움'],
    careers: [
      { title: '유튜버/인플루언서', salary: '다양함', aiRisk: 'low', description: '소셜미디어 콘텐츠 창작' },
      { title: '여행 작가', salary: '다양함', aiRisk: 'low', description: '여행 콘텐츠 제작' },
      { title: '브랜드 매니저', salary: '4,500~8,000', aiRisk: 'medium', description: '브랜드 아이덴티티 관리' },
      { title: '배우/공연 예술가', salary: '다양함', aiRisk: 'low', description: '연기 및 공연' },
      { title: '커뮤니티 매니저', salary: '3,500~6,000', aiRisk: 'low', description: '온라인 커뮤니티 운영' },
    ],
    luckyItem: '컬러풀 팔찌',
    advice: '하나에 집중하는 힘을 기르세요. 여러 가지를 동시에 하기보다 하나를 끝내는 성취감을 느껴보세요.',
    compatibility: ['INTJ', 'INFJ'],
  },

  // ===== 관리자형 (SJ) =====
  {
    type: 'ISTJ',
    name: '현실주의자',
    emoji: '📊',
    color: 'from-slate-500 to-gray-600',
    bgGradient: 'from-slate-50 to-gray-50',
    keywords: ['책임감', '신뢰성', '체계적', '근면성', '전통적'],
    careers: [
      { title: '회계사', salary: '4,500~8,000', aiRisk: 'high', description: '재무 감사 및 세무 자문' },
      { title: '공무원', salary: '3,500~6,000', aiRisk: 'medium', description: '행정 업무 수행' },
      { title: '품질관리 엔지니어', salary: '4,000~7,000', aiRisk: 'medium', description: '제품 품질 검수' },
      { title: '은행원', salary: '4,000~6,500', aiRisk: 'high', description: '금융 서비스 제공' },
      { title: '물류 관리자', salary: '4,000~7,000', aiRisk: 'medium', description: '공급망 관리' },
    ],
    luckyItem: '클래식 손목시계',
    advice: '변화를 두려워하지 마세요. 새로운 방식도 배워보면 업무 효율이 더 좋아질 수 있습니다.',
    compatibility: ['ESFP', 'ESTP'],
  },
  {
    type: 'ISFJ',
    name: '수호자',
    emoji: '🛡️',
    color: 'from-blue-500 to-sky-600',
    bgGradient: 'from-blue-50 to-sky-50',
    keywords: ['헌신적', '따뜻함', '신뢰성', '관찰력', '인내심'],
    careers: [
      { title: '간호사', salary: '3,500~5,500', aiRisk: 'low', description: '환자 간호 및 의료 지원' },
      { title: '초등교사', salary: '3,500~5,500', aiRisk: 'low', description: '초등학생 교육' },
      { title: '비서/행정 보조', salary: '3,000~4,500', aiRisk: 'high', description: '업무 지원 및 일정 관리' },
      { title: '사서', salary: '3,000~4,500', aiRisk: 'medium', description: '도서관 자료 관리' },
      { title: '영양사', salary: '3,000~5,000', aiRisk: 'low', description: '식단 계획 및 영양 상담' },
    ],
    luckyItem: '파란색 머그컵',
    advice: '자신의 필요도 중요합니다. 남을 돕는 만큼 자신도 챙기세요.',
    compatibility: ['ESFP', 'ESTP'],
  },
  {
    type: 'ESTJ',
    name: '경영자',
    emoji: '📋',
    color: 'from-emerald-500 to-green-600',
    bgGradient: 'from-emerald-50 to-green-50',
    keywords: ['조직적', '리더십', '실용적', '결단력', '책임감'],
    careers: [
      { title: '운영 관리자', salary: '5,000~9,000', aiRisk: 'low', description: '조직 운영 총괄' },
      { title: '군 장교', salary: '4,000~7,000', aiRisk: 'low', description: '부대 지휘 및 관리' },
      { title: '판사/검사', salary: '6,000~1.5억', aiRisk: 'low', description: '법률 판단 및 기소' },
      { title: '부동산 개발자', salary: '다양함', aiRisk: 'low', description: '부동산 개발 사업' },
      { title: '호텔 총지배인', salary: '5,000~1억', aiRisk: 'low', description: '호텔 경영 총괄' },
    ],
    luckyItem: '가죽 명함 지갑',
    advice: '융통성도 때로는 필요합니다. 규칙을 지키되, 상황에 따라 유연하게 대처하세요.',
    compatibility: ['ISTP', 'INTP'],
  },
  {
    type: 'ESFJ',
    name: '집정관',
    emoji: '🤝',
    color: 'from-rose-500 to-red-600',
    bgGradient: 'from-rose-50 to-red-50',
    keywords: ['사교적', '배려심', '협력적', '전통적', '충성스러움'],
    careers: [
      { title: '인사 관리자', salary: '4,500~8,000', aiRisk: 'medium', description: '인력 관리 및 복지' },
      { title: '의료 코디네이터', salary: '3,500~5,500', aiRisk: 'low', description: '환자 케어 조정' },
      { title: '웨딩 플래너', salary: '3,000~6,000', aiRisk: 'low', description: '결혼식 기획 및 진행' },
      { title: '고객 서비스 관리자', salary: '3,500~6,000', aiRisk: 'medium', description: 'CS팀 관리' },
      { title: '유치원 교사', salary: '2,800~4,000', aiRisk: 'low', description: '유아 교육' },
    ],
    luckyItem: '핑크 꽃다발',
    advice: '타인의 평가에 너무 연연하지 마세요. 자신의 가치는 스스로 정하는 것입니다.',
    compatibility: ['ISFP', 'ISTP'],
  },

  // ===== 탐험가형 (SP) =====
  {
    type: 'ISTP',
    name: '장인',
    emoji: '🔧',
    color: 'from-zinc-500 to-neutral-600',
    bgGradient: 'from-zinc-50 to-neutral-50',
    keywords: ['논리적', '실용적', '관찰력', '적응력', '독립적'],
    careers: [
      { title: '기계 엔지니어', salary: '4,500~8,000', aiRisk: 'medium', description: '기계 설계 및 개발' },
      { title: '파일럿', salary: '6,000~1.5억', aiRisk: 'medium', description: '항공기 조종' },
      { title: '응급 구조사', salary: '3,500~5,000', aiRisk: 'low', description: '응급 상황 대응' },
      { title: '포렌식 분석가', salary: '4,000~7,000', aiRisk: 'medium', description: '범죄 현장 분석' },
      { title: '자동차 정비사', salary: '3,000~5,500', aiRisk: 'medium', description: '차량 정비 및 수리' },
    ],
    luckyItem: '멀티 툴 나이프',
    advice: '감정 표현도 연습하세요. 말하지 않으면 상대방은 알 수 없습니다.',
    compatibility: ['ESTJ', 'ENTJ'],
  },
  {
    type: 'ISFP',
    name: '모험가',
    emoji: '🎨',
    color: 'from-violet-500 to-purple-600',
    bgGradient: 'from-violet-50 to-purple-50',
    keywords: ['예술적', '온화함', '감수성', '자유로움', '겸손함'],
    careers: [
      { title: '일러스트레이터', salary: '3,000~6,000', aiRisk: 'medium', description: '그림 및 삽화 제작' },
      { title: '플로리스트', salary: '2,500~4,500', aiRisk: 'low', description: '꽃꽂이 및 플라워 디자인' },
      { title: '수의사', salary: '4,000~7,000', aiRisk: 'low', description: '동물 치료 및 케어' },
      { title: '패션 스타일리스트', salary: '3,000~8,000', aiRisk: 'low', description: '패션 코디네이션' },
      { title: '요리사/셰프', salary: '3,000~8,000', aiRisk: 'low', description: '요리 창작 및 조리' },
    ],
    luckyItem: '보라색 스케치북',
    advice: '자신의 재능을 믿으세요. 남들과 비교하지 말고 자신만의 길을 걸어가세요.',
    compatibility: ['ENFJ', 'ESFJ'],
  },
  {
    type: 'ESTP',
    name: '사업가',
    emoji: '🏎️',
    color: 'from-red-500 to-orange-600',
    bgGradient: 'from-red-50 to-orange-50',
    keywords: ['활동적', '실용적', '대담함', '적응력', '사교적'],
    careers: [
      { title: '영업 관리자', salary: '5,000~1억+', aiRisk: 'low', description: '영업팀 총괄' },
      { title: '스포츠 에이전트', salary: '다양함', aiRisk: 'low', description: '선수 계약 및 관리' },
      { title: '소방관', salary: '3,500~5,500', aiRisk: 'low', description: '화재 진압 및 구조' },
      { title: '스턴트 코디네이터', salary: '다양함', aiRisk: 'low', description: '액션 장면 기획' },
      { title: '부동산 중개인', salary: '다양함', aiRisk: 'medium', description: '부동산 거래 중개' },
    ],
    luckyItem: '스포츠 선글라스',
    advice: '장기적인 계획도 세워보세요. 순간의 흥분도 좋지만, 미래를 위한 준비도 필요합니다.',
    compatibility: ['ISTJ', 'ISFJ'],
  },
  {
    type: 'ESFP',
    name: '연예인',
    emoji: '🎤',
    color: 'from-fuchsia-500 to-pink-600',
    bgGradient: 'from-fuchsia-50 to-pink-50',
    keywords: ['사교적', '즉흥적', '활기찬', '낙관적', '재미추구'],
    careers: [
      { title: '연예인/가수', salary: '다양함', aiRisk: 'low', description: '공연 및 방송 활동' },
      { title: '이벤트 MC', salary: '다양함', aiRisk: 'low', description: '행사 진행' },
      { title: '피트니스 트레이너', salary: '3,000~7,000', aiRisk: 'low', description: '운동 지도' },
      { title: '항공 승무원', salary: '4,000~7,000', aiRisk: 'low', description: '기내 서비스' },
      { title: '투어 가이드', salary: '2,500~5,000', aiRisk: 'low', description: '관광 안내' },
    ],
    luckyItem: '반짝이 액세서리',
    advice: '진지한 순간도 필요합니다. 항상 밝은 모습 뒤에 숨기지 말고 솔직한 감정도 표현해보세요.',
    compatibility: ['ISTJ', 'ISFJ'],
  },
];

// MBTI 유형으로 데이터 찾기
export const getMBTIData = (type: string): MBTIType | undefined => {
  return MBTI_TYPES.find(mbti => mbti.type === type.toUpperCase());
};

// AI 대체 위험도 라벨
export const AI_RISK_LABELS = {
  low: { text: '낮음', color: 'text-green-600 bg-green-100' },
  medium: { text: '보통', color: 'text-yellow-600 bg-yellow-100' },
  high: { text: '높음', color: 'text-red-600 bg-red-100' },
};
