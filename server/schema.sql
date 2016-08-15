CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  first_name varchar(40),
  last_name varchar(40),
  address varchar(250),
  phone_num1 varchar(10),
  phone_num2 varchar(10),
  phone_num3 varchar(10),
  username varchar(40),
  password varchar(40)
);

CREATE TABLE jobs (
  invoice serial primary key,
  cm_id integer references customers(id),
  status varchar(40),
  model_num varchar(40),
  serial_num varchar(40),
  next_step text,
  tracking_num varchar(40),
  tech_assigned integer references techs(id)
);

CREATE TABLE techs (
  id serial PRIMARY key,
  username varchar(40),
  password varchar(40)
);

CREATE TABLE appointments (
  id serial PRIMARY KEY,
  cm_id integer references customers(id),
  tech_id integer references techs(id),
  appt_time timestamp,
  appt_met boolean
);

-- insert into customers (
--   first_name,
--   last_name,
--   address,
--   phone_num1,
--   phone_num2,
--   phone_num3,
--   username,
--   password
-- )
-- values (
--   'Spencer',
--   'Kekauoha',
--   '777 Style Street, Provo, UT 88888',
--   '111-111-1111',
--   '222-222-2222',
--   '333-333-3333',
--   'spencer',
--   'password1'
-- );

CREATE TABLE jobs (
  invoice serial primary key,
  cm_id integer references customers(id),
  status varchar(40),
  model_num varchar(40),
  serial_num varchar(40),
  next_step text,
  tracking_num varchar(40),
  tech_assigned integer references techs(id)
);

insert into jobs (
  invoice,
  cm_id,
  tech_assigned,
  status,
  model_num,
  serial_num,
  next_step,
  tracking_num
)
values (
  35168,
  4,
  1,
  'Awaiting Customer Authorization',
  'KidTrax Dodge Charger Police',
  '50165-55163AC',
  'Contact for Troubleshooting',
  'null'
)

insert into techs (
  username,
  password
)
values(
  'alex',
  'password1'
);

insert into appointments (
  cm_id,
  tech_id,
  appt_time,
  appt_met
)
values (
  4,
  2,
  '2016-08-18T17:18:50.725Z',
  'false'
)
