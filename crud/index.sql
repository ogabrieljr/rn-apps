create table users (id int auto_increment not null primary key, name varchar(10) not null unique, status varchar(10) not null);

create user 'jr'@'localhost' identified with mysql_native_password by '';
grant all on sample.* to jr@localhost;

insert into users(name, status) values('name', 'status');