date-poll 프로젝트

구조
- index.html - 로그인/회원가입
- groups.html - 그룹 목록, 생성, 참여
- app.html - 날짜 조율 (탭1: 투표, 탭2: 가능한 날짜)
- supabase.js - DB 연결 + 공통 함수
- style.css - 디자인

테이블
- polls (id, title, group_id, created_by, created_at)
- poll_dates (id, poll_id, date)
- votes (id, poll_id, user_name, date_id, available)
- availability (id, user_name, date, group_id, created_at)
- groups (id, name, invite_code, created_at)
- group_members (id, group_id, user_id, display_name, joined_at)

완성된 기능
- 아이디/비밀번호 로그인 (회원가입 시 자동 로그인)
- 그룹 생성 (초대코드 자동 생성) / 초대코드로 참여
- 그룹별 데이터 분리
- 탭1: 날짜 투표 - 약속 만들기(만든 사람 자동 투표), 투표(중복 방지), 만든 사람 표시, 날짜별 삭제(만든 사람만)
- 탭2: 가능한 날짜 - 날짜별 인원수 표시, 일괄 저장/삭제/선택해제
- 초대코드 복사, 이름 변경(기존 기록 일괄 업데이트) - app.html에 구현됨
