migration-run:
	mysql -u root -p trumppoursuit < sql/president.sql;
	mysql -u root -p trumppoursuit < sql/trump.sql;