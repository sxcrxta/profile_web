# 배포 가이드 (Deployment Guide)

웹 이력서를 온라인에 공개하기 위한 상세 배포 가이드입니다.

## 🌐 배포 옵션 비교

| 플랫폼 | 비용 | 설정 난이도 | 커스텀 도메인 | 추천 |
|--------|------|----------|-----------|-----|
| GitHub Pages | 무료 | 쉬움 | 가능 | ⭐⭐⭐ |
| Vercel | 무료 | 매우 쉬움 | 가능 | ⭐⭐⭐⭐⭐ |
| Netlify | 무료 | 쉬움 | 가능 | ⭐⭐⭐⭐ |
| AWS S3 + CloudFront | 저렴 | 어려움 | 가능 | ⭐⭐ |

---

## 1️⃣ GitHub Pages 배포 (추천)

GitHub Pages는 GitHub에서 무료로 제공하는 정적 웹사이트 호스팅 서비스입니다.

### 단계별 가이드

#### Step 1: GitHub 계정 생성 및 저장소 만들기

1. [GitHub.com](https://github.com)에 가입 (또는 로그인)
2. 새 저장소 생성:
   - Repository name: `username.github.io`
   - 예: `john-doe.github.io`
   - Public 선택
   - Create repository 클릭

**중요**: 저장소 이름은 정확히 `username.github.io` 형식이어야 합니다.

#### Step 2: 파일 업로드 (웹 방식)

1. 만든 저장소로 이동
2. "Add file" → "Upload files" 클릭
3. 다음 파일들을 업로드:
   - `index.html`
   - `css/style.css`
   - `js/main.js`
   - `ROADMAP.md`
   - `README.md`
4. "Commit changes" 클릭

#### Step 2-B: 파일 업로드 (Git 명령어)

터미널에서 (Git 설치 필요):

```bash
# 프로젝트 디렉토리로 이동
cd /Users/banminji/Desktop/profile

# Git 저장소 초기화
git init

# GitHub 저장소 주소 추가
git remote add origin https://github.com/username/username.github.io.git

# 파일 추가
git add .

# 커밋
git commit -m "Initial commit: Web Resume Portfolio"

# main 브랜치로 변경 (필요시)
git branch -M main

# GitHub에 업로드
git push -u origin main
```

#### Step 3: GitHub Pages 활성화

1. 저장소의 "Settings" 탭 클릭
2. 좌측 메뉴에서 "Pages" 선택
3. "Source" 항목에서 "main" 브랜치 선택
4. "Save" 클릭
5. 빌드 완료 대기 (보통 1-2분)
6. 상단에 표시된 URL 확인

#### Step 4: 라이브 확인

```
https://username.github.io
```

예: `https://john-doe.github.io`

#### Step 5: 커스텀 도메인 연결 (선택사항)

1. 도메인 공급자에서 도메인 구입 (GoDaddy, Namecheap 등)
2. GitHub Settings → Pages
3. "Custom domain" 항목에 도메인 입력
   - 예: `myresearch.com`
4. "Save" 클릭
5. 도메인 공급자의 DNS 설정에서 GitHub IP 주소 추가

```
DNS 레코드 설정:
Type: A
Name: @
Value: 185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
```

### GitHub Pages 장점
- ✅ 무료
- ✅ 쉬운 설정
- ✅ GitHub과 통합
- ✅ 커스텀 도메인 지원

### GitHub Pages 단점
- ❌ 정적 사이트만 가능
- ❌ 빌드 시간 필요
- ❌ 자동 배포 제한

---

## 2️⃣ Vercel 배포 (가장 추천!)

Vercel은 현대적이고 매우 쉬운 배포 플랫폼입니다.

### 단계별 가이드

#### Step 1: Vercel 가입

1. [Vercel.com](https://vercel.com)에 접속
2. "Sign Up" 클릭
3. GitHub 계정으로 로그인 선택
4. GitHub 권한 승인

#### Step 2: 저장소 만들기

Option A: GitHub에 저장소 업로드 후 임포트

```bash
cd /Users/banminji/Desktop/profile
git init
git add .
git commit -m "Web Resume"
git branch -M main
git remote add origin https://github.com/username/profile.git
git push -u origin main
```

Option B: Vercel 웹사이트에서 직접 업로드

1. Vercel 대시보드에서 "New Project" 클릭
2. "Import Git Repository"
3. GitHub 저장소 선택
4. "Import" 클릭

#### Step 3: 배포 설정

1. 프로젝트 이름 입력
2. Framework: "Other"
3. Root Directory: `.`
4. Deploy 클릭

#### Step 4: 배포 완료

자동으로 배포되며 다음 형식의 URL이 생성됩니다:
```
https://profile.vercel.app
```

#### Step 5: 커스텀 도메인 (선택사항)

1. Vercel 프로젝트 Settings
2. "Domains" → "Add Domain"
3. 도메인 입력
4. DNS 레코드 추가

### Vercel 장점
- ✅ 매우 간편한 배포
- ✅ 무료 버전 충분
- ✅ 자동 HTTPS
- ✅ 빠른 배포 속도
- ✅ 환경 변수 지원

### Vercel 단점
- ❌ GitHub 계정 필수
- ❌ 미국 기반 서비스

---

## 3️⃣ Netlify 배포

Netlify도 우수한 배포 플랫폼입니다.

### 단계별 가이드

#### Step 1: Netlify 가입

1. [Netlify.com](https://netlify.com)에 접속
2. "Sign Up" 클릭
3. GitHub으로 로그인

#### Step 2: 사이트 배포

1. "New site from Git" 클릭
2. GitHub 선택
3. 저장소 선택
4. 배포 설정 (기본값 사용 가능)
5. "Deploy site" 클릭

#### Step 3: 라이브 확인

```
https://your-site-name.netlify.app
```

### Netlify 장점
- ✅ 쉬운 설정
- ✅ 무료
- ✅ 서버리스 함수 지원
- ✅ 자동 HTTPS

---

## 4️⃣ 커스텀 도메인 연결

### 도메인 구입

추천 도메인 공급자:
- [Namecheap](https://www.namecheap.com) - 저렴, 한글 지원
- [GoDaddy](https://www.godaddy.com)
- [Google Domains](https://domains.google)

### DNS 설정

각 배포 플랫폼에서 제공하는 DNS 레코드를 도메인 공급자에 추가합니다.

**Example: Vercel**

```
DNS A Record:
Type: A
Name: @
Value: 76.76.19.165

또는 CNAME:
Type: CNAME
Name: @
Value: cname.vercel-dns.com.
```

---

## 5️⃣ 배포 후 체크리스트

### 성능 확인

- [ ] [Google PageSpeed Insights](https://pagespeed.web.dev/)에서 성능 점수 확인
- [ ] 모바일 기기에서 로딩 시간 확인
- [ ] 이미지 압축 확인

### 기능 테스트

- [ ] 모든 링크 작동 확인
- [ ] 네비게이션 정상 작동
- [ ] 모바일 반응형 테스트
- [ ] 다크 모드 테스트
- [ ] 스크롤 부드러움 확인

### SEO 확인

- [ ] [Google Search Console](https://search.google.com/search-console)에 등록
- [ ] 메타 태그 확인
- [ ] 사이트맵 생성 및 등록

### 보안 확인

- [ ] HTTPS 활성화 확인
- [ ] 민감 정보 제거
- [ ] robots.txt 설정 (필요시)

---

## 6️⃣ 유지보수

### 주기적 업데이트

1. 이력서 내용 최신화
   ```bash
   git add .
   git commit -m "Update resume content"
   git push
   ```

2. 배포 상태 모니터링
   - Vercel: 대시보드 확인
   - GitHub Pages: 배포 상태 확인

3. 성능 최적화
   - 이미지 압축
   - 캐시 설정
   - 번들 크기 최적화

### 문제 해결

| 문제 | 해결책 |
|------|--------|
| 배포 실패 | 빌드 로그 확인, 파일 경로 검증 |
| 스타일 안 보임 | CSS 파일 경로 확인, 캐시 비우기 |
| 이미지 안 보임 | 이미지 경로 확인, 파일 존재 확인 |
| 느린 로딩 | 이미지 압축, CDN 확인 |

---

## 7️⃣ 고급 설정

### Google Analytics 추가

`index.html`의 `</head>` 직전에 추가:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Sitemap 생성

`sitemap.xml` 생성:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <lastmod>2024-05-12</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### robots.txt 설정

`robots.txt` 생성:

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

---

## 📚 참고 자료

- [GitHub Pages 공식 문서](https://pages.github.com)
- [Vercel 배포 가이드](https://vercel.com/docs)
- [Netlify 문서](https://docs.netlify.com)
- [DNS 설정 가이드](https://www.dns.com)
- [HTTPS 인증서](https://letsencrypt.org)

---

## 🎯 추천 배포 플로우

```
1. GitHub Pages 또는 Vercel 선택
   ↓
2. 저장소 생성 및 파일 업로드
   ↓
3. 배포 (자동 또는 수동)
   ↓
4. 라이브 확인
   ↓
5. (선택) 커스텀 도메인 연결
   ↓
6. Google Analytics 등록
   ↓
7. 정기적 콘텐츠 업데이트
```

---

**마지막 업데이트**: 2026-05-12

질문이 있으면 README.md의 "문제 해결" 섹션을 참고하세요!
