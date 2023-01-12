import axios from "axios";
import Image from "next/image";

const Pokemon = ({ data }) => {
  const { name, types, id } = data;

  return (
    <div>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        width={100}
        height={100}
      />

      <h2>
        <b>{name}</b>
      </h2>

      <div style={{ display: "flex", gap: "10px" }}>
        {types.map(({ type }, index) => (
          <span key={index}>{type.name}</span>
        ))}
      </div>
    </div>
  );
};

// SSR로 데이터를 처리
export const getServerSideProps = async ({ params }) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${params.pokeId}`,
    {
      headers: { Accept: "application/json", "Accept-Encoding": "identity" }
    }
  );

  return { props: { data } };
};

export default Pokemon;
