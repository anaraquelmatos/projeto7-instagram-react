export default function Story(props){
    const {urlStory, altStory, descricaoStory} = props;
    return(
        <div class="story">
        <div class="imagem">
            <img src={urlStory} alt={altStory} />
        </div>
        <div class="usuario">
            {descricaoStory}
        </div>
    </div>
    );
}