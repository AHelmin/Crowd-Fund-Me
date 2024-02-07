const router = require('express').Router();
const apiRoutes = require('./api/index.js');
const homeRoutes = require('./home-routes.js');
const profileRoutes = require('./profileRoutes.js')

router.use('/', homeRoutes);

router.use('/api', apiRoutes);

router.use('/profile', profileRoutes);

module.exports = router;
