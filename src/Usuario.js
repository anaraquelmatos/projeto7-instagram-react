export default function Usuario(props) {
    const { imagemUsuario, seguidorUsuario, nomeUsuario } = props;
    return (
        <div class="usuario">
            <img src={imagemUsuario} />
            <div class="texto">
                <strong>{seguidorUsuario}</strong>
                {nomeUsuario}
            </div>
        </div>
    );
}