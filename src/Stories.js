import Story from "./Story";

const stories = [
    {
        url: "assets/img/9gag.svg",
        descricao: "9gag",
        alt: "9gag"
    },

    {
        url: "assets/img/meowed.svg",
        descricao: "meowed",
        alt: "meowed"
    },

    {
        url: "assets/img/barked.svg",
        descricao: "barked",
        alt: "barked"
    },

    {
        url: "assets/img/nathanwpylestrangeplanet.svg",
        descricao: "nathanwpylestrangeplanet",
        alt: "nathanwpylestrangeplanet"
    },

    {
        url: "assets/img/wawawicomics.svg",
        descricao: "wawawicomics",
        alt: "wawawicomics"
    },

    {
        url: "assets/img/respondeai.svg",
        descricao: "respondeai",
        alt: "respondeai"
    },

    {
        url: "assets/img/filomoderna.svg",
        descricao: "filomoderna",
        alt: "filomoderna"
    },

    {
        url: "assets/img/memeriagourmet.svg",
        descricao: "memeriagourmet",
        alt: "memeriagourmet"
    },

    {
        url: "assets/img/memeriagourmet.svg",
        descricao: "memeriagourmet",
        alt: "memeriagourmet"
    }

]

export default function Stories() {

    return (
        <div class="stories">
            {stories.map(imagem => (
                <Story urlStory={imagem.url} altStory={imagem.alt} descricaoStory={imagem.descricao}/>
            ))};

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    );
}
