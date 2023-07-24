import { useEffect, useState } from "react";
import CollegeCard from "../../Home/TopColleges/CollegeCard";


const Colleges = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('/topcolleges.json')
        .then(response => response.json())
        .then(data => setColleges(data))
    })
    return (
        <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8">All Colleges</h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {colleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </div>
    );
};

export default Colleges;