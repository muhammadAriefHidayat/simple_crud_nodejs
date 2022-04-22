const route = require("express").Router()
const androidRoutes = require('./androidApps.route')
const unitRoutes = require('./unitAds.route')

route.use("/AndroidApps", androidRoutes)
route.use("/UnitAds", unitRoutes)


module.exports = route