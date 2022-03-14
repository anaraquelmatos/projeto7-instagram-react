export default function Sugestoes(props){

    const {imagemSugestoes, seguidorSugestoes, statusSugestoes} = props;
    return (
        <div class="sugestao">
        <div class="usuario">
            <img src={imagemSugestoes} />
            <div class="texto">
                <div class="nome">{seguidorSugestoes}</div>
                <div class="razao">{statusSugestoes}</div>
            </div>
        </div>
        <div class="seguir">Seguir</div>
    </div>
    );
}