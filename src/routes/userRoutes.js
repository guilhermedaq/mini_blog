import { Router } from "express";

const router = Router();

router.post('/cadastro', middleware , controller); // rota para criação de usuario
router.post('/login', middleware , controller); // rota para login de usuario


export default router