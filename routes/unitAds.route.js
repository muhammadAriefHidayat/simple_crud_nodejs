const { UnitAdsController } = require("../controller")
const route = require("express").Router()


route.get("/", UnitAdsController.getUnitAds)
route.get("/:id", UnitAdsController.getUnitAd)
route.post("/", UnitAdsController.createUnitAds)
route.delete("/:id", UnitAdsController.deleteUnitAds)
route.put("/:id", UnitAdsController.updateUnitAds)

module.exports = route