export default function Posts(props) {
    const { usuarioPost, nomePost, imagemPost, imagemQuemCurtiuPost, nomeQuemCurtiuPost, quantidadeCurtidasPost } = props;
    return (
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={usuarioPost} />
                        {nomePost}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={imagemPost} />
                </div>
                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={imagemQuemCurtiuPost} />
                        <div class="texto">
                            Curtido por <strong>{nomeQuemCurtiuPost}</strong> e <strong>{quantidadeCurtidasPost}</strong>
                        </div>
                    </div>
                </div>
            </div>
    );
}