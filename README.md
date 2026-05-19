# 웹 이력서 (Web Resume / Portfolio)

연구자를 위한 모던한 웹 이력서 포트폴리오 사이트입니다.

## 🎯 특징

- ✨ **모던 디자인** - TailwindCSS를 활용한 깔끔하고 전문적인 UI
- 📱 **완벽한 반응형** - 모바일, 태블릿, 데스크톱 모두 최적화
- 🌙 **다크 모드 지원** - 사용자 선호도에 따른 자동 다크 모드
- ⚡ **빠른 성능** - CDN 기반 로딩, 최적화된 애니메이션
- ♿ **접근성** - WCAG 기준을 고려한 설계
- 🔍 **SEO 최적화** - 검색 엔진 친화적 구조
- 🎨 **애니메이션** - 부드러운 트랜지션과 인터랙션

## 📋 구성 섹션

1. **헤더/네비게이션** - 고정 네비게이션 바
2. **히어로 섹션** - 이름, 직급, 소개
3. **About** - 자기소개
4. **Research Interests** - 연구 관심 분야
5. **Education** - 학력 정보
6. **Publications** - 논문/발표 목록
7. **Skills** - 프로그래밍 언어, 도구, 기술
8. **Projects** - 연구/프로젝트 포트폴리오
9. **Contact** - 연락처 정보
10. **Footer** - 하단 정보

## 🚀 빠른 시작

### 1. 파일 다운로드
프로젝트 전체를 로컬에 다운로드합니다.

### 2. 파일 수정
`index.html`을 텍스트 에디터로 열어 다음을 수정합니다:

```html
<!-- 이름 변경 -->
<h1 class="text-4xl sm:text-5xl font-bold ...">Your Name</h1>

<!-- 직급 변경 -->
<p class="text-xl sm:text-2xl ...">Ph.D. Student / Researcher</p>

<!-- 이메일 변경 -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- 소셜 링크 변경 -->
<a href="https://github.com/yourprofile">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

### 3. 로컬 테스트
`index.html`을 브라우저에서 열어 확인합니다.

### 4. 배포
아래의 배포 방법 중 하나를 선택합니다.

## 🌐 배포 방법

### GitHub Pages (무료, 추천)

1. GitHub 계정 생성 (없으면)
2. 새 저장소 생성: `username.github.io`
3. 모든 파일을 저장소에 업로드
4. GitHub Pages가 자동으로 활성화됨
5. `https://username.github.io`에서 확인

```bash
# 터미널에서 (Git 설치 필요)
git init
git add .
git commit -m "Initial commit: Web Resume"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

### Vercel (무료, 빠른 배포)

1. [Vercel.com](https://vercel.com)에서 가입
2. GitHub 계정 연결
3. 저장소 import
4. 자동으로 배포됨
5. 커스텀 도메인 연결 가능

### Netlify (무료)

1. [Netlify.com](https://netlify.com)에서 가입
2. GitHub 계정 연결
3. 저장소 선택
4. 배포 설정 완료
5. 라이브 사이트 확인

### 커스텀 도메인

GoDaddy, Namecheap, Route53 등에서 도메인을 구입한 후 배포 서비스에서 도메인을 연결합니다.

```
Vercel: Settings → Domains → Add Domain
GitHub Pages: Settings → Pages → Custom Domain
Netlify: Site Settings → Domain Management
```

## 📝 사용자 정의

### 색상 변경
`css/style.css`의 CSS 변수를 수정:

```css
:root {
    --primary-color: #2563eb;      /* 파란색 → 원하는 색상 */
    --primary-dark: #1e40af;
    --secondary-color: #6366f1;
    --accent-color: #f59e0b;
}
```

또는 `index.html`에서 TailwindCSS 클래스 수정:
```html
<!-- bg-blue-600 → bg-purple-600 등으로 변경 -->
<button class="px-6 py-2 bg-purple-600 hover:bg-purple-700">
```

### 폰트 변경
`index.html`의 Google Fonts 링크 변경:

```html
<!-- Inter 대신 다른 폰트 선택 -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

### 배경 이미지 추가
`index.html`의 히어로 섹션에 이미지 추가:

```html
<section id="hero" style="background-image: url('assets/images/hero-bg.jpg'); background-size: cover;">
```

## 🔧 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3** - 커스텀 스타일, 애니메이션
- **JavaScript (ES6+)** - 인터랙티브 기능
- **TailwindCSS** - Utility-first CSS 프레임워크

## 📊 최적화

### 성능
- TailwindCSS CDN을 통한 빠른 로딩
- 최소화된 JavaScript
- 효율적인 애니메이션

### 접근성
- WCAG 2.1 Level AA 준수
- 키보드 네비게이션 지원
- 시맨틱 HTML 구조
- 충분한 색상 대비

### SEO
- 메타 태그 최적화
- 구조화된 마크업
- 빠른 로딩 속도
- 모바일 최적화

## 🎨 사용된 색상 팔레트

| 색상 | 용도 |
|------|------|
| 파란색 (#2563eb) | 주요 색상, 버튼, 링크 |
| 보라색 (#667eea) | 그래디언트, 강조 |
| 회색 (#6b7280) | 부제목, 보조 텍스트 |
| 흰색 (#ffffff) | 배경, 텍스트 |

## 📱 반응형 테스트

```
Mobile:    375px - 480px
Tablet:    768px - 1024px
Desktop:   1200px+
```

브라우저 DevTools에서 확인 가능:
- Chrome: F12 → Device Toolbar (Ctrl+Shift+M)
- Firefox: F12 → Responsive Design Mode (Ctrl+Shift+M)

## 🐛 문제 해결

### 페이지가 로드되지 않음
- 파일 경로 확인 (상대 경로 사용)
- 인터넷 연결 확인

### 스타일이 적용되지 않음
- 브라우저 캐시 비우기 (Ctrl+Shift+Delete)
- CSS 파일 경로 확인
- TailwindCSS 클래스명 정확히 확인

### 네비게이션이 작동하지 않음
- JavaScript 파일 로드 확인
- 브라우저 콘솔 확인 (F12)

## 📚 참고 자료

- [TailwindCSS 문서](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org)
- [GitHub Pages 가이드](https://pages.github.com)
- [Vercel 배포 가이드](https://vercel.com/docs)
- [WCAG 접근성 기준](https://www.w3.org/WAI/WCAG21/quickref/)

## 📄 라이선스

이 프로젝트는 자유롭게 사용, 수정, 배포할 수 있습니다.

## 💡 팁

1. **프로필 사진 추가**: `/assets/images/` 폴더에 이미지 추가 후 HTML에서 참조
2. **PDF 이력서**: Contact 섹션에 PDF 다운로드 링크 추가
3. **블로그 추가**: 새 섹션 추가 후 블로그 포스트 링크
4. **분석 추가**: Google Analytics, Vercel Analytics 연동
5. **메일폼**: Formspree, EmailJS 등 서비스 연동

## 🎯 체크리스트

- [ ] 이름과 직급 수정
- [ ] 자기소개 작성
- [ ] 연구 관심 분야 추가
- [ ] 학력 정보 입력
- [ ] 논문/발표 정보 추가
- [ ] 기술 스택 입력
- [ ] 프로젝트 포트폴리오 추가
- [ ] 연락처 정보 확인
- [ ] 로컬에서 테스트
- [ ] 배포 (GitHub Pages / Vercel)

---

**마지막 업데이트**: 2026-05-12

질문이나 개선 제안이 있으면 GitHub Issues에 남겨주세요!
