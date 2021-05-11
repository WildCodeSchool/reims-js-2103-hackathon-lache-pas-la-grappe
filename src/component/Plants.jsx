import React from 'react';
import './Plants.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { GiPlantRoots } from 'react-icons/gi';
import { GiBeehive } from 'react-icons/gi';
import { GiRiver } from 'react-icons/gi';
import { GiTomato } from 'react-icons/gi';
import { GiFruitTree } from 'react-icons/gi';




const Plants = () => (
    <Router>
        <div className="plantsHeader">
          <h1>Plants/Levels</h1> 
        </div>
      <Link className="link" activeClassName="active">
        <div>
       <GiPlantRoots
         size={35} />
       <p>Roquette</p>
        </div>
      </Link>
      <Link className="link" activeClassName="active">
      <div>
       <GiBeehive
         size={35} />
       <p>Hive</p>
        </div> 
      </Link>
      <Link className="link" activeClassName="active">
      <div>
       <GiRiver
         size={35} />
       <p>Pond</p>
        </div> 
      </Link>
      <Link className="link" activeClassName="active">
      <div>
       <GiTomato
         size={35} />
       <p>Tomatoes</p>
        </div> 
      </Link>
      <Link className="link" activeClassName="active">
      <div>
       <GiFruitTree
         size={35} />
       <p>Trees</p>
        </div> 
      </Link>
    
    </Router>
    );

export default Plants;