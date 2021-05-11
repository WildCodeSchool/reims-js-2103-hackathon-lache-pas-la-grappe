import React from 'react';
import './Plants.css'
import  Sunflower from './photos/field_of_sunflower.png';
import  Hive from './photos/honeycomb.png';
import  Tree from './photos/tree.png';
import  Sprout from './photos/sprout.png';
import Corn from './photos/corn_field.png';

const Plants = ({ setTree, setSunflower, setHive, setSprout, setCorn }) => (
       <>
        <div className="plantsHeader">
          <h1>Plants/Levels</h1> 
        </div>
      <button className="link" onClick={ ()=> setSunflower(true)} activeClassName="active">
        <div className="plants">
        <img  className="pics" src={Sunflower} alt="sunflower" />     
       <p>Sun flower</p>
       </div>
      </button>
      <button className="link" onClick={ ()=> setHive(true)} activeClassName="active">
      <div className="plants">
      <img  className="pics" src={Hive} alt="Hive" />     
       <p>Hive</p>
       </div>
      </button>
      <button className="link" onClick={ ()=> setTree(true)} activeClassName="active">
      <div className="plants">
      <img  className="pics" src={Tree} alt="Tree" />     
       <p>Tree</p>
       </div>
      </button>
      <button className="link" onClick={ ()=> setSprout(true)} activeClassName="active">
      <div className="plants">
      <img  className="pics" src={Sprout} alt="Sprout" />    
       <p>Sprout</p>
       </div>
      </button>
      <button className="link" onClick={ ()=> setCorn(true)} activeClassName="active">
      <div className="plants">
      <img  className="pics" src={Corn} alt="Corn" />     
       <p>Corn</p>
       </div>
      </button>
      </>
    );

export default Plants;