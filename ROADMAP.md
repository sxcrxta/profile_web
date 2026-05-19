# 웹 이력서 프로젝트 ROADMAP

## 프로젝트 개요

**목표**: HTML, CSS, JavaScript, TailwindCSS를 활용하여 연구자용 웹 이력서 (포트폴리오) 사이트 구축

**기술 스택**:
- HTML5 — 시맨틱 마크업
- CSS3 — 커스텀 스타일링
- JavaScript (ES6+) — 인터랙티브 기능
- TailwindCSS — Utility-first 스타일링 프레임워크

**타겟 사용자**: 학교, 연구기관, 기업 채용 담당자

---

## 디렉토리 구조

```
profile/
├── index.html              # 메인 페이지
├── css/
│   └── style.css           # 커스텀 CSS
├── js/
│   └── main.js             # JavaScript (인터랙티브 기능)
├── assets/
│   └── images/             # 프로필 사진 등 이미지 자산
└── ROADMAP.md             # 프로젝트 계획서 (이 파일)
```

---

## 웹 이력서 구성 섹션

### 1. 헤더/네비게이션
- 로고 또는 이름
- 네비게이션 메뉴 (About, Research, Education, Publications, Projects, Contact)
- 모바일 반응형 메뉴 (햄버거 메뉴)

### 2. 히어로 섹션 (Hero Section)
- 큰 제목: 이름
- 부제: 직급 (예: "Ph.D. Student / Researcher")
- 한 줄 소개
- 이메일, GitHub, LinkedIn 링크

### 3. About 섹션
- 약 100–150단어의 짧은 자기소개
- 연구 분야, 관심사, 경력 개요

### 4. Research Interests 섹션
- 3–5개의 주요 연구 주제/키워드
- 태그 또는 뱃지 스타일로 표시

### 5. Education 섹션
- 대학교명
- 학위 (예: Ph.D., M.S., B.S.)
- 전공
- 졸업 연도

### 6. Publications 섹션
- 논문 제목
- 저자 (You et al., ...)
- 학술지/컨퍼런스명
- 발행 연도
- DOI 또는 링크 (선택사항)

### 7. Skills 섹션
- 프로그래밍 언어 (Python, C++, Java 등)
- 도구/프레임워크 (TensorFlow, PyTorch 등)
- 기타 기술 (Statistical Analysis, ML, Web Development 등)

### 8. Projects 섹션
- 프로젝트 제목
- 짧은 설명
- 사용 기술
- GitHub 링크 (있으면)

### 9. Contact 섹션
- 이메일
- 전화번호 (선택사항)
- 소셜 미디어 링크
- 간단한 연락처 폼 (선택사항)

### 10. Footer
- 저작권 표시
- "Last updated" 날짜

---

## 개발 단계 (5가지 Phase)

### Phase 1: 프로젝트 설정
**목표**: 기본 파일 구조와 환경 준비

- [ ] 디렉토리 구조 생성
- [ ] `index.html` 파일 생성 (HTML5 보일러플레이트)
- [ ] TailwindCSS CDN 링크 추가
- [ ] `css/style.css` 및 `js/main.js` 파일 생성
- [ ] 브라우저에서 열어 확인

**예상 시간**: 15분

---

### Phase 2: 레이아웃 및 디자인
**목표**: 전체 페이지 구조와 반응형 디자인 완성

- [ ] 네비게이션 바 구현 (고정 또는 스크롤 시 숨김)
- [ ] 히어로 섹션 디자인 (배경색, 텍스트 정렬, 이미지)
- [ ] 그리드 레이아웃 구성 (섹션 간 여백, 최대 너비)
- [ ] 모바일 반응형 메뉴 (햄버거 아이콘)
- [ ] 타이포그래피 설정 (폰트, 크기, 색상)
- [ ] Tailwind 클래스를 활용한 스타일링

**예상 시간**: 45분

---

### Phase 3: 콘텐츠 섹션 작성
**목표**: 모든 이력서 섹션에 일반적인 샘플 콘텐츠 채우기

- [ ] About 섹션 - 샘플 자기소개 작성
- [ ] Research Interests - 샘플 주제 3–5개 추가
- [ ] Education - 샘플 학력 정보 추가
- [ ] Publications - 샘플 논문 2–3개 추가
- [ ] Skills - 프로그래밍 언어 및 도구 추가
- [ ] Projects - 샘플 프로젝트 2–3개 추가
- [ ] Contact 섹션 - 이메일 및 소셜 링크 구성

**예상 시간**: 30분

---

### Phase 4: 인터랙티브 기능
**목표**: JavaScript를 활용한 사용자 경험 향상

- [ ] 부드러운 스크롤 (Smooth Scroll) 구현
- [ ] 모바일 메뉴 토글 기능 (클릭 시 열고 닫기)
- [ ] 스크롤 시 네비게이션 활성화 효과 (현재 섹션 표시)
- [ ] 버튼 호버 효과
- [ ] 스크롤-투-탑 버튼 (하단에서 상단으로 이동)

**예상 시간**: 40분

---

### Phase 5: 마무리 및 배포
**목표**: 완성도 있는 웹사이트 완성 및 온라인 공개

- [ ] 접근성 검토 (ARIA 라벨, 콘트라스트, 키보드 네비게이션)
- [ ] 크로스 브라우저 테스트 (Chrome, Firefox, Safari)
- [ ] SEO 기본 설정 (meta tags, title, description)
- [ ] 다크 모드 토글 (선택사항)
- [ ] 페이지 로딩 속도 최적화
- [ ] GitHub Pages 또는 Vercel에 배포
- [ ] 최종 검수 및 버그 수정

**예상 시간**: 1시간

---

## 전체 일정

| Phase | 내용 | 예상 시간 |
|-------|------|---------|
| 1 | 프로젝트 설정 | 15분 |
| 2 | 레이아웃 및 디자인 | 45분 |
| 3 | 콘텐츠 섹션 작성 | 30분 |
| 4 | 인터랙티브 기능 | 40분 |
| 5 | 마무리 및 배포 | 60분 |
| **총계** | | **190분 (약 3.2시간)** |

---

## 개발 시 주의사항

### HTML/CSS
- Semantic HTML5 태그 사용 (`<header>`, `<section>`, `<article>`, `<footer>` 등)
- TailwindCSS의 반응형 클래스 활용 (`sm:`, `md:`, `lg:` 등)
- 모바일 우선(Mobile-first) 디자인 원칙 따르기

### JavaScript
- 최소한의 라이브러리 사용 (순수 JS로 최대한 구현)
- 이벤트 리스너 정리 (메모리 누수 방지)
- 성능 최적화 (debounce/throttle 활용)

### 디자인
- 일관된 색상 팔레트 사용 (최대 3–4가지)
- 여백과 정렬에 주의
- 가독성을 위해 충분한 라인 높이 및 글자 크기

---

## 검증 및 테스트

### 기능 테스트
- [ ] 모든 네비게이션 링크 정상 작동
- [ ] 모바일 메뉴 열고 닫기 정상 작동
- [ ] 부드러운 스크롤 동작 확인
- [ ] 모든 링크 (이메일, GitHub, LinkedIn) 정상 작동

### 반응형 디자인 테스트
- [ ] 모바일 (375px–480px)
- [ ] 태블릿 (768px–1024px)
- [ ] 데스크톱 (1200px+)
- [ ] 브라우저 DevTools 활용

### 성능 및 접근성
- [ ] Lighthouse 점수 확인 (85점 이상 목표)
- [ ] 키보드 네비게이션 테스트
- [ ] 스크린 리더 호환성 확인

---

## 배포 옵션

### GitHub Pages (무료, 추천)
1. GitHub 저장소 생성 (`username.github.io`)
2. 로컬 파일 푸시
3. Settings → Pages에서 배포 확인

### Vercel (무료, 빠른 배포)
1. Vercel 가입
2. GitHub 저장소 연결
3. 자동 배포

### 커스텀 도메인
- GoDaddy, Namecheap 등에서 도메인 구입
- 배포 서비스에서 커스텀 도메인 설정

---

## 추가 기능 (선택사항)

- 다크 모드 토글
- PDF 다운로드 (이력서 다운로드)
- 블로그 섹션 (연구 게시물)
- 방명록 또는 의견 제시 폼 (Formspree 등)
- 언어 전환 (영어/한글)
- 애니메이션 효과 (Scroll reveal 등)

---

## 참고 자료

- [TailwindCSS 공식 문서](https://tailwindcss.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [GitHub Pages 가이드](https://pages.github.com)
- [Vercel 배포 가이드](https://vercel.com/docs)

---

**마지막 업데이트**: 2026-05-12
