import Card from '../components/Card/index';
import React from 'react';
import SimpleSlider from '../components/Slider';
import Banner from '../components/Banner';

function Home({
  items = [],
  isLoading = false
}) {
  const renderItems = () => {
    return (isLoading ? [...Array(8)] : items).map((item, index) => (
      <Card
        key={item?.id || index}
        {...(item || {})}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content ">
      <SimpleSlider/>
     
      <div className="d-flex align-center justify-between mb-40 home">
        <h1>Все пигменты</h1>
      </div>
      <div className="d-flex flex-wrap render-card">
        {renderItems()}
      </div>
       <Banner></Banner>
       <div className="d-flex flex-wrap render-card">
        {renderItems()}
      </div>
    </div>
  );


}

export default Home;