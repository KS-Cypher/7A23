CREATE TABLE EMP( EMPNO number(10) primary key, ENAME VARCHAR2(20) not null);

CREATE TABLE DEPT( DNO number(10) primary key, DNAME VARCHAR2(20) not null, sal number(10));

INSERT into EMP(EMPNO, ENAME) values (2, "Vamshi");
INSERT into EMP(EMPNO, ENAME) values (1, "Krishna");
INSERT into EMP(EMPNO, ENAME) values (3, "Akhil");
INSERT into EMP(EMPNO, ENAME) values (4, "Varun");
INSERT into EMP(EMPNO, ENAME) values (5, "Vardhan");
INSERT into EMP(EMPNO, ENAME) values (6, "Ankith");

SELECT * FROM EMP;

INSERT into DEPT(DNO, DNAME, sal) values (1, "Business Department", 1000000000000000000000);
INSERT into DEPT(DNO, DNAME, sal) values (2, "External Affairs", 100000000000000);
INSERT into DEPT(DNO, DNAME, sal) values (3, "Economics", 1000000000001);
INSERT into DEPT(DNO, DNAME, sal) values (4, "FireWall Security", 1000000000000000);
INSERT into DEPT(DNO, DNAME, sal) values (5, "Finance", 1000000000000000099999);
INSERT into DEPT(DNO, DNAME, sal) values (6, "Production", 100000000000000000000);

SELECT * FROM DEPT;

CREATE TABLE EMPDEPT( EMPNO number(10) REFERENCES EMP(EMPNO), ENAME VARCHAR2(20) REFERENCES EMP(ENAME), DNAME VARCHAR2(20) REFERENCES DEPT(DNAME));

INSERT into EMPDEPT(EMPNO, ENAME, DNAME) values (1, "Krishna", "External Affairs");
INSERT into EMPDEPT(EMPNO, ENAME, DNAME) values (2, "Vamshi", "Business Department");
INSERT into EMPDEPT(EMPNO, ENAME, DNAME) values (3, "Akhil", "Finance");
INSERT into EMPDEPT(EMPNO, ENAME, DNAME) values (4, "Varun", "Economics");
INSERT into EMPDEPT(EMPNO, ENAME, DNAME) values (5, "Vardhan", "FireWall Security");
INSERT into EMPDEPT(EMPNO, ENAME, DNAME) values (6, "Ankith", "Production");

SELECT * FROM EMPDEPT;
