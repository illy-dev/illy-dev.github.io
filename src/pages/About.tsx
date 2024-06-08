import Navbar from "../Navbar";
import Banner from "../assets/Banner";
import { images } from "../assets/images";

export default function Aboutme() {
    return(
        <>
            <Navbar />

            <div className="flex flex-col pl-10">
                <h3 className="pt-10 pb-3">Hey 👋,</h3>
                <p>🎓 In School</p>
                <p>✨ Creating bugs since 💥🌍</p>
                <p>📚 Currently learning Rust and Typescript</p>
                <p>🎮 Gamer</p>
                <div className=" pl-4">
                    <p>- Hypixel Skyblock</p>
                    <p>- Elden Ring</p>
                    <p>- CS2</p>
                    <p>- Any game that you can play with friends</p>
                </div>

                <h5 className="pt-4 pb-4 flex justify-center">Coding in/with</h5>
                <Banner images={images} />


            </div>
        </>
    );
}


