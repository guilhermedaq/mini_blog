import { pool } from "../config/db.js";
import bcrypt from 'bcrypt';

export const buscarEmailService = async (email)=>{
        const resultado = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        if(email){
            return resultado.rows[0]
        }
        return resultado.rows[0]
};

export const criarUsuarioService = async (usuario, email, senha)=>{
    const emailExistente = await buscarEmailService(email);

    if (emailExistente) {
        throw new Error("Este e-mail já está em uso.");
    }

    const senhaHash = await bcrypt.hash(senha, 10)
    const resultado = await pool.query('INSERT INTO usuarios (usuario, email, senha) values($1, $2, $3) RETURNING *', [usuario, email, senhaHash]);
    return resultado.rows[0]
};

export const loginService = async (email, senha)=>{
    const usuario = await buscarEmailService(email);
    if (!usuario) {
        throw new Error("E-mail ou senha incorretos.");
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);  
    if (!senhaCorreta) {
        throw new Error("E-mail ou senha incorretos.")
    }

    return usuario;
}