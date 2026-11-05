import { Router } from "express";
import { cadastroController, loginController } from "../controllers/userControllers.js";

const router = Router();

router.post('/cadastro', middleware , cadastroController); // rota para criação de usuario
router.post('/login', middleware , loginController); // rota para login de usuario


export default router