import {Footer, Navbar, Welcome} from "../components";

const Home = () => {
    return (
      <>
          <div className="min-h-screen">
              <div className="gradient-bg-welcome">
                  <Navbar />
                  <Welcome />
              </div>
              <Footer />
          </div>
      </>
    );
};

export default Home;