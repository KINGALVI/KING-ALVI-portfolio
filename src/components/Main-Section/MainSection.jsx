import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Left_Side_Design from "../Side-Design/Left-Side-Design";
import Right_Side_Design from "../Side-Design/Right-Side-Design";
import Footer from "../Footer/Footer";

const Main = () => {

  return (
    <section className="md:flex justify-center">

      <Left_Side_Design />

      <section className="md:w-[2500px] bg-[#282C33]">

        <Header />

        <Outlet />

        <Footer />

      </section>

      <Right_Side_Design />

    </section>
  )

}

export default Main;