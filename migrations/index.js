const pool = require("../config")

const migrations = async () => {

    const query_create_AndroidApps = `create table "androidApps" (
    id serial primary key,
    name varchar(255) not null ,
    package_name varchar(255)
  )`


    const query_create_UnitAds = `create table "unitAds" (
    id serial primary key, 
    type varchar(255),
    apps_id int not null,
    constraint fk_unitAds_for_androidApps foreign key(apps_id) references "androidApps"(id) 
    );`



  try {
    await pool.query(query_create_AndroidApps)
    await pool.query(query_create_UnitAds)


  } catch (error) {
    console.log(error)
  }

}

migrations()

