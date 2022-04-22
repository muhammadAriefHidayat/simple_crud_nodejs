const pool = require("../config")


class unitAds {

  static getunitAds = async () => {
    console.log("masuk model")
    const query = `
    select * from "unitAds";
    `
    const unitAds = await pool.query(query)
    console.log(unitAds)
    return unitAds.rows
  }

  static getunitAd = async (id) => {
    console.log("masuk model")
    const query = `select * from "unitAds" a where a.id  = ${id};`
    const unitAds = await pool.query(query)
    console.log(unitAds)
    return unitAds.rows[0]
  }

  static createunitAds = async (payload) => {
    const { type, apps_id } = payload
    const query = `INSERT INTO "unitAds"
    ("type", "apps_id")
    VALUES('${type}', '${apps_id}')
    RETURNING *;
    `

    const unitAds = await pool.query(query)
    console.log(unitAds)
    return unitAds.rows[0]
  }

  static deleteunitAds = async (id) => {
    const query = `
    DELETE FROM "unitAds"
    WHERE id=${id}
    RETURNING *;
    `
    const deleted = await pool.query(query)
    return deleted.rows[0]
  }

  static updateunitAds = async (payload, id) => {
    let query = `
    UPDATE "unitAds" SET
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

module.exports = unitAds