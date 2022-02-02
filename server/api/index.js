const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
<<<<<<< HEAD
//router.use('/weather', require('./weather'))
=======
router.use('/cities', require('./cities'))
>>>>>>> d8e2393375f6ca3390685584c742bea799d75f19

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
