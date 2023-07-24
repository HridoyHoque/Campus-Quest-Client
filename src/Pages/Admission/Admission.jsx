import toast, { Toaster } from 'react-hot-toast';


const Admission = () => {
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const collegeName = form.collegeName.value;
        const candidateName = form.candidateName.value;
        const photo = form.photo.value;
        const Birth = form.Birth.value;
        const address = form.address.value;
        const phoneNumber = form.phoneNumber.value;
        const email = form.email.value;
        const subject = form.subject.value;

        const admissionData = { collegeName, candidateName, photo, Birth, address, phoneNumber, email, subject }

        // send data to the server
        fetch("http://localhost:5000/admission", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admissionData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Successfully submitted the form')
                }
            })

    }
    
    return (
        <div className="py-4 px-2 md:px-8 lg:px-16">
        <h2 className="text-2xl font-bold mb-4">Admission Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* College Name */}
          <input
            type="text"
            name="collegeName"
            placeholder="College Name"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {/* Candidate Name */}
          <input
            type="text"
            name="candidateName"
            placeholder="Candidate Name"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {/* Candidate Email */}
          <input
            type="email"
            name="email"
            placeholder="Candidate Email"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {/* Candidate Phone */}
          <input
            type="number"
            name="phoneNumber"
            placeholder="Candidate Phone"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {/* Address */}
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {/* Date of Birth */}
          <input
            type="date"
            name="Birth"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {/* Image (file input) */}
          <input
            type="text"
            name="photo"
            placeholder="Your Image Link"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="submit"
            value="Submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
          />
        </form>
        <Toaster />
      </div>
    );
};

export default Admission;