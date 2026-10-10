import { Router } from "express";

const router = Router()

// ações individuais
router.post('/', /* controller */); // posta comentario
router.put('/:id', /* controller */); // edita comentario
router.delete('/:id', /* controller */); // deleta comentario

//ações gerais
router.get('/', /* controller */); // ver feed geral
router.post('/:id/toggle-like', /* controller */); // curtir comentários e criar +1 e na lógica/front end poder remover a curtida?


export default router;