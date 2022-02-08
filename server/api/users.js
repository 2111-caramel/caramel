const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router


//GET: all users api/users/
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//GET: single user  api/users/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId)
    if (!user){
      res.status(404).send("Sorry this user does not exist!")
    } else {
    res.json(user)
    }
  } catch (err) {
    next(err)
  }
})

//Update a user to api/users/:userId
router.put('/:userId', async (req, res, next) => {
  try {
    const id = req.params.userId
    const user = await User.findByPk(id);
    const updated = await user.update(req.body)
    res.send(updated);
  } catch (error) {
    next(error);
  }
});
