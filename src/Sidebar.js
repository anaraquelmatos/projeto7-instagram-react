import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

const sidebar = [
    {
        imagemSeguidor: "assets/img/bad.vibes.memes.svg",
        seguidor: "bad.vibes.memes",
        status: "Segue você",
    },

    {
        imagemSeguidor: "assets/img/chibirdart.svg",
        seguidor: "chibirdart",
        status: "Segue você",
    },

    {
        imagemSeguidor: "assets/img/razoesparaacreditar.svg",
        seguidor: "razoesparaacreditar",
        status: "Novo no Instagram",
    },

    {
        imagemSeguidor: "assets/img/adorable_animals.svg",
        seguidor: "adorable_animals",
        status: "Segue você",
    },

    {
        imagemSeguidor: "assets/img/smallcutecats.svg",
        seguidor: "smallcutecats",
        status: "Segue você",
    }
]

export default function Sidebar() {
    return (
        <div class="sidebar">

            <Usuario imagemUsuario="assets/img/catanacomics.svg" seguidorUsuario="catanacomics" nomeUsuario="Catana" />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sidebar.map(conteudo => (
                    <Sugestoes imagemSugestoes={conteudo.imagemSeguidor} seguidorSugestoes={conteudo.seguidor} statusSugestoes={conteudo.status} />
                ))}

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>

    );
}