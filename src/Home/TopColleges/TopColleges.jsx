import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import CollegeCard from "./CollegeCard";

const TopColleges = () => {
    const [topColleges, setTopColleges] = useState([]);

    useEffect(() => {
        fetch('https://campus-quest-server.vercel.app/colleges')
        .then(response => response.json())
        .then(data => {
            const topColleges = data.slice(0,3)
            setTopColleges(topColleges)
        })
    })
    return (
      <>
        <div className="mt-12">
            <SectionTitle title="Top 3 Colleges" />
        </div>
        <div className="container mx-auto py-10">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {topColleges.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </div>
      </>
    );
};

export default TopColleges;