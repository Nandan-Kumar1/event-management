import { useParams } from "react-router-dom";
import { clubData } from "../data/clubs";

function ClubPage() {
  const { id } = useParams();
  const clubId = parseInt(id, 10);

  const club = clubData.find((club) => club.id === clubId);

  if (!club) {
    return <div>Club not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
          <div>
            <img
              className="w-full h-auto rounded-xl"
              src={club.logo}
              alt={`${club.name} Logo`}
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">{club.name}</h2>
            <p className="text-gray-700 mb-4">{club.description}</p>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">Genre</h3>
              <div className="flex flex-wrap">
                {club.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">Summary</h3>
              <p className="text-gray-700 ">{club.summary}</p>
            </div>

            <a
              href={club.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#14a4d4] text-white font-semibold py-1 px-2 rounded"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClubPage;
