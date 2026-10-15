import { Router } from "express";
import { postarController,
        editarController,
        deletarController,
        feedController,
        toggleController
 } from "../controllers/blogControllers.js";

const router = Router()

// ações individuais
router.post('/', postarController); // posta comentario
router.put('/:id', editarController); // edita comentario
router.delete('/:id', deletarController); // deleta comentario

//ações gerais
router.get('/', feedController); // ver feed geral
router.post('/:id/toggle_like', toggleController); // curtir comentários e criar +1 e na lógica/front end poder remover a curtida?


export default router;