import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Main = () => {

  return (
    <center>
      <section className="lg:w-[1050px] bg-[#282C33]">
        <Header />
        <Outlet />
      </section>
    </center>
  )

}

export default Main;