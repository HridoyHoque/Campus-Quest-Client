import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const PhotoGallery = () => {
    const images = [
        "https://i.ibb.co/QjFC2M6/graduate1.png",
        "https://i.ibb.co/d0BCFrw/graduate2.png",
        "https://i.ibb.co/86n8p2y/graduate3.png",
        "https://i.ibb.co/ZS5vWMF/graduate4.png",
        "https://i.ibb.co/hLs9FBz/graduate5.png",
        "https://i.ibb.co/4tSdY5c/graduate6.png",
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