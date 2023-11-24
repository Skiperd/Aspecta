import React from 'react';
import Header from '../../components/Header/Header';
import SectionGrid from '../../components/SectionGrid/SectionGrid';
import SectionContent from '../../components/SectionContent/SectionContent';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import ImgKid from '../../assets/img/Imagemdascrianças.png';
import GridContent from '../../components/GridContent/GridContent';
import FlexItens from '../../components/FlexItens/FlexItens';
import Footer from '../../components/Footer/Footer';

const Initial = () => {
  return (
    <GridContent>
      <Header />
      <SectionGrid>
        <SectionContent />
        <ImageComponent
          link={ImgKid}
          width="44.75rem"
          height="27rem"
          alt="Criança"
        />
      </SectionGrid>
      <FlexItens>
        <Footer></Footer>
      </FlexItens>
    </GridContent>
  );
};

export default Initial;
