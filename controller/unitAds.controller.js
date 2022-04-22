const { unitAds } = require("../models")

class UnitAdsController {
  static async getUnitAds(req, res) {
    console.log("cokk")
    const data = await unitAds.getunitAds()
    res.status(200).json({ data })
  }

  static async getUnitAd(req, res) {
    const id = req.params.id
    console.log("cokkds")
    const data = await unitAds.getunitAd(id)
        console.log(data)
    res.status(200).json({ data })
  }

  static async createUnitAds(req, res) {
    const { type, apps_id } = req.body
    const payload = {
      type, apps_id
    }
    const newUnitAds = await unitAds.createunitAds(payload)
    res.status(201).json({ data: newUnitAds })
  }

  static async updateUnitAds(req, res) {
    const id_UnitAds = req.params.id
    let payload = {}
    for (let key in req.body) {
      payload[key] = req.body[key]
    }
    const updated = await unitAds.updateUnitAds(payload, id_UnitAds)
    res.status(201).json({ data: updated })

  }

  static async deleteUnitAds(req, res) {
    const { id } = req.params
    const deleted = await unitAds.deleteunitAds(id)
    res.status(200).json({ data: deleted })
  }
}

module.exports = UnitAdsController