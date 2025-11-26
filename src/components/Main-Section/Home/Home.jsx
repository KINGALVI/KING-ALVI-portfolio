import MyPhoto from "../../../../public/Images/My-Photo-1.jpeg";
import Dots from "../../../../public/Images/Dots.png";
import Dedication from "../../../../public/Images/My-Dedication.png";
import Big_Medium_Screen_Quote from "../../../../public/Images/big-medim-screen-quote.png";
import Mini_Small_Screen_Quote from "../../../../public/Images/mini-small-screen-quote.png";
import quote_man from "../../../../public/Images/Frame-49.png";
const Home = () => {

    return (
        <>
            <section className="card lg:card-side bg-[#282C33] flex justify-center items-center">
                <div className="card-body grid lg:items-start md:items-center sm:items-center">
                    <h2 className="text-4xl text-center md:text-center lg:text-left">
                        Alvi is a <span className="text-[#C778DD]">Front-End Developer</span> and <span className="text-[#C778DD]">Gamer</span>
                    </h2>
                    <p className="text-[#ABB2BF] pt-5 pb-2.5 text-center md:text-center lg:text-left">
                        He crafts responsive websites where technologies meet creativity
                    </p>
                    <div className="card-actions justify-center md:justify-center lg:justify-start">
                        <button className="text-[#ABB2BF]">Contact me !!</button>
                    </div>
                </div>
                <div className="grid lg:ps-0 md:ps-16">
                    <figure style={{ position: 'relative' }} >
                        <img src={MyPhoto} alt="My Photo" className="Background-Image lg:w-[457px] lg:h-[386px] md:w-[350px] md:h-[450px] sm:w-[457px] sm:h-[386px] ml-[75px] md:ml-[30px] mx-auto" />
                        <img className="Dots-Image" src={Dots} alt="" />
                    </figure>
                    <img src={Dedication} alt="" />
                </div>
            </section>
            <section className="flex justify-center">
                <div>
                    <img className="reletive-quote_man-image" src={quote_man} alt="" />
                    <img
                        src={Big_Medium_Screen_Quote}
                        alt="Quote for big/medium screens"
                        className="hidden md:block"
                    />
                    <img
                        src={Mini_Small_Screen_Quote}
                        alt="Quote for small/mini screens"
                        className="block md:hidden"
                    />
                </div>
            </section>

        </>
    );
};

export default Home;