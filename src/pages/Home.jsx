import Card from '../components/Card/index';
import React from 'react';
import SimpleSlider from '../components/Slider';
import Banner from '../components/Banner';
import ProductPopup from '../components/ProductPopup';

function Home({
  items = [],
  isLoading = false
}) {

  const [popupProduct, setPopupProduct] = React.useState(null);
  const renderItems = () => {
    return (isLoading ? [...Array(8)] : items).map((item, index) => (
      <Card
        key={item?.id || index}
        {...(item || {})}
        loading={isLoading}
        onOpenPopup={setPopupProduct}
      />
    ));
  };


  


  return (
    <div className="content ">
      <SimpleSlider/>
     
      <div className="d-flex align-center justify-between  home">
        <h1>Каталог пигментов</h1>
      </div>
      <div className="d-flex flex-wrap render-card">
        {renderItems()}
      </div>
       <Banner></Banner>
       <div className="d-flex flex-wrap render-card">
        {renderItems()}
      </div>

       <ProductPopup
        product={popupProduct}
        onClose={() => setPopupProduct(null)}
      />
    </div>

    
  );


}

export default Home;