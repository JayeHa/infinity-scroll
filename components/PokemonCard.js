import Image from "next/image";
import Link from "next/link";

const PokemonCard = ({ url, name }) => {
  const id = url
    .replace("https://pokeapi.co/api/v2/pokemon/", "")
    .replace("/", "");

  return (
    <Link href={`/pokemon/${id}`} key={id} style={{ display: "flex" }}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        width={100}
        height={100}
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
