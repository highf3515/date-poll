date-poll 프로젝트

1. GitHub - highf3515/date-poll 레포
2. Vercel - date-poll-jet.vercel.app 연결됨
3. Supabase - jxqojqsyanhgkyjquhxn.supabase.co

테이블
- polls (id, created_at, title)
- poll_dates (id, poll_id, date)
- votes (id, poll_id, user_name, date_id, available)
- availability (id, user_name, date, created_at)

권한 설정
- 모든 테이블 RLS 비활성화
- anon에 ALL 권한 부여

완성된 기능
- 달력 UI (월 이동, 날짜 선택/해제)
- 탭1: 날짜 투표 - 약속 만들기, 투표, 결과+이름 표시
- 탭2: 가능한 날짜 - 개인별 가능 날짜 입력, 취합 표시

다음 단계
- 링크 공유 기능
- 중복 투표 방지
- UI 디자인
- 로그인 기능 (Supabase Auth)
