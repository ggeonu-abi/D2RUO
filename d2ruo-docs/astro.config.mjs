import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ggeonu-abi.github.io', 
  base: '/D2RUO', 

  integrations: [
    starlight({
      title: 'D2RUO',
      
      locales: {
        root: {
          label: '🇰🇷 한국어',
          lang: 'ko',
        },
        en: {
          label: '🇺🇸 English',
          lang: 'en',
        },
      },

      // 👇 1. 언어별 메뉴 숨김 처리를 위한 커스텀 CSS 연결 👇
      customCss: [
        './src/custom.css', 
      ],

      // 👇 2. 자동 업데이트용 사이드바 마커 복구 👇
      // --- AUTO-SIDEBAR-START ---
      sidebar: [
        { label: '📸 스크린샷', link: '#screenshots-kr', attrs: { class: 'ko-menu' } },
        { label: ' 1. 테러존 & 우버디아 오버레이', link: '#h3-ko-1', attrs: { class: 'ko-menu h3-item' } },
        { label: ' 2. 사용자 맞춤형 버프 오버레이 및 프로필 관리', link: '#h3-ko-2', attrs: { class: 'ko-menu h3-item' } },
        { label: ' 3. 실시간 아이템 사전 검색', link: '#h3-ko-3', attrs: { class: 'ko-menu h3-item' } },
        { label: ' 4. 스피드런 타이머', link: '#h3-ko-4', attrs: { class: 'ko-menu h3-item' } },
        { label: '🚀 시작하기', link: '#getting-started-kr', attrs: { class: 'ko-menu' } },
        { label: ' 1. 다운로드 및 준비', link: '#h3-ko-5', attrs: { class: 'ko-menu h3-item' } },
        { label: ' 2. 실행 및 설정', link: '#h3-ko-6', attrs: { class: 'ko-menu h3-item' } },
        { label: '⌨️ 단축키 안내', link: '#hotkeys-kr', attrs: { class: 'ko-menu' } },
        { label: '✨ 주요 기능', link: '#features-kr', attrs: { class: 'ko-menu' } },
        { label: ' 1. 😈 테러존 & 우버디아 트래킹', link: '#h3-ko-7', attrs: { class: 'ko-menu h3-item' } },
        { label: ' 2. 📖 실시간 아이템 사전 검색', link: '#h3-ko-8', attrs: { class: 'ko-menu h3-item' } },
        { label: ' 3. 🛡️ 강력한 버프 오버레이', link: '#h3-ko-9', attrs: { class: 'ko-menu h3-item' } },
        { label: ' 4. 🗺️ 지역 및 몬스터 추적', link: '#h3-ko-10', attrs: { class: 'ko-menu h3-item' } },
        { label: ' 5. ⏱️ 스피드런 타이머', link: '#h3-ko-11', attrs: { class: 'ko-menu h3-item' } },
        { label: ' 6. 📷 장비 & 스킬 세팅 캡처 매니저', link: '#h3-ko-12', attrs: { class: 'ko-menu h3-item' } },
        { label: ' 7. 📺 방송 송출', link: '#h3-ko-13', attrs: { class: 'ko-menu h3-item' } },
        { label: '💡 커스텀 꿀팁', link: '#custom-tips-kr', attrs: { class: 'ko-menu' } },
        { label: '📂 파일 및 폴더 설명', link: '#files-kr', attrs: { class: 'ko-menu' } },
        { label: '💻 테스트 환경 및 문제 해결 / FAQ', link: '#environment-kr', attrs: { class: 'ko-menu' } },
        { label: '☕ 피드백 & 후원하기', link: '#support-kr', attrs: { class: 'ko-menu' } },
        { label: ' 💡 버그 신고 및 기능 제안', link: '#h3-ko-14', attrs: { class: 'ko-menu h3-item' } },
        { label: ' ☕ 후원하기', link: '#h3-ko-15', attrs: { class: 'ko-menu h3-item' } },
        { label: '📸 Screenshots', link: '#screenshots-en', attrs: { class: 'en-menu' } },
        { label: ' 1. Next Terror Zone & DClone Progress', link: '#h3-en-16', attrs: { class: 'en-menu h3-item' } },
        { label: ' 2. Buff Overlay & Profile Management', link: '#h3-en-17', attrs: { class: 'en-menu h3-item' } },
        { label: ' 3. Real-time Item Search Dictionary', link: '#h3-en-18', attrs: { class: 'en-menu h3-item' } },
        { label: ' 4. Speedrun Timer', link: '#h3-en-19', attrs: { class: 'en-menu h3-item' } },
        { label: '🚀 Getting Started', link: '#getting-started-en', attrs: { class: 'en-menu' } },
        { label: ' 1. Download & Preparation', link: '#h3-en-20', attrs: { class: 'en-menu h3-item' } },
        { label: ' 2. Run & Configure', link: '#h3-en-21', attrs: { class: 'en-menu h3-item' } },
        { label: '⌨️ Hotkeys', link: '#hotkeys-en', attrs: { class: 'en-menu' } },
        { label: '✨ Key Features', link: '#features-en', attrs: { class: 'en-menu' } },
        { label: ' 1. 😈 Real-time TZ & DClone Tracker', link: '#h3-en-22', attrs: { class: 'en-menu h3-item' } },
        { label: ' 2. 📖 In-game Item Search Dictionary', link: '#h3-en-23', attrs: { class: 'en-menu h3-item' } },
        { label: ' 3. 🛡️ Powerful Buff Overlay', link: '#h3-en-24', attrs: { class: 'en-menu h3-item' } },
        { label: ' 4. 🗺️ Region & Monster Tracking [NEW]', link: '#h3-en-25', attrs: { class: 'en-menu h3-item' } },
        { label: ' 5. ⏱️ Speedrun Timer', link: '#h3-en-26', attrs: { class: 'en-menu h3-item' } },
        { label: ' 6. 📷 Gear & Skill Build Snapshot Manager [NEW]', link: '#h3-en-27', attrs: { class: 'en-menu h3-item' } },
        { label: ' 7. 📺 OBS Studio Streaming Support & UI Convenience [NEW]', link: '#h3-en-28', attrs: { class: 'en-menu h3-item' } },
        { label: '💡 Custom Tips', link: '#custom-tips-en', attrs: { class: 'en-menu' } },
        { label: '📂 File & Folder Descriptions', link: '#files-en', attrs: { class: 'en-menu' } },
        { label: '💻 Tested Environment & Troubleshooting / FAQ', link: '#environment-en', attrs: { class: 'en-menu' } },
        { label: '☕ Contact & Support', link: '#support-en', attrs: { class: 'en-menu' } },
        { label: ' 💡 Bug Reports & Feature Requests', link: '#h3-en-29', attrs: { class: 'en-menu h3-item' } },
        { label: ' ☕ Support', link: '#h3-en-30', attrs: { class: 'en-menu h3-item' } }
      ],
      // --- AUTO-SIDEBAR-END ---
    }),
  ],
});