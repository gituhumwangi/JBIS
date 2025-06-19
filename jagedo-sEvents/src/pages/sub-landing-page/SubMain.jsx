import { useEffect } from 'react';

import Home from'./Home';
import About from'./About';
import Story from './Story';
import Values from './Values';
import OurTeam from './OurTeam';

const SubPage = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="w-full overflow-hidden">
    
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="story">
        <Story />
      </div>
      <div id="values">
        <Values />
      </div>
      <div id="ourteam">
        <OurTeam />
      </div>
  
    </div>
  );
};

export default SubPage;