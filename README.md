[🇰🇷 한국어 (Korean)](#korean) | [🇺🇸 English](#english)

<a name="korean"></a>
# 🛡️ 디아블로 2: 레저렉션 다기능 유틸리티 오버레이 (D2R Utility Overlay - DUO)

디아블로 2: 레저렉션 플레이를 더욱 쾌적하게 만들어주는 **다기능 유틸리티 오버레이(DUO)** 프로그램입니다. 기존의 **다음 공역(Terror Zone)** 및 **우버디아(Diablo Clone)** 실시간 추적 기능은 물론, 사용자 맞춤형 **버프 스킬 타이머** 및 **실시간 아이템 사전 검색** 등 게임에 유용한 다양한 편의 기능들을 화면 위에 실시간으로 제공합니다.

> **⚠️ 사용 주의 및 안전성 안내 (Disclaimer & Safety Notice):**
> * **구조적 안전성:** 본 프로그램(DUO)은 게임 클라이언트 파일을 변조하거나 게임의 핵심 데이터인 **메모리(RAM)에 일절 접근하지 않는 100% 화면 캡처(OCR) 기반 외부 앱**입니다. 디스코드 화면 공유나 방송 송출 프로그램(OBS)과 완벽히 동일한 원리로 구동되므로, 안티치트 시스템(Warden)을 자극할 물리적 접점이 없어 기존의 파일 변조 모드(Mod)나 메모리 변조 툴보다 **압도적으로 안전**합니다.
> * **자동화 기능 전무:** 마우스 클릭이나 키보드 입력을 자동으로 제어하는 매크로(물약 자동 복용, 자동 조준 등) 기능이 일절 포함되어 있지 않으며, 오직 순수한 시각적·청각적 정보 알림만 제공합니다.
> * **면책 조항 고지:** 다만, 블리자드 이용약관(EULA)의 '공식 인가되지 않은 제3자 외부 프로그램'이라는 포괄적 규정 특성상, 온라인 멀티플레이 환경에서 100% 면책을 보장하는 외부 도구는 존재하지 않습니다. 본 프로그램의 사용으로 인해 발생하는 만에 하나의 계정 정지 등 모든 불이익에 대한 책임은 전적으로 사용자 본인에게 있으므로, 위험성을 인지하고 동의하시는 분만 사용해 주시기 바랍니다.

---

## 📑 목차 (Table of Contents)
* [📸 스크린샷 (Screenshots)](#screenshots-kr)
* [🚀 시작하기 (Quick Start)](#getting-started-kr)
* [⌨️ 단축키 안내 (Hotkeys)](#hotkeys-kr)
* [✨ 주요 기능 (Key Features)](#features-kr)
* [💡 커스텀 꿀팁 (Custom Tips)](#custom-tips-kr)
* [📂 파일 및 폴더 설명](#files-kr)
* [💻 테스트 환경 및 문제 해결 / FAQ (Troubleshooting)](#environment-kr)
* [☕ 피드백 & 후원하기 (Contact & Support)](#support-kr)

---

## <a id="screenshots-kr"></a>📸 스크린샷 (Screenshots)

### 1. 테러존 & 우버디아 오버레이
![다음 공역과 진행률 표시 화면](images/tz_kor.png)
![우버디아 진행율 서버별 표시](images/uber_kor.png)
> 화면 상단에 다음 공역 정보 및 남은 시간을, 우측 하단에 대륙별 우버디아 진행도를 직관적인 블록(`■■■□□□`)으로 표시합니다.

### 2. 사용자 맞춤형 버프 오버레이 및 프로필 관리
![버프 오버레이 표시 화면](images/buff-overlay.png)
![버프 프로필 설정 화면](images/buff_profile_kor.png)
> 내가 원하는 스킬 아이콘을 직접 캡처하여 버프 지속 시간을 설정하고 관리할 수 있습니다. 직관적인 설정 화면에서 캐릭터나 빌드별로 프로필을 나누어 스킬을 그룹화해 보세요.

### 3. 실시간 아이템 사전 검색
![아이템 사전 검색 화면](images/item_fav_kor.png)
> 게임 내에서 바로 유니크/룬워드 아이템의 옵션, 재료, 별칭 등을 검색하고 트레더리(Traderie) 시세까지 즉시 확인할 수 있습니다.

### 4. 스피드런 타이머 (Speedrun Timer)
![스피드런 타이머 화면](images/timer_kor.png)
> 장비 교체나 빌드 변경 후 클리어 타임이 얼마나 단축되었는지 직관적으로 비교하고 상세 통계를 기록할 수 있습니다.

---

## <a id="getting-started-kr"></a>🚀 시작하기 (Quick Start)

### 1. 다운로드 및 준비
1. [👉 최신 릴리즈 페이지(클릭)](https://github.com/ggeonu-abi/D2RUO/releases/latest/download/DUO_Setup.exe)로 이동하여 최신 버전의 **설치 파일**(`DUO_Setup.exe`)을 다운로드하여 실행합니다.
   * **기본 설치 경로:** `%LocalAppData%\Programs\D2R Utility Overlay` (폴더 주소창에 복사/붙여넣기 하시면 바로 이동됩니다)
2. 원활한 데이터 수신을 위해 [d2tz.info 회원가입/로그인](https://www.d2tz.info/login) 후 **User Profile**에서 개인 **API Key(Token)** 를 복사합니다.

> **💡 버전 업데이트 시 기존 설정 유지 방법**
> * **자동 업데이트 (권장):** 프로그램 실행 시 최신 버전 알림이 뜨면 하단의 **`⚡ 자동 업데이트`** 버튼을 클릭하세요. 기존 설정(UI 위치, 폰트, 프로필 등)이 모두 유지된 채 안전하게 자동 설치 및 재실행됩니다.
> * **수동 업데이트:** 깃허브에서 새 버전의 설치 파일(`.exe`)을 직접 다운로드해서 설치하신 경우, 기존 프로그램을 지울 필요 없이 그대로 설치를 진행하시면 기존 설정(`d2_overlay_config.json`, `profiles` 폴더 등)이 안전하게 유지됩니다. (만약의 경우에도 이 파일들을 백업하여 이용하시면 됩니다.)

![자동 업데이트 버튼 표시 화면](images/auto-update_kor.png)
> 💡 새 버전이 감지되면 화면 상단에 **`⚡ 자동 업데이트`** 버튼이 나타납니다.

### 2. 실행 및 설정
1. **디아블로 2: 레저렉션**을 실행합니다. (전체화면 모드 권장)
2. 바탕화면이나 시작 메뉴에 생성된 **D2R Utility Overlay** 단축 아이콘을 실행합니다. *(게임 클라이언트를 관리자 권한으로 실행했다면 이 프로그램도 관리자 권한으로 실행해야 합니다.)*
3. 단축키 **`Ctrl` + `Shift` + `S`** 를 누르거나 시스템 트레이(우측 하단 시계 옆) 아이콘을 우클릭하여 **`⚙️ 환경설정`** 창을 엽니다.
4. 환경설정 창에 복사한 **API Key(Token)** 를 붙여넣고 언어, 폰트, 오버레이 위치 등 입맛에 맞게 세팅합니다.

---

## <a id="hotkeys-kr"></a>⌨️ 단축키 안내 (Hotkeys)

오버레이를 더욱 빠르고 편리하게 제어하기 위한 단축키입니다. (단축키는 환경설정에서 변경 가능)

| 구분 | 단축키 | 기능 설명 |
| :--- | :---: | :--- |
| **공통 설정** | `Ctrl` + `Shift` + `S` | 환경설정 창 즉시 열기 (게임 중) |
| **아이템 검색** | `Ctrl` + `F` | 아이템 사전 검색창 열기 |
| | `Tab` | (검색창 내) 유니크 / 룬워드 탭 전환 |
| | `↑` / `↓` | (검색창 내) 검색 결과 상하 이동 |
| | `ESC` | 검색창 닫기 |
| **아이템 자동 인식** | `Ctrl` + `R` | 영역 드래그 수동 캡처 |
| | `Ctrl` + `T` | ⚡ 아이템 툴팁 자동 박스 인식 |
| **장비/세팅 스냅샷** | `Ctrl` + `B` | 📷 장비 / 세팅 스크린샷 매니저 열기 / 닫기 |
| **게임 진행 보조** | `Shift` + `C` | 현재 방 이름 복사 (릴레이 방 입장 편의) |
| **버프 타이머** | `PageUp` / `PageDown` | 버프 스킬 프로필 전환 |
| | 사용자가 설정한 키 | 지정한 버프 타이머 실행 |
| **스피드런 타이머** | `Home` | 타이머 시작 / 일시정지 |
| | `End` | 기록 완료 (현재 소요 시간 저장) |
| | `Shift` + `Del` | 전체 기록 및 통계 초기화 |

---

## <a id="features-kr"></a>✨ 주요 기능 (Key Features)

### 1. 😈 테러존 & 우버디아 트래킹 (Terror Zone & DClone)
* 🎯 **스마트 즐겨찾기 알림:** 원하는 공역 지정 시 발견 즉시, 그리고 시작 5분 전에 텍스트 깜빡임 및 소리로 알려줍니다.
* 🔔 **우버디아 맞춤 알림 & 출현 감지:** 확장팩(LoD/RotW) 선택이 가능하며 단계 상승 시 소리/TTS 알림을 제공합니다. 갱신 주기 사이 우버디아가 이미 출현하여 단계가 리셋(하락)된 경우에도 출현 가능성 경고음과 음성으로 신속하게 알려줍니다.
* ⚡ **초절전 스마트 폴링:** 트래픽 낭비 방지를 위해 갱신이 필요한 시점에만 API를 정교하게 호출하며, 단계 변동 감지 시 자동으로 고속 갱신(부스트) 모드로 전환됩니다.

### 2. 📖 실시간 아이템 사전 검색 (Item Dictionary)
* 🔍 **강력하고 유연한 다중 검색:** 영문/한글 공식 명칭, **베이스 아이템**, **조합 룬**, **별칭**(예: '샤코', '오심') 등을 **띄어쓰기로 자유롭게 조합하여 검색**할 수 있습니다. 
* 🤖 **아이템 자동 인식 (OCR) 및 맞춤 설정 (윈도우11 전용):** 단축키로 영역 드래그(`Ctrl` + `R`) 또는 툴팁 자동 박스 인식(`Ctrl` + `T`)이 가능합니다.
  * 변동옵션을 상황에 맞게 다양한 방식(최소, 최대, 비율 적용 등)으로 선택하여 자동 입력합니다.
  > *(쉬운 설명: 트레더리에 검색할 때 아이템 옵션 수치를 일일이 손으로 적을 필요 없이, 단축키 한 번이면 프로그램이 화면을 읽어 자동으로 입력해 주는 편리한 기능입니다.)*
* 📈 **트레더리(Traderie) 완벽 연동 (시세 검색 & 매물 바로 등록) [새로운 기능]:**
  * **🛒 실시간 시세 검색:** 현재 설정된 옵션 수치를 반영하여 트레더리 실시간 시세 검색 페이지를 즉시 엽니다.
  * **📝 매물 바로 등록 (Price Check):** 변동 옵션 수치가 이미 입력된 상태로 트레더리 매물 등록 페이지를 바로 띄워줍니다. 하단의 'Create Listing'을 누르고 원하는 가격만 적으면 몇 초 만에 즉시 출품이 완료됩니다.
  * **📦 카테고리 통합 아이템의 세부 베이스 자동 감지 & 선택기:** '모든 부츠', '모든 장갑' 등 통합 아이템 인식 시 화면 속 텍스트(예: 샤크스킨 부츠)를 자동 분석하여 세부 베이스를 맞춰줍니다. 시세 검색은 전체 매물을 넓게 보고, 매물 등록은 해당 세부 베이스로 정확하게 출품할 수 있는 스마트 하이브리드 기능을 지원합니다.
  * **⚡ 즉시 툴팁 안내:** 검색 및 등록 버튼, 베이스 선택기에 마우스를 올리는 즉시 대기 시간 없이 직관적인 툴팁 도움말이 표시됩니다.
* 💾 **아이템 획득 기록 (DB) [새로운 기능]:** 어떤 옵션의 아이템을 어느 지역에서 득템했는지 기록을 남기고 언제든 조회할 수 있습니다. 이 기능은 하단의 '지역 통계 기능'과 연동됩니다.

### 3. 🛡️ 강력한 버프 오버레이 (Buff Overlay)
* 📑 **프로필 및 스킬 관리:** 빌드별로 프로필을 생성하고, 게임 화면 내 스킬 아이콘을 직접 캡처하여 쉽게 단축키와 지속시간을 등록할 수 있습니다.
* 🚨 **중앙 카운트다운 알림 [새로운 기능]:** 스킬 중에 중요하다고 생각되는 항목에 체크해두시면, 알림이 시작될 때 화면 가운데에 카운트다운 및 깜빡임이 추가로 표시되어 전투 중에도 재시전 타이밍을 절대 놓치지 않게 도와줍니다.
* 🔄 **스마트 버프 초기화 및 무시:** 
  * **자동 초기화:** 방 입장/퇴장 시 타이머를 자동으로 초기화합니다.
  * **초기화 무시 설정:** 인벤토리나 파티창 단축키 등을 등록해두면, 창을 닫기 위해 누른 키(예: ESC) 때문에 버프가 리셋되는 것을 막아줍니다.
* 🎨 **디테일한 커스텀:** 아이콘 크기, 타이머 위치, 시간 형식을 입맛에 맞게 조정하고, `sounds` 폴더에 원하는 음원을 넣어 개별 알림음으로 지정할 수 있습니다.

### 4. 🗺️ 지역 및 몬스터 추적 (Region & Monster Tracker) [새로운 기능]
* ⏱️ **지역 진입 인식 및 통계:** 어느 지역에 얼마나 머물렀는지 인식하고 체류 시간 통계를 산출합니다. 직전 지역의 체류 시간을 팝업으로 즉시 확인 가능하며, 아이템 DB 기능과 연동되어 득템 명당을 분석할 수 있습니다.
* 🧭 **미니 가이드맵:** 출구 생성에 규칙이 있는 지역의 경우, 화면 우측 하단에 출구 방향 미니맵을 표시합니다. (설정에서 표시 여부 및 시간 조절 가능)
* 👁️ **몬스터 속성 알림 (Warlock 전용 / 윈도우 11 OCR 기반):** 악마 속박(Bind Demon) 등을 위해 특정 속성을 찾아야 할 때, 화면 속 몬스터 텍스트를 실시간 인식하여 설정해둔 조건이 일치하는 몬스터를 팝업과 알림음으로 즉시 알려줍니다. (아이템 자동 인식과 동일하게 Windows 11 기본 캡처 도구의 OCR 엔진을 기반으로 동작합니다.)

### 5. ⏱️ 스피드런 타이머 (Speedrun Timer)
* 📊 **기록 비교 및 통계:** 장비 교체나 빌드 변경에 따른 클리어 타임 변화를 측정하는 데 최적화되어 있습니다. 직전 런 대비 시간 단축/지연 여부를 색상(+/-)으로 직관적으로 보여줍니다.
* 📌 **실시간 상세 데이터:** 화면 늘어남 없이 고정된 UI로 누적 실행 횟수, 평균 소요 시간, 최고 기록을 깔끔하게 제공합니다.

### 6. 📷 장비 & 스킬 세팅 캡처 매니저 (Gear & Skill Build Snapshot) [새로운 기능]
* 🛡️ **부위별 슬롯 캡처:** 본체 장비(12개 슬롯: 투구, 갑옷, 주/스왑 무기 및 방패, 장갑, 벨트, 신발, 목걸이, 반지 1/2), 용병 장비(3개 슬롯: 투구, 갑옷, 무기), 부적(참), 스텟/고급 통계(1~3) 및 스킬트리(1~4)까지 빌드의 모든 구성을 부위별로 캡처하여 체계적으로 관리할 수 있습니다.
* ⚡ **스마트 자동 & 드래그 캡처 지원:**
  * **⚡ 자동 캡처:** 슬롯의 '자동' 버튼 클릭 후 게임 내에서 아이템에 마우스를 올리고 **`Space`** 키를 누르면 툴팁 영역을 자동으로 감지하여 깔끔하게 캡처합니다. (취소: `ESC`)
  * **⌨ 드래그 캡처:** 슬롯의 '드래그' 버튼 클릭 후 **`Space`** 키를 누르면 영역 지정 창이 열리며, 마우스 드래그로 원하는 부위를 직접 캡처할 수 있습니다. (취소: `ESC`)
* 📜 **자유로운 부적(참) 추가/관리:** 번개파괴참, 횃불, 애니참, 스몰참 등 원하는 이름으로 부적 슬롯을 무제한으로 추가하고 개별 캡처할 수 있습니다.
* 🔍 **캡처 이미지에서 아이템 사전 & 시세 연동:** 슬롯에 등록된 장비/부적 카드의 `🔍` 버튼을 누르면 고성능 OCR이 아이템 정보를 즉시 읽어 DUO 아이템 사전으로 연결하며, 트레더리(Traderie) 실시간 시세까지 원클릭으로 조회할 수 있습니다.
* 🖼️ **깔끔한 일괄 합성 & 원클릭 클립보드 복사:**
  * **🛡️ 장비/부적 합치기:** 본체 장비, 용병 장비, 부적을 균형 있는 3열 세로형 카드 레이아웃의 이미지 1장으로 깔끔하게 자동 합성합니다.
  * **🌟 전체 다 합치기:** 장비 + 용병 + 부적 + 스텟/고급 통계 및 스킬트리까지 모든 세팅을 보기 좋은 하나의 세로형 이미지로 합성합니다.
  * **📋 클립보드 복사:** 완성된 합성 이미지뿐만 아니라, **각 슬롯의 개별 이미지(확대 창)** 에서도 버튼 한 번으로 클립보드에 즉시 복사하여 디스코드, 카페, 커뮤니티 등에 바로 붙여넣기(`Ctrl` + `V`)로 공유할 수 있습니다.
* 📂 **개별 파일 저장 & 멀티 빌드 관리:**
  * **개별 이미지 파일 자동 보관:** 상단의 **`📂 저장 폴더 열기`** 버튼을 누르면 캡처된 각 부위별 원본 이미지 파일(`.png`)들이 저장된 폴더를 바로 열어 자유롭게 확인하고 활용할 수 있습니다.
  * **멀티 빌드 관리 & 줌 뷰어:** 여러 캐릭터나 빌드별로 프로필을 분리하여 생성/복제/검색할 수 있으며, 카드 썸네일 클릭 시 고해상도 원본 이미지를 마우스 드래그(Pan)로 확대 조회할 수 있습니다.

### 7. 📺 방송 송출(OBS Studio) 지원 및 UI 편의성 [새로운 기능]
* 🎥 **OBS Studio 전용 스트림 오버레이 (윈도우 캡처 지원):**
  * 환경설정에서 `OBS 송출용 오버레이 활성화`를 켜면, OBS Studio의 **[윈도우 캡처]** 소스에서 `DUO - Stream Overlay` 창을 추가할 수 있습니다.
  * 테러존, 우버디아, 버프 타이머 등 게임 화면 위의 모든 오버레이를 1:1 위치 그대로 투명 캔버스 위에 일괄 렌더링하여 깜빡임 없이 안정적으로 방송 송출 화면에 합성합니다.
  * 전체화면 게임 중 알트탭 등으로 게임 창이 포커스를 잃더라도 송출 화면이 사라지지 않고 상시 유지됩니다.
* 🖱️ **클릭 관통 (Click-through):** 오버레이가 마우스 클릭을 방해하지 않습니다.
* 💬 **스마트 단축키 차단:** 엔터(Enter) 키로 채팅창을 열어둔 상태에서는 버프 스킬이나 아이템 단축키가 반응하지 않도록 개선하여 오작동을 방지합니다.
* 📋 **게임 명칭 복사:** 릴레이 방(예: 이름 뒤 숫자 증가) 진행 시, 현재 입장한 방 이름을 단축키(`Shift` + `C`) 한 번으로 복사하여 다음 방 입장 시 빠르게 붙여넣기할 수 있습니다.
* 🔔 **아이템 표시 여부 스마트 알림:** 전리품 필터 사용 시 '아이템 표시 전환'이 꺼져있는 것을 깜빡하지 않도록, 방 입장 후 기능 미활성화 시 상단 알림 메시지를 띄워줍니다.
* 🔄 **자유로운 레이아웃 및 자동 업데이트:** 드래그 앤 드롭 패널 조정, 클릭 한 번으로 완료되는 편리한 자동 업데이트 기능을 지원합니다.

---

## <a id="custom-tips-kr"></a>💡 커스텀 꿀팁 (Custom Tips)
* **설치 폴더 열기:** 시스템 트레이(우측 하단 시계 옆)의 DUO 아이콘을 우클릭하여 `📂 설치 폴더 열기`를 클릭하면 프로그램이 설치된 폴더로 즉시 이동할 수 있습니다. 아래의 커스텀 작업 시 이 기능을 적극 활용하세요!
* **폰트 변경:** 설치 폴더를 연 뒤, `fonts` 폴더 안에 폰트 파일을 넣으시면 환경설정에서 선택하여 적용할 수 있습니다.
* **알림음 변경:** 설치 폴더 내의 `sounds` 폴더에 원하는 음원 파일(`.wav`, `.mp3`)을 넣으시면 알림음 설정 시 선택하여 적용할 수 있습니다.
* **프로필 복사 및 공유:** 설치 폴더 내의 `profiles` 폴더를 통째로 복사하면 직접 생성한 버프 프로필을 다른 분들과 편하게 공유하거나 안전하게 백업하실 수 있습니다.
* **빌드 스냅샷 백업 및 공유:** `builds` 폴더 내의 각 빌드 폴더를 백업하거나 다른 사용자에게 전달하면 캡처한 장비 세팅 및 합성 이미지를 그대로 공유하거나 보관할 수 있습니다.

---

## <a id="files-kr"></a>📂 파일 및 폴더 설명

프로그램 설치 경로(`C:\Users\<사용자명>\AppData\Local\Programs\D2R Utility Overlay`) 내의 주요 파일 구조입니다.

| 파일/폴더명 | 설명 |
| :--- | :--- |
| `DUO.exe` | 프로그램 메인 실행 파일 |
| `d2r_stats.db` | 지역 통계와 아이템 득템 기록 등을 저장하는 통계 데이터베이스 (SQLite) |
| `act_map.json` | ⚠️ 테러존 지역 레벨(지옥 난이도) 및 Act 분류 필수 데이터 (삭제 금지) |
| `area.json` | ⚠️ 테러존 다국어 번역 필수 데이터 (삭제 금지) |
| `d2_overlay_config.json` | 사용자 환경설정 저장 파일 (자동 생성) |
| `profiles/` | 캡처한 버프 스킬 아이콘 및 설정(`skills.json`)이 저장되는 폴더 |
| `builds/` | 빌드별 장비/스킬 스크린샷 이미지 및 세팅 데이터(`build_info.json`) 보관 폴더 |
| `sounds/` | 버프 종료 임박 시 사용할 사용자 지정 알림음 보관 폴더 |
| `item/data/` | 아이템 사전 검색에 사용되는 데이터베이스 파일(`.json`, `.tsv`) 보관 폴더 |
| `fonts/` | 폰트 폴더 (원하시는 폰트를 직접 추가해서 사용하세요.) |
| `models/` | 화면 문자 인식(아이템 자동 인식, 몬스터 속성 감지 등 OCR)에 필요한 엔진 모듈들이 저장되는 폴더 |
| `assets\guides\` | 미니 가이드맵 표시용 이미지들 |
| `log/` | 프로그램 작동 로그(`.log`) 및 디버그/캡처 이미지 파일이 저장되는 폴더 |

> **📝 로그 파일 안내 (`.log`)**
> 로그 파일과 디버그/캡처 이미지는 `log/` 폴더에 분리되어 안전하게 보관됩니다. 작업 표시줄 트레이 아이콘을 우클릭한 뒤 **「📁 로그 폴더 열기」**를 누르면 탐색기로 즉시 이동할 수 있습니다.
> 로그 파일은 프로그램 작동 상태를 기록하며, 파일 용량이 커지면 파일명에 `_backup`이 붙어 백업(예: `app_debug_backup.log`)되고 최신 정보는 `.log` 파일에 기록됩니다. **문제 발생 시 이슈(Issue) 등록 시 `log` 폴더 내의 로그 파일과 디버그 이미지를 함께 첨부해 주시면 보다 빠르고 정확한 분석 및 원인 파악이 가능합니다.**
> * `app_debug.log` : 기본 로그 파일
> * `api_usage.log` : d2tzinfo 데이터 요청 기록 (테러존, 우버디아)
> * `ocr_debug.log` : 글자 인식 동작 관련 로그 파일
> * `area_debug.log` : 지역 이름 인식 동작 관련 로그 파일
> * `monster_debug.log` : 몬스터 인식 동작 관련 로그 파일

---

> **⚖️ 오픈소스 라이선스 고지:**
> * 본 프로그램은 LGPLv3 라이선스를 따르는 **PySide6**를 동적 링크하여 사용하고 있습니다. 
> * 게임 화면 내 텍스트 인식(OCR)을 위해 Apache 2.0 라이선스를 따르는 **Tesseract OCR** 및 **pytesseract**를 사용하고 있습니다.

---

## <a id="environment-kr"></a>💻 테스트 환경 및 문제 해결 / FAQ (Troubleshooting)

이 프로그램은 아래의 환경에서 개발 및 테스트되었습니다. 사용자 환경에 따라 약간의 차이가 있을 수 있습니다.
* **OS:** Windows 11 Pro 25H2 (64-bit)
* **Display:** 2560x1440 (QHD)
* **Game:** 디아블로 2: 레저렉션 (주로 전체화면 모드에서 테스트하며 창모드도 병행. 권장: 전체화면 모드)
* **Build:** Python 3.12 (PySide6)

**🌐 마이크로소프트 엣지(Edge) "일반적으로 다운로드되지 않습니다" 경고 대처**
엣지 브라우저나 윈도우 스마트스크린에서 다운로드를 차단하는 것은 악성코드라서가 아니라, 출시 초기라 다운로드 유저 수가 적어 안전 평판 데이터가 아직 쌓이지 않았기 때문입니다. 안심하고 아래 순서대로 유지해 주세요.
1. 엣지 다운로드 목록(`Ctrl` + `J`)을 엽니다.
2. 다운로드된 파일 항목의 우측 **점 세 개(...)** 버튼을 눌러 **[유지]** 를 선택합니다.
3. 추가 안내 창이 뜨면 **[더 보기]** 를 클릭한 후, **[그래도 계속]** 을 누르면 정상적으로 설치 파일이 받아집니다.
*(쉬운 설명: 대기업 프로그램이 아니면 브라우저가 예방 차원에서 경고를 띄우는 자연스러운 현상입니다. 위험한 파일이 아니니 안심하고 다운로드를 계속 진행하시면 됩니다.)*

**🖥️ OLED / HDR 사용자 안내 (툴팁 자동 인식 오류 관련)**
고해상도 OLED 또는 HDR 모니터를 사용하는 환경에서 아이템 자동 인식 기능이 지속적으로 실패하는 경우, 윈도우 HDR 화면 캡처 시 발생하는 왜곡으로 인해 아이템 툴팁 배경이 너무 투명해져서 OCR(문자 인식) 프로그램이 이를 읽지 못하는 문제일 수 있습니다.

이를 해결하기 위한 한 가지 방법으로, 디아블로 2 레저렉션 게임 내 설정인 **[게임플레이] -> [손쉬운 사용] -> [큰 글자 모드]를 활성화**해 보세요. 이 설정을 켜면 툴팁 배경의 불투명도가 높아져 문자 인식률을 높이는 데 필요한 대비(Contrast)가 크게 개선될 수 있습니다. 일부 사용자 환경에서 효과가 있는 것으로 확인되었으나, 디스플레이 설정 및 사양에 따라 결과는 달라질 수 있습니다.
*(쉬운 설명: HDR 모니터 특성상 화면을 캡처할 때 배경이 너무 투명해지면, 프로그램이 글자와 배경을 구별하기 힘들어집니다. 게임 안에서 큰 글꼴 모드를 켜면 글자 배경이 더 어두워지고 선명해져서 프로그램이 글씨를 훨씬 잘 읽을 수 있게 됩니다.)*

**✂️ OCR(화면 문자 인식: 아이템 및 몬스터 속성 인식 등) 기능이 작동하지 않는 경우 (캡처 도구 문제 해결)**
본 프로그램의 **모든 화면 문자 인식(OCR) 기능** — **아이템 자동 인식**(`Ctrl`+`R`, `Ctrl`+`T`), **몬스터 속성 자동 인식**(악마술사 전용), **지역 진입 감지**, **세팅 매니저 장비 OCR** 등 — 은 Windows 11 기본 캡처 도구(Snipping Tool)의 내장 OCR 엔진을 공통으로 추출하여 구동됩니다.

따라서 윈도우 10에서 윈도우 11으로 업그레이드 하셨거나 시스템 업데이트 중 문제가 발생한 경우, 윈도우 기본 캡처 도구가 11 버전으로 정상 업데이트되지 않거나 내부 파일이 꼬여 **아이템 인식뿐만 아니라 몬스터 속성 감지 등 프로그램 내 모든 OCR 기능에서 글자를 전혀 읽지 못하는 오류**가 발생할 수 있습니다. 이 경우 아래 순서대로 캡처 도구를 점검하고 최신 버전으로 업데이트/재설치해 주셔야 모든 인식 기능이 정상 작동합니다.

1. PowerShell을 열고 `(Get-AppxPackage -Name Microsoft.ScreenSketch).InstallLocation` 명령을 입력하세요.
2. 결과로 출력되는 설치 경로에 11버전이 아닌 10버전이 포함되어 있다면 캡처 도구 업데이트가 누락된 상황입니다.
3. 만약 결과 경로가 11버전으로 나오더라도 아이템이나 몬스터 속성 인식이 전혀 동작하지 않는다면, 캡처 도구가 시스템에 정상적으로 설치되지 않았거나 내부 파일이 꼬여있는 상태일 수 있습니다.
4. 위 상황들에 해당한다면 [마이크로소프트 문제 해결 및 캡처도구 다운로드 링크](https://support.microsoft.com/en-us/windows/uninstall-and-reinstall-paint-and-snipping-tool-d21261f8-1c3a-4776-9262-2d34928b1962)를 참고하여 캡처 도구를 완전히 삭제 후 재설치 및 업데이트를 진행해 주세요.

*(쉬운 설명: 아이템 자동 인식, 몬스터 속성 알림, 지역 이름 인식 등 DUO의 모든 글자 읽기 기능은 윈도우 11 최신 캡처 도구의 인식 엔진을 공유합니다. 윈도우 버전은 올라갔는데 캡처 도구는 구형 버전 그대로 멈춰있거나 시스템 상에서 엉켜있으면 화면 속 글씨를 전혀 읽지 못해 아이템과 몬스터 속성 모두 인식이 안 됩니다. 버전이 11로 나와도 작동하지 않는다면, 링크를 통해 최신 캡처 도구를 지우고 다시 설치해 주시면 모든 인식 기능이 깔끔하게 해결됩니다.)*

**👾 몬스터 속성 자동 인식(Monster OCR)이 작동하지 않거나 알림이 안 뜨는 경우 (FAQ)**
몬스터 속성 자동 인식 및 팝업/소리 알림이 원활하게 동작하지 않을 때는 아래 체크리스트를 순서대로 확인해 주세요.

1. **Windows 11 OS 및 기본 캡처 도구 최신 상태 확인 (가장 중요):**
   * 본 프로그램의 화면 문자 인식(OCR) 기능(아이템 인식, 몬스터 속성 인식 등)은 Windows 11 기본 캡처 도구 엔진을 기반으로 동작합니다. 몬스터 속성을 전혀 읽지 못하거나 알림이 뜨지 않는다면, 바로 위의 **[✂️ OCR(화면 문자 인식) 기능이 작동하지 않는 경우]** 안내를 참고하여 캡처 도구 버전 확인 및 재설치를 진행해 주세요.
2. **인식 영역(OCR) 좌표 설정 확인:**
   * 환경설정(`Ctrl` + `Shift` + `S`) -> **[👾 몬스터 인식]** 탭에서 **화면 인식 영역**이 현재 사용 중인 디스플레이 해상도 및 게임 화면 위치에 맞게 지정되어 있는지 확인해 주세요.
   * 필요 시 **`🎯 영역 마우스로 새로 지정`** 버튼을 누른 뒤, 몬스터에 마우스를 올렸을 때 화면 상단 중앙에 나타나는 이름 및 속성 텍스트 영역을 직접 드래그하여 좌표를 새로 맞춰주세요.
3. **캡처 영역 내 다른 글자/오버레이 간섭 여부 (화면 캡쳐 방식 권장):**
   * 몬스터 인식 캡처 영역 안에 화면 상단 테러존 안내 등 다른 오버레이 UI나 글자가 겹쳐 있으면 문자인식에 간섭이 생길 수 있습니다.
   * 💡 **권장 팁:** 환경설정의 **`화면 캡쳐 방식`** 을 **`디아블로 화면만 캡쳐`** 로 설정하시면, 외부 오버레이나 다른 창의 방해 없이 순수한 디아블로 게임 화면만 캡처하므로 인식 방해를 완벽히 방지할 수 있습니다.
4. **필수 속성(`*`) 및 최소 부가옵션 개수 설정 확인:**
   * 인식할 속성 목록에서 속성명 앞에 별표(`*`)가 붙은 속성(예: `*악마`, `*저주받음`)은 **모든 필수 조건이 100% 일치**해야만 감지됩니다.
   * **최소 부가옵션 개수**가 너무 높게 설정되어 있으면 조건을 충족하지 못해 알림이 발생하지 않습니다. (필수 속성만 매칭되면 알림을 받고 싶으신 경우 `0`으로 설정)
5. **활성화된 버프 프로필의 캐릭터 직업 확인 (악마술사 전용 기능):**
   * 몬스터 속성 인식 기능은 악마술사(Warlock)의 '악마 속박(Bind Demon)' 스킬 지원을 위해 설계되었으며, 불필요한 시스템 자원(CPU) 낭비를 방지하기 위해 **현재 활성화된 버프 프로필의 캐릭터 직업이 `악마술사`로 설정되어 있을 때만 동작**합니다.
   * 다른 직업(원소술사, 성기사 등) 프로필이 켜져 있는 상태에서는 몬스터 탐지가 대기 상태로 유지되므로, 환경설정의 버프 프로필 관리에서 직업이 '악마술사'로 지정된 프로필을 사용 중인지 확인해 주세요.

*(쉬운 설명: 윈도우 11 최신 상태에서 내 화면에 맞게 인식 영역을 잡았는지 확인하고, 상단 테러존 등의 글자 간섭을 피하려면 캡처 방식을 '디아블로 화면만 캡쳐'로 변경해 보세요. 또한 필수(*)와 부가옵션 조건이 맞는지, 현재 켜둔 버프 프로필이 악마술사 직업으로 되어 있는지도 꼭 체크해 주세요!)*

**👥 멀티로더 사용 시 기능이 동작하지 않는 경우 (관리자 권한)**
멀티로더를 사용하여 게임을 실행하실 경우 게임이 보통 관리자 권한으로 실행됩니다. 이 경우에는 **본 오버레이 프로그램(DUO) 또한 관리자 권한으로 실행해야만** 정상적으로 오버레이 기능과 단축키가 작동합니다. 바탕화면의 DUO 바로가기 아이콘을 우클릭하여 '관리자 권한으로 실행'을 선택해 주세요. (기존 본문에 안내가 있으나 문제 해결을 위해 다시 한번 기입합니다.)
*(쉬운 설명: 게임이 관리자 권한(더 높은 권한)으로 켜져 있으면, 우리 오버레이 프로그램도 똑같이 높은 권한을 가져야 게임 화면 위에 무언가를 띄우거나 키보드 입력을 감지할 수 있습니다.)*

**🛡️ 백신 오탐지(False Positive) 대처 안내**
이 프로그램은 게임 내 단축키 감지를 위해 `keyboard` 모듈을 사용합니다. 정식 설치형(`.exe`) 배포 방식을 도입하여 오탐지 확률을 크게 낮추었으나, 여전히 일부 백신 프로그램이 이를 악성 코드로 오인하여 실행을 차단할 수 있습니다. 
*(쉬운 설명: 키보드 입력을 가로채는 기능은 해킹 프로그램들이 자주 쓰는 방식이라 백신이 일단 의심하고 차단하는 자연스러운 현상입니다.)*

주로 다음과 같은 진단명으로 오탐지될 수 있습니다:
* **Windows Defender:** `Program:Win32/Contebrew.A!ml` *(쉬운 설명: 진단명 끝의 '!ml'은 머신러닝 기반 탐지를 의미합니다. 프로그램의 작동 방식을 AI가 기계적으로 분석해 예방 차원에서 차단했을 확률이 높습니다.)*

만약 실행이 차단되거나 프로그램 파일이 사라진다면 아래의 방법들을 적용해 보세요:

1. **백신 검사 제외 대상 등록 (권장):** 프로그램 실행이 되지 않으실 경우, 기본 설치 경로인 `C:\Users\<사용자명>\AppData\Local\Programs\D2R Utility Overlay` 폴더 전체를 백신의 '검사 제외 항목(예외 처리)'으로 등록해 주세요.
2. **설치 경로 유지:** 기본 경로인 `AppData\Local` 폴더는 윈도우 시스템이 일반적인 앱 데이터로 인지하는 안전한 구역이므로 오탐지 확률을 줄여줍니다. 경로를 임의로 변경하지 않는 것을 권장합니다.
3. **스마트 앱 컨트롤 해제:** Windows 11의 **스마트 앱 컨트롤(Smart App Control)** 기능이 켜져 있다면 이를 해제해야 정상적으로 실행 가능합니다.
4. **GitHub Star 누르기:** 배포 중인 GitHub 레포지토리에 별(Star) ⭐을 많이 눌러주시면, 프로그램의 사용자 신뢰도 지표가 높아져 장기적으로 스마트스크린 등의 오탐지를 줄이는 데 큰 도움이 됩니다.

---

## <a id="support-kr"></a>☕ 피드백 & 후원하기 (Contact & Support)

### 💡 버그 신고 및 기능 제안 (Feedback)
프로그램 사용 중 발생하는 **버그(문제)** 나 **새로운 기능 제안**은 언제든지 환영합니다! 아래의 편한 방법으로 알려주세요.
* **GitHub Issues (권장):** [이슈 페이지(클릭)](https://github.com/ggeonu-abi/D2RUO/issues)에 글을 남겨주시면 개발자가 가장 빠르고 체계적으로 확인하고 처리 상태를 추적할 수 있습니다.
* **이메일 문의:** GitHub 사용이 익숙하지 않으시다면 `miabohoja1@gmail.com` 으로 편하게 메일 보내주셔도 좋습니다.

### ☕ 후원하기 (Donation)
**본 프로그램은 누구나 무료로 자유롭게 사용할 수 있습니다!** 만약 이 프로그램이 게임 플레이에 큰 도움이 되셨다면, 향후 지속적인 업데이트와 더 좋은 기능 개발을 위해 커피 한 잔의 여유를 선물해 주시면 큰 힘이 됩니다!

* [👉 카카오페이로 커피 한 잔 후원하기 (모바일 환경에서 링크 클릭)](https://qr.kakaopay.com/FTeinPf5n9c405794)

> PC 환경이신 경우, 아래의 QR 코드를 스마트폰 기본 카메라나 카카오톡 스캔 기능으로 찍어주세요!

<img src="images/kakaopay.JPG" width="250" alt="카카오페이 후원 QR 코드">

---

<div style="display: flex; align-items: center; flex-wrap: wrap;">
  <span style="margin-right: 6px;"><a href="https://lifemoneyhub.com">D2RUO</a> © 2026 by <a href="https://lifemoneyhub.com">Vellen</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a></span>
  <div style="display:flex; align-items:center; gap:2px; line-height:0;">
   <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="height: 1.2em; margin:0; display:block;">
   <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="height: 1.2em; margin:0; display:block;">
   <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="height: 1.2em; margin:0; display:block;">
   <img src="https://mirrors.creativecommons.org/presskit/icons/nd.svg" alt="" style="height: 1.2em; margin:0; display:block;">
  </div>
</div>

**Credits:** Data provided by [D2TZ.info](https://www.d2tz.info/)

<br><br><br>

---

<a name="english"></a>
# 🛡️ Diablo 2: Resurrected Utility Overlay (DUO)

[⬆️ Back to Top / 한국어](#korean)

A **multi-purpose utility overlay (DUO)** designed to comprehensively enhance your Diablo 2: Resurrected gameplay. In addition to real-time tracking for the upcoming **Terror Zone** and **Diablo Clone** progression across servers, it provides various quality-of-life utilities, such as a highly customizable **Buff Skill Timer** and an **In-game Item Search Dictionary**, directly on your game screen.

> **⚠️ Disclaimer & Safety Notice:**
> * **Structural Safety:** DUO is a 100% screen-capture (OCR) based external application that **never modifies, hooks, or accesses the game's memory (RAM) or client files**. It operates on the exact same technical mechanisms as standard recording/streaming software (such as OBS Studio or Discord screen share). Because it maintains zero contact with the game's internal data structures, it does not trigger Blizzard's anti-cheat system (Warden), making it **exponentially safer** than traditional client mods or memory-reading overlays.
> * **Zero Automation:** This utility contains absolutely no automated macro elements, such as auto-potion or automated keystrokes/mouse movements. It functions strictly as a non-intrusive visual and audio alert assistant.
> * **Terms of Use:** However, under the broad definition of 'unauthorized third-party software' in Blizzard's EULA, no external utility can claim absolute immunity in a multiplayer environment. **The user assumes all responsibility and risk** for any consequences, including account restrictions, that may arise from using this program. Please use it at your own discretion.

---

## 📑 Table of Contents
* [📸 Screenshots](#screenshots-en)
* [🚀 Getting Started](#getting-started-en)
* [⌨️ Hotkeys](#hotkeys-en)
* [✨ Key Features](#features-en)
* [💡 Custom Tips](#custom-tips-en)
* [📂 File & Folder Descriptions](#files-en)
* [💻 Tested Environment & Troubleshooting / FAQ](#environment-en)
* [☕ Contact & Support](#support-en)

---

## <a id="screenshots-en"></a>📸 Screenshots

### 1. Next Terror Zone & DClone Progress
![Terror Zone Screen](images/tz_eng.png)
![Diablo Clone Screen](images/uber_eng.png)

### 2. Buff Overlay & Profile Management
![Buff Overlay Screen](images/buff-overlay.png)
![Buff Profile Settings Screen](images/buff_profile_eng.png)
> Capture any skill icon directly from the game screen to set up and manage your own buff durations. Group your skills by profile for different characters or builds using the intuitive settings UI.

### 3. Real-time Item Search Dictionary
![Item Search Screen](images/item_fav_eng.png)
> Instantly search for Unique/Runeword items, base materials, aliases, and check their market value on Traderie without tabbing out of the game.

### 4. Speedrun Timer
![Speedrun Timer Screen](images/timer_eng.png)
> Intuitively compare and record how much your clear time has improved after changing your equipment or builds.

---

## <a id="getting-started-en"></a>🚀 Getting Started

### 1. Download & Preparation
1. Go to the [👉 Latest Release Page (Click)](https://github.com/ggeonu-abi/D2RUO/releases/latest/download/DUO_Setup.exe), download the **installer (`DUO_Setup.exe`)**, and run it.
   * **Default Installation Path:** `%LocalAppData%\Programs\D2R Utility Overlay` (You can copy & paste this into your file explorer address bar)
2. Sign up/Login to [d2tz.info](https://www.d2tz.info/login) and copy your **API Key (Token)** from the User Profile page.

> **💡 How to keep your settings when updating:**
> * **Auto-Update (Recommended):** Simply click the **`⚡ Auto-Update`** button on the overlay when a new version is detected. It will safely download and install the update in the background while preserving all your custom settings and profiles.
> * **Manual Update:** If you download the new `.exe` installer manually, simply run it. It will safely overwrite the files while preserving your old `d2_overlay_config.json` and `profiles`.

![Auto-Update button display screen](images/auto-update_eng.png)
> 💡 When a new version is detected, the **`⚡ Auto-Update`** button appears at the top of the screen.

### 2. Run & Configure
1. Run **Diablo 2: Resurrected**. (Fullscreen Mode recommended).
2. Run the **D2R Utility Overlay** shortcut created on your Desktop or Start Menu. *(Run as administrator if your D2R client is also running as admin).*
3. Press **`Ctrl` + `Shift` + `S`** or right-click the system tray icon to open the **`⚙️ Settings`** window.
4. Paste your **API Key (Token)** into the settings and customize layouts, hotkeys, and features.

---

## <a id="hotkeys-en"></a>⌨️ Hotkeys

| Category | Hotkey | Function |
| :--- | :---: | :--- |
| **Global** | `Ctrl` + `Shift` + `S` | Open Settings Instantly |
| **Item Search** | `Ctrl` + `F` | Open Item Search Window |
| | `Tab` | (In Search) Toggle Unique / Runeword Tabs |
| | `↑` / `↓` | (In Search) Navigate Search Results |
| | `ESC` | Close Search Window |
| **Item Recognition** | `Ctrl` + `R` | Drag scan item area manually |
| | `Ctrl` + `T` | ⚡ Auto-detect item tooltip box |
| **Build Snapshot** | `Ctrl` + `B` | 📷 Open / Close Gear & Skill Build Snapshot Manager |
| **QoL Features** | `Shift` + `C` | Copy current game name (for quick Relay Runs) |
| **Buff Overlay** | `PageUp` / `PageDown` | Switch Buff Profiles |
| | User Defined Keys | Trigger Specific Buff Timer |
| **Speedrun Timer** | `Home` | Start / Pause Timer |
| | `End` | Record Complete (Save Lap Time) |
| | `Shift` + `Del` | Reset All Records & Stats |

---

## <a id="features-en"></a>✨ Key Features

### 1. 😈 Real-time TZ & DClone Tracker
* 🎯 **Custom Favorite Alerts:** Get text blinks and sound notifications when your favorite zones are discovered and 5 mins before they start.
* 🔔 **Uber Alerts & Spawn Detection:** Choose your expansion (LoD/RotW) and get notified when DClone stages increase. Also provides warning chimes and voice alerts if DClone progress drops unexpectedly (spawned and reset between polling cycles).
* ⚡ **Smart Polling:** Highly optimized API calls to prevent traffic waste, automatically switching to high-speed boost mode upon detecting stage changes.

### 2. 📖 In-game Item Search Dictionary
* 🔍 **Powerful & Flexible Search Engine:** Search quickly by English/Korean names, **base items**, required runes, or well-known **aliases**. Use spaces to combine these keywords effortlessly.
* 🤖 **Auto Recognition (OCR) & Custom Settings (Win 11 Only):** Quickly scan items by dragging (`Ctrl` + `R`) or using the auto-detect box (`Ctrl` + `T`). 
  * Choose exactly how the scanned numbers are applied (e.g., min only, max only, or percentage adjustments).
  > *(Easy Explanation: You no longer need to manually type item stats. Just press the hotkey, and the program will read the screen to automatically fill in the values for your Traderie search.)*
* 📈 **Seamless Traderie Integration (Price Check & Quick Listing) [NEW]:**
  * **🛒 Live Market Search:** Instantly opens the Traderie market page with your configured variable stats pre-applied.
  * **📝 Quick Listing (Price Check):** Opens the Traderie listing page with all scanned variable stats pre-filled. Simply click 'Create Listing' and enter your price to list items for sale in seconds!
  * **📦 Category Item Base Auto-Detection & Selector:** When scanning broad categories like 'All Boots' or 'All Gloves', DUO automatically detects the specific base item (e.g., Sharkskin Boots) from OCR text. Live search browses all boots broadly, while the listing button targets the exact base for immediate sale.
  * **⚡ Instant Tooltips:** Hovering over search/listing buttons or base dropdown displays descriptive tooltips with 0ms delay.
* 💾 **Item Drop History (DB) [NEW]:** Automatically records the stats and drop locations of your looted items, which can be reviewed anytime. Links with the new Region Statistics feature below!

### 3. 🛡️ Powerful Buff Overlay
* 📑 **Profile & Skill Management:** Create multiple profiles for different builds. Easily capture skill icons directly from the game screen to register hotkeys and durations.
* 🚨 **Center Screen Countdown [NEW]:** Check important skills to trigger a flashing countdown right in the center of your screen when the buff is about to expire, ensuring you never miss a recast during intense fights.
* 🔄 **Smart Reset & Ignore System:**
  * **Auto-Reset:** Automatically resets your buff timers upon entering or leaving a game.
  * **Ignore Keys:** Prevent accidental buff resets by registering keys like your inventory hotkey as 'Ignore if Prev Key'.
* 🎨 **Highly Customizable:** Adjust icon sizes, text sizes/positions, and formats. Assign custom audio files (`.wav`, `.mp3`) to individual skills using the `sounds` folder.

### 4. 🗺️ Region & Monster Tracking [NEW]
* ⏱️ **Region Entry & Statistics:** Tracks the exact time spent in each area and compiles statistics. Provides a popup for the previous area's time and links with the 'Item Drop DB' to analyze your most profitable farming spots.
* 🧭 **Mini Guide Map:** For areas with fixed exit generation rules, a mini-map pointing to the exit direction appears in the bottom right corner (Toggleable and display time configurable).
* 👁️ **Monster Attribute Alert (Warlock specific / Win 11 OCR):** When hunting for specific attributes (e.g., for Bind Demon), DUO scans monster attributes on screen in real time and triggers visual popups and sound cues. (Operates using the Windows 11 Snipping Tool OCR engine, identical to Auto Item Recognition.)

### 5. ⏱️ Speedrun Timer
* 📊 **Record Comparison:** Optimized for measuring clear time variations due to equipment swaps or build changes. It intuitively displays the time difference (+/-) from the previous run using color coding.
* 📌 **Real-time Statistics:** Provides a clean, fixed-size UI that displays your current elapsed time alongside runs, average clear time, and your best record.

### 6. 📷 Gear & Skill Build Snapshot Manager [NEW]
* 🛡️ **Comprehensive Slot-by-Slot Capture:** Manage and capture your entire build setup by individual slots — Character Gear (12 slots: Helm, Armor, Main/Swap Weapons & Shields, Gloves, Belt, Boots, Amulet, Rings 1 & 2), Mercenary Gear (3 slots: Helm, Armor, Weapon), Charms, and Character Stats & Skill Trees (Tabs 1–4).
* ⚡ **Smart Auto & Drag Capture Modes:**
  * **⚡ Auto Capture:** Click 'Auto' on any slot, hover over the item in-game, and press **`Space`** to automatically detect and cleanly crop the item tooltip. (Cancel: `ESC`)
  * **⌨ Drag Capture:** Click 'Drag' on any slot and press **`Space`** to open the drag selection window to manually capture any screen region. (Cancel: `ESC`)
* 📜 **Dynamic Custom Charms:** Add, name, and manage unlimited custom charm slots (e.g., Sunder Charms, Hellfire Torch, Annihilus, Small Charms).
* 🔍 **OCR Item Dictionary & Traderie Sync:** Click the `🔍` button on any captured gear/charm card to instantly recognize item stats via OCR, search in the DUO Item Dictionary, and check live market prices on Traderie with a single click.
* 🖼️ **Clean Batch Image Compositing & 1-Click Clipboard Copy:**
  * **🛡️ Merge Gear & Charms:** Automatically combines character gear, mercenary setup, and charms into a single clean 3-column vertical image.
  * **🌟 Merge Full Build:** Merges your entire setup — gear, mercenary, charms, stats, and skill trees — into one comprehensive build snapshot image.
  * **📋 Copy to Clipboard:** In addition to the final merged image, **individual slot images (via the zoom preview dialog)** can also be copied directly to your clipboard with one click for effortless sharing (`Ctrl` + `V`) in Discord and gaming communities.
* 📂 **Individual File Saving & Multi-Build Management:**
  * **Direct Folder Access:** Click the **`📂 Open Folder`** button to view and manage individual captured image files (`.png`) saved cleanly for each slot.
  * **Multi-Build Management & Zoom Viewer:** Create, clone, rename, and search multiple build setups. Click any card thumbnail to open a high-resolution viewer with smooth mouse drag panning.

### 7. 📺 OBS Studio Streaming Support & UI Convenience [NEW]
* 🎥 **Dedicated OBS Stream Overlay (Window Capture):**
  * Enable `OBS Stream Overlay` in Settings to register a dedicated `DUO - Stream Overlay` window for OBS Studio **[Window Capture]**.
  * All active overlays (Terror Zone, Uber Diablo, Buff Timers, etc.) are rendered 1:1 onto a single transparent canvas, providing a smooth, flicker-free stream overlay.
  * Maintains stable output on stream even when alt-tabbing or switching active applications.
* 🖱️ **Click-through:** Mouse clicks pass right through the overlay, ensuring uninterrupted gameplay.
* 💬 **Smart Chat Hotkey Block:** Opening the chat window with `Enter` safely disables overlay hotkeys (buffs, item search) to prevent misclicks and accidental triggers.
* 📋 **Quick Game Name Copy:** Easily copy the current game's name with a single hotkey (`Shift` + `C`). Perfect for quick copy-pasting during sequential relay runs.
* 🔔 **Smart Item Display Reminder:** If you use the 'Toggle Item Display' option in-game and forget to turn it on after joining a room (especially with loot filters), a helpful reminder message will appear at the top of the screen.
* 🔄 **Free Layout & Auto-Update:** Drag and drop panels anywhere. Enjoy seamless background updates with a simple 1-click update button.

---

## <a id="custom-tips-en"></a>💡 Custom Tips
* **Open Install Folder:** Right-click the DUO icon in the system tray (bottom right) and select **`📂 Open Install Folder`** to instantly access the directory. Use this convenient feature for the customizations below!
* **Custom Fonts:** Place your font files inside the `fonts` folder located in the install folder, and they will be available for selection in the settings.
* **Custom Alert Sounds:** Place your desired audio files (`.wav`, `.mp3`) inside the `sounds` folder to use them as custom alerts.
* **Profile Sharing & Backup:** Copy the `profiles` folder within the install directory to easily back up your custom buff profiles or share them with others.
* **Build Snapshot Backup & Sharing:** You can back up or share individual build folders inside the `builds` directory to keep or transfer your captured gear setups and composite images.

---

## <a id="files-en"></a>📂 File & Folder Descriptions

Structure inside your installation directory (`C:\Users\<YourUsername>\AppData\Local\Programs\D2R Utility Overlay`):

| File / Folder | Description |
| :--- | :--- |
| `DUO.exe` | Main executable file. |
| `d2r_stats.db` | SQLite database storing your region statistics and item drop history. |
| `act_map.json` | ⚠️ Essential TZ area level and Act data (Do not delete). |
| `area.json` | ⚠️ Essential TZ translation data (Do not delete). |
| `d2_overlay_config.json` | Auto-saved user preferences. |
| `profiles/` | Folder containing your captured buff icons and `skills.json`. |
| `builds/` | Folder containing gear/skill screenshots and build configuration data (`build_info.json`) per build. |
| `sounds/` | Place your custom `.mp3` or `.wav` files here for buff alerts. |
| `item/data/` | Database files used for the item search dictionary. |
| `fonts/` | Default built-in fonts. You can add your own font files here. |
| `models/` | Folder where OCR modules required for all recognition features (items, monster attributes, areas, etc.) are stored. |
| `assets\guides\` | Images used for displaying the mini guide map. |
| `log/` | Folder where operational logs (`.log`) and debug/capture images are stored. |

> **📝 Log Files (`.log`)**
> Log files and debug/capture images are organized inside the `log/` folder. You can easily open this folder anytime by right-clicking the system tray icon and selecting **"📁 Open Log Folder"**.
> These files record the operational status of the program. When a file's size grows, it is automatically backed up with a `_backup` suffix (e.g., `app_debug_backup.log`), while the latest information is continuously written to the `.log` file. **If you encounter any issues, providing the log files and debug images inside the `log/` folder when submitting an issue will enable much faster and more accurate analysis.**
> * `app_debug.log` : Default overarching log file.
> * `api_usage.log` : d2tzinfo data request logs (Terror Zone, DClone).
> * `ocr_debug.log` : Text recognition (OCR) operation logs.
> * `area_debug.log` : Region name recognition operation logs.
> * `monster_debug.log` : Monster recognition operation logs.

---

> **⚖️ Open Source License Notice:**
> * This program dynamically links **PySide6**, which is licensed under LGPLv3. 
> * This program uses **Tesseract OCR** and **pytesseract** for text recognition on the game screen, which are licensed under the Apache License 2.0.

---

## <a id="environment-en"></a>💻 Tested Environment & Troubleshooting / FAQ

* **OS:** Windows 11 Pro 25H2 (64-bit)
* **Display:** 2560x1440 (QHD)
* **Game:** Diablo 2: Resurrected (Recommended: Fullscreen Mode)
* **Build:** Python 3.12 (PySide6)

**🌐 Microsoft Edge "is not commonly downloaded" Warning**
If Microsoft Edge or Windows SmartScreen blocks the download, it is simply because the file is newly released and has not yet built up a download reputation history with Microsoft. It is safe to bypass.
1. Open the Edge download list (`Ctrl` + `J`).
2. Click the **three dots (...)** next to the blocked file and select **[Keep]**.
3. In the pop-up warning, click **[Show more]** and then select **[Keep anyway]** to complete the download.
*(Easy Explanation: This is a preventative warning triggered because the software is from an independent developer. The file is safe, so you can confidently click 'Keep anyway' to proceed.)*

**🖥️ For OLED / HDR Users (Tooltip Auto-Detection Issues)**
If you are playing on a high-resolution OLED/HDR monitor and the automatic item detection consistently fails, it might be due to Windows HDR screen capture distortion making the item tooltip background too transparent for the OCR to read. 

As a potential workaround, try going to your **D2R In-game Settings -> Game Play -> Accessibility -> and enable "Large Font Mode"**. This setting may increase the tooltip's background opacity, which could significantly improve the text recognition contrast. While this has proven helpful for some users, please note that results may vary depending on your specific display configuration.
*(Easy Explanation: Due to how HDR rendering works, captured screenshots can sometimes make the item description background too see-through, blending the text into the game world. Enabling Large Font Mode thickens and darkens the background, making it much easier for the program to scan the text clearly.)*

**✂️ OCR (Text Recognition: Items, Monster Attributes, etc.) Not Working (Snipping Tool Troubleshooting)**
All on-screen text recognition (OCR) features in DUO—including **Auto Item Recognition** (`Ctrl`+`R`, `Ctrl`+`T`), **Monster Attribute Detection** (Warlock utility), **Area Entrance Detection**, and **Build Snapshot Gear OCR**—share and rely on the modern Windows 11 Snipping Tool OCR engine.

If you upgraded from Windows 10 to Windows 11, or if a Windows update had issues, the Snipping Tool might not have updated to version 11 properly, or its package files may be corrupted. In this scenario, **not only item recognition, but also monster attribute detection and all other OCR functions will fail to scan on-screen text**. In this case, you must check, update, or reinstall the Snipping Tool as outlined below to restore all recognition features.

1. Open PowerShell and enter the command: `(Get-AppxPackage -Name Microsoft.ScreenSketch).InstallLocation`
2. If the output path shows a version 10 instead of 11, your Snipping Tool has not been updated to the Windows 11 version.
3. Even if the output path shows version 11, if item or monster attribute detection still does not work at all, the Snipping Tool might be corrupted or improperly registered in your system.
4. In any of these cases, please refer to the [Microsoft troubleshooting and download page](https://support.microsoft.com/en-us/windows/uninstall-and-reinstall-paint-and-snipping-tool-d21261f8-1c3a-4776-9262-2d34928b1962) to completely uninstall and reinstall the app.

*(Easy Explanation: All text-reading capabilities in DUO—such as item stats scanning, monster attribute alerts, and area name tracking—share the Windows 11 Snipping Tool OCR engine. If your Windows was upgraded to 11 but the Snipping Tool was left behind on an older version or became corrupted, the app will not be able to read any on-screen text, causing both item recognition and monster attribute detection to fail. Reinstalling the newest version via the link will fix the issue for all recognition features.)*

**👾 Auto Monster Attribute OCR / Detection Troubleshooting (FAQ)**
If the automatic monster attribute detection or popup/audio alert is not working properly, please review the following checklist:

1. **Windows 11 OS & Snipping Tool Updates (Most Critical):**
   * All screen text recognition (OCR) features in DUO—both Item Recognition and Monster Attribute Detection—share the Windows 11 Snipping Tool OCR engine. If monster attributes are not being detected at all, please refer to the **[✂️ OCR Not Working (Snipping Tool Troubleshooting)]** section right above to verify and update/reinstall your Snipping Tool.
2. **OCR Detection Area Settings:**
   * Open Settings (`Ctrl` + `Shift` + `S`) -> **[👾 Monster OCR]** tab and verify that the detection region coordinates match your current display resolution and game layout.
   * If necessary, click **`🎯 Select New Area with Mouse`** and drag across the top-center area of the screen where monster names and attributes appear to recalibrate coordinates.
3. **Overlapping Text / Overlay Interference (Screen Capture Method):**
   * If other text or overlay UI elements (such as Terror Zone info banners) overlap within the capture box, OCR accuracy may degrade.
   * 💡 **Recommended Tip:** Set the **`Screen Capture Method`** to **`Capture Diablo Window Only`** in Settings. This captures only the clean game client window without any interference from external overlay layers.
4. **Required Attributes (`*`) & Min. Optional Attributes Setting:**
   * In the attribute list, any attribute prefixed with an asterisk (`*`) (e.g. `*Demon`, `*Cursed`) is a **strictly required condition** that must match completely.
   * If the **Min. Optional Attributes** count is set higher than what the monster actually has, the alert will not trigger. (Set it to `0` if you only want alerts triggered by required attributes).
5. **Character Class in Active Buff Profile (Warlock Only):**
   * Monster Attribute OCR is designed specifically for the Warlock class ('Bind Demon' skill utility). To eliminate unnecessary CPU overhead, **detection only runs when the currently active Buff Profile is configured as `Warlock` (악마술사)**.
   * If a profile for another character class (e.g., Sorceress, Paladin) is active, monster detection automatically pauses. Please ensure your active buff profile's class is set to Warlock.

*(Easy Explanation: Make sure you are on Windows 11 with the capture region set to your screen, and try switching the capture method to 'Capture Diablo Window Only' to avoid overlay interference. Also check your required attributes (*), optional count, and make sure your active buff profile belongs to a Warlock!)*

**👥 Overlay Not Working When Using Multi-Loader (Run as Administrator)**
When using a multi-loader, the game is usually run with administrator privileges. In this case, you **must also run this overlay program (DUO) as an administrator** for it to work properly. Right-click the DUO shortcut and select 'Run as administrator'. (This is mentioned in the quick start, but noted here again for troubleshooting.)
*(Easy Explanation: If the game is running with higher (administrator) privileges, the overlay app also needs the exact same privileges to display things on top of the game window and detect your hotkeys.)*

**🛡️ Security & False Positives (Antivirus Blocks/Deletions)**
This program uses the `keyboard` module to detect your in-game hotkeys. Although switching to a standard installer (`.exe`) distribution significantly reduces false positives, some antivirus software may still incorrectly flag and block its execution. 
*(Easy Explanation: Intercepting keyboard input is a method frequently used by malicious programs, so it is a natural phenomenon for antivirus software to be suspicious and block it by default.)*

If the program won't run or the shortcut does not work, please try the following steps:

1. **Add to Exclusions (Recommended):** Add the installation folder (`C:\Users\<YourUsername>\AppData\Local\Programs\D2R Utility Overlay`) to your antivirus **exclusion/exception list**.
2. **Keep the Default Path:** Installing the program in the default `AppData\Local` directory helps reduce false positives, as it is a standard system directory for application data. It is recommended not to change this path.
3. **Disable Smart App Control:** If you are using Windows 11, you may need to turn off **Smart App Control** if it blocks execution.
4. **Star the GitHub Repo:** Leaving a Star ⭐ on this GitHub repository helps build the software's reputation metric over time, which may help reduce false positives from reputation-based filters.

---

## <a id="support-en"></a>☕ Contact & Support

### 💡 Bug Reports & Feature Requests (Feedback)
If you encounter any **bugs** or have ideas for **new features**, please feel free to let me know using the methods below!
* **GitHub Issues (Recommended):** Please leave a post on the [GitHub Issues page (Click)](https://github.com/ggeonu-abi/D2RUO/issues).
* **Email:** You can always send an email to `miabohoja1@gmail.com`.

### ☕ Support (Donation)
**This program is 100% free to use for everyone!**
However, if you found this tool helpful for your gameplay and wish to support its ongoing development, you can optionally buy the developer a coffee. Your support is always greatly appreciated!

* [👉 Buy me a coffee via PayPal (For non-Korean users)](https://paypal.me/haruyozzang/4)

<img src="images/paypal.png" width="250" alt="paypal QR code">

---

<div style="display: flex; align-items: center; flex-wrap: wrap;">
  <span style="margin-right: 6px;"><a href="https://lifemoneyhub.com">D2RUO</a> © 2026 by <a href="https://lifemoneyhub.com">Vellen</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a></span>
  <div style="display:flex; align-items:center; gap:2px; line-height:0;">
   <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="height: 1.2em; margin:0; display:block;">
   <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="height: 1.2em; margin:0; display:block;">
   <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="height: 1.2em; margin:0; display:block;">
   <img src="https://mirrors.creativecommons.org/presskit/icons/nd.svg" alt="" style="height: 1.2em; margin:0; display:block;">
  </div>
</div>

**Credits:** Data provided by [D2TZ.info](https://www.d2tz.info/)
