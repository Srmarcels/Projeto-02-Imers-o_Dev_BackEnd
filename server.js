import express from "express";

    const posts = [
            { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
            { id: 2, descricao: "Gato fofo dormindo", imagem: "https://placecats.com/millie/300/150" },
            { id: 3, descricao: "Gato fazendo panqueca", imagem: "https://placecats.com/millie/300/150" },
    ];

const app = express(); 
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando..."); 
});

app.get("/posts", (req,res) => {
    res.status(200).json(posts);
}); 

function buscarPostporID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req,res) => {
    const index = buscarPostporID(req.params.id)
    if (index === -1) {
        return res.status(404).json({ message: "Post não encontrado" });
    }
    res.status(200).json(posts[index]);
}); 



