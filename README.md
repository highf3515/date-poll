date-poll 프로젝트

1. GitHub - highf3515/date-poll 레포
2. Vercel - date-poll-jet.vercel.app 연결됨
3. Supabase - jxqojqsyanhgkyjquhxn.supabase.co

테이블
- polls (id, created_at, title)
- poll_dates (id, poll_id, date)
- votes (id, poll_id, user_name, date_id, available)

권한 설정
- polls, poll_dates, votes → RLS 비활성화
- anon에 ALL 권한 부여

진행상황
- 달력 UI 완성
- 약속 만들기 기능 구현 중 (poll_dates INSERT 오류 해결 중)

다음 단계
- poll_dates RLS 문제 해결
- 약속 목록에 날짜 표시
- 투표 기능 구현
