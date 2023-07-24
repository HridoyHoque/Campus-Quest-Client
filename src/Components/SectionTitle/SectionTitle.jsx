

const SectionTitle = ({ title }) => {
    return (
        <div className="section-title">
            <h2 className="text-4xl font-bold text-center text-gray-800">---- {title} ----</h2>
            <h1 className="text-center"><progress className="progress w-56"></progress></h1>
        </div>
    );
};

export default SectionTitle;