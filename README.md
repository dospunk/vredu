# vredu
Project for UGA HAcks 5!

## Backend

- Generate unique codes
- Associate codes with proper environments 
- Retire unused codes

## Frontend 

### Teacher

- Display all environemnts
- generate codes

### Student

- Allow student to enter code
- Load correct environemnt 

### api

- `/code`
	- gives generated code as plain text
	- accepts POST
- `/envlist`
	- gives list of environments as json
	- accepts POST
	- **note: `path` and `imgPath` should be prefixed with `/envs/` and `/img/` respectively**

### Database

#### envs
```
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| envId       | int(11)      | NO   | PRI | NULL    | auto_increment |
| name        | varchar(32)  | NO   |     | NULL    |                |
| path        | varchar(128) | NO   |     | NULL    |                |
| description | varchar(225) | YES  |     | NULL    |                |
| imgPath     | varchar(128) | YES  |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
```

#### codes

```
+-------+------------+------+-----+---------+-------+
| Field | Type       | Null | Key | Default | Extra |
+-------+------------+------+-----+---------+-------+
| code  | varchar(6) | NO   | PRI | NULL    |       |
| envId | int(11)    | YES  | MUL | NULL    |       |
+-------+------------+------+-----+---------+-------+
```