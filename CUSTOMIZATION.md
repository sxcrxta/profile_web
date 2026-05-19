# 사용자 정의 가이드 (Customization Guide)

웹 이력서를 자신에게 맞게 커스터마이징하는 방법입니다.

## 📝 기본 정보 수정

### 1. 이름과 직급 변경

`index.html`에서 다음을 찾아 수정:

```html
<!-- 히어로 섹션 -->
<h1 class="text-4xl sm:text-5xl font-bold ...">
    Your Name  <!-- ← 이름 변경 -->
</h1>
<p class="text-xl sm:text-2xl ...">
    Ph.D. Student / Researcher  <!-- ← 직급 변경 -->
</p>
```

### 2. 한 줄 소개 변경

```html
<p class="text-lg text-gray-600 dark:text-gray-400 mb-8 ...">
    Passionate about advancing knowledge...  <!-- ← 소개 변경 -->
</p>
```

### 3. 연락처 정보 변경

```html
<!-- 이메일 -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- GitHub -->
<a href="https://github.com/yourprofile">GitHub</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

---

## 🎨 색상 커스터마이징

### 방법 1: CSS 변수 변경 (권장)

`css/style.css`의 맨 위에서 색상을 변경:

```css
:root {
    --primary-color: #2563eb;      /* 파란색 */
    --primary-dark: #1e40af;       /* 짙은 파란색 */
    --secondary-color: #6366f1;    /* 보라색 */
    --accent-color: #f59e0b;       /* 주황색 */
}
```

**색상 팔레트 예시:**

| 테마 | Primary | Dark | Secondary | Accent |
|------|---------|------|-----------|--------|
| 파란색 | #2563eb | #1e40af | #6366f1 | #f59e0b |
| 보라색 | #7c3aed | #6d28d9 | #a78bfa | #f59e0b |
| 초록색 | #10b981 | #059669 | #34d399 | #fbbf24 |
| 빨간색 | #ef4444 | #dc2626 | #f87171 | #fbbf24 |
| 회색 | #6b7280 | #4b5563 | #9ca3af | #d1d5db |

### 방법 2: TailwindCSS 클래스 변경

`index.html`에서 색상 클래스를 변경:

```html
<!-- 파란색 → 보라색 -->
<button class="bg-blue-600 hover:bg-blue-700">
<!-- 변경 후 -->
<button class="bg-purple-600 hover:bg-purple-700">
```

**TailwindCSS 색상 옵션:**
- `blue`, `purple`, `indigo`, `pink`, `red`, `orange`, `yellow`, `green`, `teal`, `cyan`, `gray`

---

## 🖼️ 히어로 섹션 커스터마이징

### 배경 이미지 추가

```html
<section id="hero" style="background-image: url('assets/images/hero-bg.jpg'); background-size: cover; background-position: center;">
    <!-- 내용 -->
</section>
```

### 배경 색상 변경

```html
<!-- 파란색 그래디언트 대신 다른 색상 -->
<section id="hero" class="bg-gradient-to-br from-purple-600 to-pink-600 ...">
```

### 프로필 이미지 추가

```html
<section id="hero">
    <div class="flex flex-col items-center">
        <!-- 이미지 추가 -->
        <img src="assets/images/profile.jpg" alt="Profile" class="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6">
        
        <h1>Your Name</h1>
        <!-- ... -->
    </div>
</section>
```

---

## ✏️ About 섹션 수정

```html
<section id="about" class="py-16 sm:py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold ...">About Me</h2>
        <p class="text-gray-700 ...">
            <!-- 첫 번째 문단 -->
            자신의 자기소개를 작성하세요. 경력, 연구 관심사, 
            성과 등을 포함할 수 있습니다.
        </p>
        <p class="text-gray-700 ...">
            <!-- 두 번째 문단 -->
            추가 내용이 필요하면 여러 문단을 작성할 수 있습니다.
        </p>
    </div>
</section>
```

---

## 🔬 Research Interests 수정

```html
<section id="research" class="...">
    <h2>Research Interests</h2>
    <div class="flex flex-wrap gap-3">
        <!-- 기존 항목 -->
        <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Machine Learning</span>
        
        <!-- 새 항목 추가 -->
        <span class="px-4 py-2 bg-green-100 text-green-800 rounded-full">Natural Language Processing</span>
    </div>
</section>
```

**배지 색상 조합:**
- `bg-blue-100 text-blue-800` - 파란색
- `bg-purple-100 text-purple-800` - 보라색
- `bg-green-100 text-green-800` - 초록색
- `bg-orange-100 text-orange-800` - 주황색
- `bg-pink-100 text-pink-800` - 분홍색

---

## 🎓 Education 섹션 수정

```html
<section id="education">
    <h2>Education</h2>
    <div class="space-y-6">
        <!-- 학력 1 -->
        <div class="border-l-4 border-blue-600 pl-4">
            <h3>Ph.D. in Computer Science</h3>
            <p class="text-gray-600">Seoul National University | 2022 - Present</p>
            <p class="text-gray-700 mt-2">Dissertation Focus: Deep Learning Applications</p>
        </div>

        <!-- 학력 2 추가 -->
        <div class="border-l-4 border-blue-500 pl-4">
            <h3>M.S. in Artificial Intelligence</h3>
            <p class="text-gray-600">KAIST | 2020 - 2022</p>
            <p class="text-gray-700 mt-2">GPA: 4.0 / 4.0, Thesis: AI for Healthcare</p>
        </div>
    </div>
</section>
```

---

## 📚 Publications 섹션 수정

```html
<section id="publications">
    <h2>Publications</h2>
    <div class="space-y-6">
        <!-- 논문 1 -->
        <article class="bg-white p-6 rounded-lg shadow-sm">
            <h3>논문 제목</h3>
            <p class="text-gray-600">You, J., Smith, A., et al.</p>
            <p class="text-gray-700"><em>IEEE Transactions on Machine Learning</em>, 2024</p>
            <a href="https://doi.org/...">View on IEEE →</a>
        </article>

        <!-- 논문 2 추가 -->
        <article class="bg-white p-6 rounded-lg shadow-sm">
            <h3>새로운 논문</h3>
            <p class="text-gray-600">You, J., et al.</p>
            <p class="text-gray-700"><em>Conference Name</em>, 2024</p>
            <a href="#">View Online →</a>
        </article>
    </div>
</section>
```

---

## 💻 Skills 섹션 수정

```html
<section id="skills">
    <h2>Skills</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 프로그래밍 언어 -->
        <div>
            <h3>Programming Languages</h3>
            <ul class="space-y-2 text-gray-700">
                <li>• Python</li>
                <li>• JavaScript / TypeScript</li>
                <li>• C++</li>
                <li>• R</li>
                <li>• MATLAB</li>
            </ul>
        </div>

        <!-- 라이브러리/프레임워크 -->
        <div>
            <h3>Frameworks & Libraries</h3>
            <ul class="space-y-2 text-gray-700">
                <li>• TensorFlow</li>
                <li>• PyTorch</li>
                <li>• scikit-learn</li>
                <li>• Pandas</li>
                <li>• OpenCV</li>
            </ul>
        </div>

        <!-- 도구/기술 -->
        <div>
            <h3>Tools & Technologies</h3>
            <ul class="space-y-2 text-gray-700">
                <li>• Git / GitHub</li>
                <li>• Docker</li>
                <li>• AWS</li>
                <li>• Linux</li>
                <li>• Jupyter</li>
            </ul>
        </div>
    </div>
</section>
```

---

## 🚀 Projects 섹션 수정

```html
<section id="projects">
    <h2>Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 프로젝트 1 -->
        <article class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md">
            <!-- 색상 변경: from-blue-400 to-blue-600 -->
            <div class="bg-gradient-to-r from-green-400 to-green-600 h-32"></div>
            <div class="p-6">
                <h3>프로젝트 제목</h3>
                <p class="text-gray-700 text-sm mb-4">
                    프로젝트 설명을 작성하세요.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                    <span class="px-3 py-1 bg-green-100 text-green-800 text-xs rounded">
                        기술1
                    </span>
                    <span class="px-3 py-1 bg-green-100 text-green-800 text-xs rounded">
                        기술2
                    </span>
                </div>
                <a href="https://github.com/..." target="_blank">
                    GitHub →
                </a>
            </div>
        </article>

        <!-- 프로젝트 2 추가 (같은 구조) -->
    </div>
</section>
```

**프로젝트 배경 그래디언트 색상:**
- `from-blue-400 to-blue-600`
- `from-purple-400 to-purple-600`
- `from-green-400 to-green-600`
- `from-pink-400 to-pink-600`
- `from-orange-400 to-orange-600`

---

## 📞 Contact 섹션 수정

```html
<section id="contact">
    <h2>Get In Touch</h2>
    <div class="max-w-2xl mx-auto text-center">
        <p class="text-gray-700 mb-8">
            연락처를 원하는 사람들에게 보여줄 메시지를 작성하세요.
        </p>
        <div class="space-y-4">
            <p class="text-gray-700">
                <strong>Email:</strong> 
                <a href="mailto:your.email@example.com">
                    your.email@example.com
                </a>
            </p>
            <!-- 소셜 링크 -->
            <div class="flex justify-center gap-6">
                <!-- GitHub -->
                <a href="https://github.com/yourprofile" target="_blank">
                    GitHub
                </a>
                <!-- LinkedIn -->
                <a href="https://linkedin.com/in/yourprofile" target="_blank">
                    LinkedIn
                </a>
                <!-- Twitter (선택사항) -->
                <a href="https://twitter.com/yourprofile" target="_blank">
                    Twitter
                </a>
            </div>
        </div>
    </div>
</section>
```

---

## 🔤 폰트 변경

### Google Fonts 사용

1. [Google Fonts](https://fonts.google.com)에서 폰트 선택
2. 폰트 import 코드 복사
3. `index.html`의 `<style>` 섹션에 붙여넣기

```html
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
    * {
        font-family: 'Poppins', sans-serif;  <!-- 폰트명 변경 -->
    }
</style>
```

**추천 폰트:**
- `Inter` - 깔끔, 전문적
- `Poppins` - 현대적, 친근함
- `Roboto` - 균형잡힌, 가독성
- `Playfair Display` - 우아함, 호화로움

---

## 🌙 다크 모드 설정

다크 모드는 자동으로 활성화됩니다. 비활성화하려면:

`js/main.js`에서:

```javascript
// 주석 처리
// window.addEventListener('load', () => {
//     initDarkMode();
// });
```

또는 항상 라이트 모드:

```javascript
function initDarkMode() {
    // 아무것도 하지 않음
    document.documentElement.classList.remove('dark');
}
```

---

## 🖼️ 이미지 추가

### 디렉토리 구조

```
profile/
└── assets/
    └── images/
        ├── profile.jpg          # 프로필 사진
        ├── hero-bg.jpg          # 히어로 배경
        └── project-1.jpg        # 프로젝트 이미지
```

### 이미지 추가 방법

```html
<!-- 프로필 사진 -->
<img src="assets/images/profile.jpg" alt="My Profile" class="w-32 h-32 rounded-full">

<!-- 프로젝트 배경 -->
<div class="project-image" style="background-image: url('assets/images/project-1.jpg')"></div>
```

### 이미지 최적화

온라인 도구로 이미지 압축:
- [TinyPNG](https://tinypng.com) - PNG/JPG 압축
- [Squoosh](https://squoosh.app) - Google의 이미지 최적화

---

## 📱 모바일 메뉴 커스터마이징

메뉴 아이콘 변경 (`index.html`):

```html
<!-- 기본: 햄버거 메뉴 -->
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
</svg>

<!-- X 아이콘으로 변경 -->
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
```

---

## 🎯 고급 커스터마이징

### 섹션 추가

```html
<!-- 새로운 섹션 -->
<section id="awards" class="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold ...">Awards & Honors</h2>
        <!-- 내용 -->
    </div>
</section>
```

네비게이션에도 추가:

```html
<a href="#awards" class="nav-link hover:text-blue-600 transition">Awards</a>
```

### 애니메이션 추가

`css/style.css`에 새로운 애니메이션 추가:

```css
@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-slide-in-right {
    animation: slideInRight 0.6s ease-out;
}
```

---

## 🧪 테스트 및 검증

1. **로컬 테스트**
   - 브라우저에서 `index.html` 열기
   - 모든 링크 클릭 확인
   - 모바일 크기로 축소해서 확인

2. **색상 대비 확인**
   - [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
   - WCAG AA 기준 (4.5:1 비율)

3. **반응형 테스트**
   - DevTools: F12 → Toggle device toolbar
   - 320px, 768px, 1024px, 1440px에서 확인

---

## 💾 파일 저장

텍스트 에디터에서 수정 후:
- **Windows**: Ctrl+S
- **Mac**: Cmd+S
- **Linux**: Ctrl+S

변경사항을 Git에 커밋:

```bash
git add .
git commit -m "Update resume content"
git push
```

---

## 📚 추가 학습

- [TailwindCSS 공식 문서](https://tailwindcss.com/docs)
- [HTML/CSS 튜토리얼](https://developer.mozilla.org)
- [웹 디자인 원칙](https://www.smashingmagazine.com)

---

**마지막 업데이트**: 2026-05-12

이제 자신만의 웹 이력서를 만들어보세요! 🚀
