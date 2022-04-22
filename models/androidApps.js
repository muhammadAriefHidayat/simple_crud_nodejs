const pool = require("../config")


class androidApps {

  static getAndroidApps = async () => {
    const query = `
    select * from "androidApps";
    `
    const androidApps = await pool.query(query)
    console.log(androidApps)
    return androidApps.rows
  }

  static getAndroidApp = async (id) => {
    const query = `select * from "androidApps" a where a.id  = ${id};`
    const androidApps = await pool.query(query)
    console.log(androidApps)
    return androidApps.rows[0]
  }

  static createAndroidApps = async (payload) => {
    const { name, package_name } = payload
    const query = `INSERT INTO "androidApps"
    ("name", "package_name")
    VALUES('${name}', '${package_name}')
    RETURNING *;
    `

    const androidApps = await pool.query(query)
    console.log(androidApps)
    return androidApps.rows[0]
  }

  static deleteAndroidApps = async (id) => {
    const query = `
    DELETE FROM "androidApps"
    WHERE id=${id}
    RETURNING *;
    `
    const deleted = await pool.query(query)
    return deleted.rows[0]
  }

  static updateAndroidApps = async (payload, id) => {
    let query = `
    UPDATE "androidApps" SET
    `
    const arr = Object.keys(payload)
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        query += `${arr[i]}= '${payload[arr[i]]}'`
      } else {
        query += `${arr[i]}= '${payload[arr[i]]}',`
      }
    }
    query += `WHERE id=${id} RETURNING * ;`
    console.log(query)
    const updated = await pool.query(query)
    return updated.rows[0]
  }


}

module.exports = androidApps