import {Footer, Navbar} from "../components";

const Home = () => {
    return (
      <>
          <div className="min-h-screen">
              <div className="gradient-bg-welcome">
                  <Navbar />

              </div>
              <Footer />
          </div>
      </>
    );
};

export default Home;