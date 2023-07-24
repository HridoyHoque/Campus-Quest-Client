import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const MyColleges = () => {
    const { user } = useContext(AuthContext);
const [myCollege, setMyCollege] = useState(null)
console.log(myCollege)
    useEffect(() => {
        fetch(`https://campus-quest-server.vercel.app/admission/${user?.email}`)
        .then(res => res.json())
        .then(data => setMyCollege(data))
    } , [user.email])
    return (
        <div className="bg-white shadow-md p-6 rounded-lg">
        <img
          src={myCollege.photo}
          alt={myCollege.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{myCollege.name}</h2>
        <p className="text-gray-600">Candidate Name: {myCollege.candidateName}</p>
        <p className="text-gray-600">Subject: {myCollege.subject}</p>
        <p className="text-gray-600">Date: {myCollege.date}</p>
      </div>
    );
};

export default MyColleges;