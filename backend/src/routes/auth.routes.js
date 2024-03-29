import { Router } from "express";
import { googleAuth, signIn, signOut, signUp } from "../controller/auth.controller.js";

const router = Router()

router.post('/signup', signUp)
router.post('/signin', signIn)
router.post('/google', googleAuth)
router.get('/signout', signOut)

export default router