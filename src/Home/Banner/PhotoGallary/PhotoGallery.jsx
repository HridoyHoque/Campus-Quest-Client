import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const PhotoGallery = () => {
    const images = [
        "https://i.ibb.co/23TJ2v0/campus2.png",
        "https://i.ibb.co/23TJ2v0/campus2.png",
        "https://i.ibb.co/23TJ2sv0/campus2.png",
        "https://i.ibb.co/2PwNzvB/group-students-posing-table.jpg",
        "https://i.ibb.co/6g9Vc4p/college-graduates-celebration.jpg",
        "https://i.ibb.co/6g9Vc4p/college-graduates-celebration.jpg",
        // Add more image URLs here...
      ];

    
    return (
       <>
       <div className="mb-4">
        <SectionTitle title="Gallery" />
       </div>
        <div className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            College Graduates Group Pictures
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="group relative cursor-pointer">
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className="w-full h-48 object-cover rounded-md transition duration-300 transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
       </>
    );
};

export default PhotoGallery;