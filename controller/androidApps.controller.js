const { AndroidApps } = require("../models")

class AndroidAppsController {
  static async getAndroidApps(req, res) {
    const data = await AndroidApps.getAndroidApps()
    res.status(200).json({ data })
  }

  static async getAndroidApp(req, res) {
    const id = req.params.id
    const data = await AndroidApps.getAndroidApp(id)
    res.status(200).json({ data })
  }

  static async createAndroidApps(req, res) {
    const { name, package_name } = req.body
    const payload = {
      name, package_name
    }
    const newAndroidApps = await AndroidApps.createAndroidApps(payload)
    res.status(201).json({ data: newAndroidApps })
  }

  static async updateAndroidApps(req, res) {
    const id_AndroidApps = req.params.id
    let payload = {}
    for (let key in req.body) {
      payload[key] = req.body[key]
    }
    const updated = await AndroidApps.updateAndroidApps(payload, id_AndroidApps)
    res.status(201).json({ data: updated })

  }

  static async deleteAndroidApps(req, res) {
    const { id } = req.params
    const deleted = await AndroidApps.deleteAndroidApps(id)
    res.status(200).json({ data: deleted })
  }
}

module.exports = AndroidAppsController