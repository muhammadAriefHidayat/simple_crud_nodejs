const { AndroidAppsController } = require("../controller")
const route = require("express").Router()


route.get("/", AndroidAppsController.getAndroidApps)
route.get("/:id", AndroidAppsController.getAndroidApp)
route.post("/", AndroidAppsController.createAndroidApps)
route.delete("/:id", AndroidAppsController.deleteAndroidApps)
route.put("/:id", AndroidAppsController.updateAndroidApps)

module.exports = route