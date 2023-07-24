
const CollegeCard = ({college }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
        <img src={college.image} alt={college.name} className="w-full h-32 object-cover rounded-md" />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">{college.name}</h2>
        <p className="text-gray-600 mt-2">Admission Dates: {college.admissionDates}</p>
        <p className="text-gray-600 mt-1">Events: {college.events}</p>
        <p className="text-gray-600 mt-1">Research History: {college.researchHistory}</p>
        <p className="text-gray-600 mt-1">Sports: {college.sports}</p>
        <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition duration-300">
          View Details
        </button>
      </div>
    );
};

export default CollegeCard;