import Header from "./components/header";
import Carouselle from "./components/carousel";
import DetailsProduits from "./components/DetailsProduit";
import Footer from "./components/footer";
import { useParams } from 'react-router-dom'
function PageDetail() {
  
  const {id} = useParams();
  return (
    <>
    <Header/>
    <Carouselle></Carouselle>
    <DetailsProduits id={id}></DetailsProduits>
    <Footer></Footer>
    </>
  );
}

export default PageDetail;