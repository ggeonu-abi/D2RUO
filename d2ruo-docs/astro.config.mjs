import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ggeonu-abi.github.io', 
  base: '/D2RUO', 

  integrations: [
    starlight({
      title: 'D2RUO',

      // --- AUTO-SIDEBAR-START ---
      sidebar: [
        {
          label: '🇰🇷 한국어 가이드',
          items: [
            { label: '📸 스크린샷', link: '/#screenshots-kr' },
            { label: '🚀 시작하기', link: '/#getting-started-kr' },
            { label: '⌨️ 단축키 안내', link: '/#hotkeys-kr' },
            { label: '✨ 주요 기능', link: '/#features-kr' },
            { label: '💡 커스텀 꿀팁', link: '/#custom-tips-kr' },
            { label: '📂 파일 및 폴더 설명', link: '/#files-kr' },
            { label: '💻 테스트 환경 및 주의사항', link: '/#environment-kr' },
            { label: '☕ 피드백 & 후원하기', link: '/#support-kr' }
          ],
        },
        {
          label: '🇺🇸 English Guide',
          items: [
            { label: '📸 Screenshots', link: '/#screenshots-en' },
            { label: '🚀 Getting Started', link: '/#getting-started-en' },
            { label: '⌨️ Hotkeys', link: '/#hotkeys-en' },
            { label: '✨ Key Features', link: '/#features-en' },
            { label: '💡 Custom Tips', link: '/#custom-tips-en' },
            { label: '📂 File & Folder Descriptions', link: '/#files-en' },
            { label: '💻 Tested Environment & Troubleshooting', link: '/#environment-en' },
            { label: '☕ Contact & Support', link: '/#support-en' }
          ]
        }
      ],
      // --- AUTO-SIDEBAR-END ---
    }),
  ],
});