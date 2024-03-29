import Image from "next/image";
import Cards from "./_components/Cards";
import PokemonInfo from "./_components/PokeInfo";
import Test from "./_components/Test";

export default function Home() {
  const testComponents = [1, 2, 3, 4, 5]
  return (
    <div>
      <Cards />
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 py-3 mx-3">
        {testComponents.map((item, index)=>(
            <Test key={index} />
        ))}
        
        


      </div>
    </div>
  );
}
