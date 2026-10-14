



export const postarController = async (req, res)=>{
    try{
        const {conteudo, id} =  req.body;

        if(!conteudo){
            return res.status(400).json({message: 'erro ao postar conteudo'})
        };

        const resultado = await postarService(conteudo);
        return res.status(201).json({message: 'Conteudo postado com sucesso.'});
    } catch(err){
        return res.status(500).json({message: 'erro ao postar conteudo'});
    };
};


export const editarController = async (req, res) =>{
    try{
        const id = req.params.id;
        const {conteudo} = req.body;

        if(!conteudo){
            return res.status(400).json({message: 'Erro ao editar conteudo.'})
        }

        const resultado = await editarService(conteudo, id);
        return res.status(200).json({message: 'Conteudo editado com sucesso.'});
    } catch(err){
        return res.status(500).json({message: 'Erro ao editar conteudo.'})
    };
};


export const deletarController = async (req, res) =>{
    try{
        const id = req.params.id;
        if(!id){
            return res.status(400).json({message: 'Erro ao deletar'});
        }

        const resultado = await deletarService(id)
        return res.status(200).json({message: 'Conteudo deletado com sucesso'});
    } catch (err){
        return res.status(500).json({message: 'Erro ao deletar'});
    };
};


export const feedController = async (req, res) =>{
    try{
        const resultado = await feedService();
        return res.status(200).json(resultado);
    } catch(err){
        return res.status(500).json({message: 'Erro ao carregar feed.'});
    };
};

export const toggleController = async (req, res) => {
    try {
        const post_id = req.params.id;
        const usuario_id = 1; // ID fixo de teste enquanto não temos autenticação
        
        const resultado = await toggleService(post_id, usuario_id); 

        return res.status(200).json({ 
            message: resultado.curtido ? "Curtida adicionada" : "Curtida removida", 
            totalCurtidas: resultado.total 
        });
    } catch(err) {
        return res.status(500).json({ message: "Erro ao processar curtida" });
    }
};