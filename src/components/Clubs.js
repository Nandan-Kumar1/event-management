import ClubCard from "./ClubCard";
import { clubData } from "../data/clubs";

function Clubs() {
  return (
    <section className="max-w-6xl m-auto px-14 mt-9">
      <h1 className="text-4xl font-semibold text-[#14a4d4] my-14">
        Different Clubs Of NITJ
      </h1>
      <div className="flex justify-center items-center gap-14 flex-wrap">
        {clubData.map((club, index) => (
          <ClubCard
            key={index}
            name={club.name}
            logo={club.logo}
            description={club.description}
            website={club.website}
            tags={club.tags}
          />
        ))}
      </div>

      <p className="text-[#14a4d4] text-md my-9 text-center">
        Energized by the vibrant array of clubs at NIT Jalandhar? Keep your
        spirits high as we delve into the exciting events of this marvelous
        institution
      </p>
    </section>
  );
}

export default Clubs;
