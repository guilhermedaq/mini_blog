import { pool } from "../config/db.js";

export const postarService = async (conteudo)=>{
        const resultado = await pool.query('INSERT INTO post (conteudo) VALUES ($1)', [conteudo]);
        return resultado.rows;
};

export const editarService = async (conteudo, id)=>{
    const resultado = await pool.query('UPDATE post SET conteudo = $1 WHERE id = $2', [conteudo, id]);
    return resultado.rows[0];
};

export const deletarService = async (id)=>{
    const resultado = await pool.query('DELETE FROM post WHERE id = $1 RETURNING *', [id]);
    return resultado.rows[0]
};

export const feedService = async ()=>{
    const resultado = await pool.query('SELECT * FROM post');
    return resultado.rows
};


export const toggleService = async (post_id, usuario_id)=>{
    const curtido = await pool.query('SELECT * FROM likes WHERE post_id = $1 AND usuario_id = $2', [post_id, usuario_id]);

    let statusCurtida;

    if(curtido.rows.length>0){  
        const resultado = await pool.query('DELETE FROM likes WHERE post_id = $1 AND usuario_id = $2', [post_id, usuario_id]);
         statusCurtida = false;
    } else{
        const resultado = await pool.query('INSERT INTO likes (post_id, usuario_id) VALUES($1, $2)', [post_id, usuario_id]);
         statusCurtida = true;
    }

    const contagem = await pool.query('SELECT COUNT(*) FROM likes WHERE post_id = $1', [post_id]);

    return {
        curtido: statusCurtida
    }
}
