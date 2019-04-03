
CREATE TABLE book_user(
  u_id INT  PRIMARY KEY auto_increment,
  u_telep CHAR(11) unique,
  u_pwd VARCHAR(20),
  u_name VARCHAR (20),
  u_gender bool ,
  u_birht VARCHAR(20)
  );
  INSERT INTO book_user VALUES(null,18234666333,'123456','lixin',0,'1996-12-1');
  INSERT INTO book_user VALUES(null,18234666555,'123456','dang',1,'1995-12-1');
  CREATE TABLE  books(
   b_id INT PRIMARY KEY auto_increment,
   b_name VARCHAR(20),
   b_price DECIMAL (5,2) ,
   b_desc VARCHAR(128),
   b_author VARCHAR(20),
   b_type VARCHAR (10),
   b_time VARCHAR(20),
   b_issold bool
  );
  INSERT INTO books VALUES (NULL,'活着',45.7,'活着才能更好的生活','于文华','教育类','2015-10-23',1)
