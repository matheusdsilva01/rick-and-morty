import "./botao-favorito.css";
import Star from '../../assets/star.svg';
import StarFilled from '../../assets/star-filled.svg';

interface iBotaoFavorito {
  isFavorito: boolean;
  onClick: (id: number) => void;
  id: number;
}
/**
 * Botao de favorito
 * @property {isFavorito} boolean - Propriedade que indica se o personagem está favorito
 * @property {(id: number) => void} onClick - Função responsavel por marcar ou desmarcar o personagem como favorito
 * @property {id} number - id do personagem
 * uso:
 * ``` <BotaoFavorito /> ```
 * @returns Botão de favorito
 */
const BotaoFavorito = ({ isFavorito, onClick, id }: iBotaoFavorito) => {
  const src = isFavorito ? StarFilled : Star;

  return (
    <div onClick={() => onClick(id)} className="botao-favorito">
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotaoFavorito;
