import { loginService,  criarUsuarioService} from "../services/userServices.js"
import bcrypt from 'bcrypt';

export const cadastroController = async (req, res)=>{
    try {
        const {usuario, email, senha} = await req.body;
        const resultado = await criarUsuarioService(usuario, email, senha);
        return res.status(201).json({message: "user criado com sucesso"})

    } catch (error) {      
            return res.status(400).json({error: error.message});
    }
}

export const loginController = async (req, res)=>{
    try {
        const {email, senha} = await req.body;
        const resultado = await loginService(email, senha);
        res.status(200).json({message: "Login realizado com sucesso"});

    } catch (error) {
        res.status(400).json({erro: error.message})
    }
}