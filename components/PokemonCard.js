import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useObserver } from "../hooks/useObserver";

const PokemonCard = ({ url, name }) => {
  const target = useRef(null);
  const [visible, setVisible] = useState(false);

  const onIntersect = ([entry]) => {
    console.log(entry.isIntersecting);
    entry.isIntersecting ? setVisible(true) : setVisible(false);
  };

  useObserver({ target, onIntersect, threshold: 0.1 });

  const id = url
    .replace("https://pokeapi.co/api/v2/pokemon/", "")
    .replace("/", "");

  return (
    <Link href={`/pokemon/${id}`} key={id} style={{ display: "flex" }}>
      <article ref={target} style={{ minHeight: 300 }}>
        {visible && (
          <>
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
          </>
        )}
      </article>
    </Link>
  );
};

export default PokemonCard;
