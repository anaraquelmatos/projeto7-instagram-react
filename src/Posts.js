import Post from "./Post";

const posts = [
    {
        usuario: "assets/img/meowed.svg",
        nome: "meowed",
        imagem: "assets/img/gato-telefone.svg",
        imagemQuemCurtiu: "assets/img/respondeai.svg",
        nomeQuemCurtiu: "respondeai",
        quantidadeCurtidas: "outras 101.523 pessoas"
    },

    {
        usuario: "assets/img/barked.svg",
        nome: "barked",
        imagem: "assets/img/dog.svg",
        imagemQuemCurtiu: "assets/img/adorable_animals.svg",
        nomeQuemCurtiu: "adorable_animals",
        quantidadeCurtidas: "99.159 pessoas"
    }
]

export default function Posts() {
    return (
        <div class="posts">
            {posts.map(post => (
                <Post usuarioPost={post.usuario} nomePost={post.nome} imagemPost={post.imagem} imagemQuemCurtiuPost={post.imagemQuemCurtiu} nomeQuemCurtiuPost={post.nomeQuemCurtiu} quantidadeCurtidasPost={post.quantidadeCurtidas} />
            ))}
        </div>
    );
}