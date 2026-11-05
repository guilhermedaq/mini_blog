import { pool } from "../config/db.js";
import bcrypt from 'bcrypt';

const buscarEmailService = async (email)=>{
        const resultado = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        return resultado.rows[0]
};

const criarUsuarioService = async (usuario, email, senha)=>{
    const senhaHash = await bcrypt.hash(senha, 10)
    const resultado = await pool.query('INSERT INTO usuarios (usuario, email, senha) values($1, $2, $3) RETURNING *', [usuario, email, senhaHash]);
    return resultado.rows[0]
};