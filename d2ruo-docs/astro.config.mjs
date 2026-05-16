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
        { label: '🚀 시작하기', link: '#getting-started-kr', attrs: { class: 'ko-menu' } },
        { label: '⌨️ 단축키 안내', link: '#hotkeys-kr', attrs: { class: 'ko-menu' } },
        { label: '✨ 주요 기능', link: '#features-kr', attrs: { class: 'ko-menu' } },
        { label: '💡 커스텀 꿀팁', link: '#custom-tips-kr', attrs: { class: 'ko-menu' } },
        { label: '📂 파일 및 폴더 설명', link: '#files-kr', attrs: { class: 'ko-menu' } },
        { label: '💻 테스트 환경 및 주의사항', link: '#environment-kr', attrs: { class: 'ko-menu' } },
        { label: '☕ 피드백 & 후원하기', link: '#support-kr', attrs: { class: 'ko-menu' } },
        { label: '📸 Screenshots', link: '#screenshots-en', attrs: { class: 'en-menu' } },
        { label: '🚀 Getting Started', link: '#getting-started-en', attrs: { class: 'en-menu' } },
        { label: '⌨️ Hotkeys', link: '#hotkeys-en', attrs: { class: 'en-menu' } },
        { label: '✨ Key Features', link: '#features-en', attrs: { class: 'en-menu' } },
        { label: '💡 Custom Tips', link: '#custom-tips-en', attrs: { class: 'en-menu' } },
        { label: '📂 File & Folder Descriptions', link: '#files-en', attrs: { class: 'en-menu' } },
        { label: '💻 Tested Environment & Troubleshooting', link: '#environment-en', attrs: { class: 'en-menu' } },
        { label: '☕ Contact & Support', link: '#support-en', attrs: { class: 'en-menu' } }
      ],
      // --- AUTO-SIDEBAR-END ---
    }),
  ],
});