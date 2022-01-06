# mobile-invitation-Server

모바일청첩장 프로젝트

```초기설정
- docker실행
 docker-compose up -d

- docker compose 접속
 docker exec -it mobile_invitation_db bash

- mysql login
 mysql -u root -p

- database 수동 생성
 CREATE DATABASE mobile_invitation_db;

 - Mysql8 - node사이의 인증모듈 문제로 Plugin 변경 필요(console에서 root 계정 로그인하여 진행)
  ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'odora';
```

```명령어
- docker 컨테이너 종료(삭제)
 docker rm -f mobile_invitation_db
```
