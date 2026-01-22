# Google AdSense 설정 가이드

## 계정 정보

- **Publisher ID**: `ca-pub-2627121549841957`

## 적용된 코드

### 1. AdSense 스크립트 (index.html)

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2627121549841957"
     crossorigin="anonymous"></script>
```

### 2. 메타 태그 (index.html)

```html
<meta name="google-adsense-account" content="ca-pub-2627121549841957">
```

### 3. ads.txt (public/ads.txt)

```
google.com, pub-2627121549841957, DIRECT, f08c47fec0942fa0
```

**배포 후 URL**: https://mbti-career-test.vercel.app/ads.txt

## 광고 슬롯 위치

| 위치 | Slot ID | 형식 | 설명 |
|------|---------|------|------|
| 결과 카드 하단 | result-ad | Rectangle (300x250) | MBTI 결과 하단 |
| 상단 | top-content-ad | Rectangle (300x250) | MBTI 선택 화면 |
| 하단 | bottom-content-ad | Horizontal (728x90) | SEO 콘텐츠 하단 |

## AdSlot 컴포넌트 사용법

```tsx
import { AdSlot } from './components';

// 자동 크기 조절
<AdSlot slot="your-slot-id" format="auto" />

// 고정 크기
<AdSlot slot="your-slot-id" format="rectangle" />  // 300x250
<AdSlot slot="your-slot-id" format="horizontal" /> // 728x90
```

## 설정 변경

광고 설정은 `src/components/AdSlot.tsx`에서 변경:

```typescript
// 개발 시 광고 비활성화
const ADSENSE_ENABLED = false;

// 프로덕션 시 활성화
const ADSENSE_ENABLED = true;
```

## 주의사항

1. AdSense 승인 후 실제 광고가 표시됩니다
2. ads.txt가 루트 경로에 있어야 합니다 (`/ads.txt`)
3. 개발 환경에서는 `ADSENSE_ENABLED = false`로 설정 권장
