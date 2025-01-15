import BannarImg from "../../assets/bannar.jpg";
const Bannar = () => {
    return (
        <div className="lg:py-96 py-40 bg-cover bg-center text-center" 
             style={{ backgroundImage: `url(${BannarImg})` }}
            >
            <h1 className="lg:text-3xl md:text-2xl s text-xl font-bold"> Find Your Perfect Match with LifePair!
                <br />
            Where hearts meet and dreams begin.</h1>
        </div>
    );
};

export default Bannar;