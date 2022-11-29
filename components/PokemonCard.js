import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PokemonCard = ({ url, name }) => {
  if (!url) return;

  const id = url
    .replace("https://pokeapi.co/api/v2/pokemon/", "")
    .replace("/", "");

  return (
    <Link href={`/pokemon/${id}`} key={id} style={{ display: "flex" }}>
      <LazyLoadImage
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <div>
        <div>
          <p>ID</p>
          <p>{id}</p>
        </div>
        <div>
          <p>name</p>
          <p>{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
