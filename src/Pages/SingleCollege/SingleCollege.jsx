
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";


const SingleCollege = () => {
    const params = useParams(); // Get the route parameters
    const [college, setCollege] = useState(null);
    useEffect(() => {
        // Fetch college data using the ID from the route parameters
        fetch(`http://localhost:5000/SingleColleges/${params.id}`)
          .then((response) => response.json())
          .then((data) => setCollege(data))
          .catch((error) => console.error("Error fetching college data:", error));
      }, [params.id]);
    
      if (!college) {
        // Show a loading state or handle error if college data is not available
        return <div>Loading...</div>;
      }
 
    return (
        <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{college?.name}</h2>
      <img src={college?.image} alt={college?.name} className="w-full aspect-w-16 aspect-h-9 object-cover rounded-md mb-4" />
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Admission Process</h3>
        <p className="text-gray-600">{college?.admissionProcess}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Events Details</h3>
        <p className="text-gray-600">{college?.eventsDetails}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Research Works</h3>
        <p className="text-gray-600">{college?.researchWorks}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Sports Categories</h3>
        <p className="text-gray-600">{college?.sportsCategories}</p>
      </div>
    </div>
    );
};

export default SingleCollege;