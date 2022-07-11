import "./card-episodio.css";

interface iCardEpisodioProps {
  name:       string;
  episode:    string;
  lancamento: string;
}
/**
 * Card de episódio
 * Recebe um episódio e renderiza um card com os dados do episódio
 * @property {string} name - Nome do episódio
 * @property {string} episode - Número do episódio
 * @property {string} lancamento - Data de lançamento
 * uso:
 * ``` <CardEpisodio /> ```
 * @returns Card contendo os dados do episódio
 */
const CardEpisodio = ({ episode, name, lancamento }: iCardEpisodioProps) => {
  return (
    <div className="card-episodio">
      <h4>{name}</h4>
      <div>
        <span>{episode}</span>
        <span>Lançado em: {lancamento}</span>
      </div>
    </div>
  );
};

export default CardEpisodio;
