# MBTI별 찰떡 직업 추천 테스트

## 프로젝트 개요

16가지 MBTI 유형별로 어울리는 직업을 추천해주는 테스트 웹 애플리케이션입니다.
결과 링크 공유 기능으로 친구들과 쉽게 공유할 수 있습니다.

### 주요 기능
- **16가지 MBTI 유형** 지원
- **유형별 추천 직업 TOP 5** (총 80개 직업)
- **직업별 연봉 정보** 및 **AI 대체 가능성** 표시
- **결과 링크 복사** (Toast 알림)
- **URL 파라미터** 공유 (`?type=INTJ`)
- **반응형 모바일 디자인** (세로형 레이아웃)
- **AdSense 광고 통합**

---

## 기술 스택

| 구분 | 기술 |
|------|------|
| 프레임워크 | React 19 |
| 빌드 도구 | Vite 7 |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS 4 |
| 배포 | Vercel |

---

## 프로젝트 구조

```
mbti-career-test/
├── docs/
│   ├── PROJECT_DOCUMENTATION.md
│   └── ADSENSE.md
├── public/
│   ├── ads.txt
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── index.ts
│   │   ├── AdSlot.tsx
│   │   ├── Toast.tsx
│   │   ├── MBTISelector.tsx
│   │   ├── ResultCard.tsx
│   │   └── SeoContent.tsx
│   ├── constants/
│   │   └── mbtiData.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## MBTI 데이터 구조

### MBTIType 인터페이스
```typescript
interface MBTIType {
  type: string;           // MBTI 유형 (예: 'INTJ')
  name: string;           // 유형 이름 (예: '전략가')
  emoji: string;          // 대표 이모지
  color: string;          // 그라데이션 색상
  bgGradient: string;     // 배경 그라데이션
  keywords: string[];     // 성격 키워드 5개
  careers: Career[];      // 추천 직업 5개
  luckyItem: string;      // 행운의 아이템
  advice: string;         // 조언
  compatibility: string[]; // 찰떡 궁합 MBTI
}
```

### Career 인터페이스
```typescript
interface Career {
  title: string;          // 직업명
  salary: string;         // 연봉 범위 (만원)
  aiRisk: 'low' | 'medium' | 'high'; // AI 대체 가능성
  description: string;    // 직업 설명
}
```

---

## MBTI 유형별 분류

| 그룹 | 유형 | 특징 |
|------|------|------|
| 분석가형 (NT) | INTJ, INTP, ENTJ, ENTP | 전략, 분석, 논리적 사고 |
| 외교관형 (NF) | INFJ, INFP, ENFJ, ENFP | 공감, 창의, 이상주의 |
| 관리자형 (SJ) | ISTJ, ISFJ, ESTJ, ESFJ | 체계, 책임감, 전통 |
| 탐험가형 (SP) | ISTP, ISFP, ESTP, ESFP | 실용, 예술, 모험 |

---

## 컴포넌트 설명

### 1. MBTISelector
- 4개 그룹으로 분류된 MBTI 선택 UI
- 클릭 시 해당 유형의 결과 표시

### 2. ResultCard
- MBTI 유형 정보 헤더
- 성격 키워드 태그
- 추천 직업 TOP 5 카드 (AI 대체 가능성 배지)
- 행운의 아이템 카드
- 조언 카드
- 찰떡 궁합 MBTI
- 결과 링크 복사 버튼

### 3. Toast
- 복사 완료 알림 (2초 후 자동 사라짐)
- 슬라이드 다운 애니메이션

### 4. AdSlot
- Google AdSense 광고 컴포넌트
- 결과 카드 하단에 배치

### 5. SeoContent
- MBTI와 직업 선택 가이드 (1,000자+)
- MBTI 그룹별 직업 요약 카드

---

## 디자인 시스템

### 컬러 팔레트
- **Primary**: Violet-500 to Purple-600
- **Background**: 파스텔 그라데이션 (fdf4ff → f5f3ff → eff6ff)
- **Card**: White (#FFFFFF)
- **Text Primary**: Gray-800

### 테마: MZ 파스텔 톤
- 부드러운 파스텔 그라데이션 배경
- 둥근 모서리 (rounded-2xl, rounded-3xl)
- 그림자 효과 (shadow-lg, shadow-xl)
- 호버 시 미세한 상승 효과

---

## 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

---

## 배포 정보

### Vercel 배포
- **배포 URL**: https://mbti-career-test.vercel.app
- **결과 공유 예시**: https://mbti-career-test.vercel.app/?type=INTJ

### AdSense 설정
- **Publisher ID**: ca-pub-2627121549841957
- **ads.txt**: https://mbti-career-test.vercel.app/ads.txt

---

## Git 정보

### GitHub 저장소
- **Repository**: https://github.com/oh-namgyu/mbti-career-test
- **Branch**: main

---

## 라이선스

MIT License

---

## 버전 히스토리

| 버전 | 날짜 | 변경사항 |
|------|------|----------|
| 1.0.0 | 2026-01-22 | 초기 릴리즈 |
