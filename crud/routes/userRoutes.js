const express= require('express');
const { home, createUser, deleteUser,getUsers, editUser } = require('../controllers/userController');
const router=express.Router();
router.get('/',home)
router.post('/createuser',createUser)
router.get('/getusers',getUsers)
router.delete('/deleteuser/:id',deleteUser)
router.put('/updateuser/:id',editUser)


module.exports=router