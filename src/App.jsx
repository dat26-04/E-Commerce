import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainLayout from "./components/Layout/MainLayout";


function App() {
  return (
    <>

        <MainLayout>
          <Header />
            Content
          <Footer />
        </MainLayout>
        <Button />
    </>
  );
}

export default App;
