import React, { useState } from 'react';
import './Vine.css';
import Score from './Score';


function Vine() {
  const [score, setScore] = useState(0);

    return (
      <>
        <div className="Vine">
          <div className="gameView">

          <button type='button' className="vine-img" onClick = {() => {
            setScore(0);
          }}>
          <Score className="vine-health" score = {score} />
          <img className="vine-img" src="https://nsa40.casimages.com/img/2021/05/11/210511080049371746.png" alt="vine" />
          </button>

            <img className="corn-img" src="https://nsa40.casimages.com/img/2021/05/11/210511100509192861.png" alt="corn" />
            <p className="corn-points">+1</p>

            <button type='button' className="sunflower-img" onClick = {() => {
            setScore(score+5);
          }}>
            <img className="sunflower-img" src="https://nsa40.casimages.com/img/2021/05/11/210511100815916143.png" alt="sunflower" />
            <p className="sunflower-points">+5</p>
            </button>

            <button type='button' className="honey-img" onClick = {() => {
            setScore(score+2);
          }}>
            <img className="honey-img" src="https://nsa40.casimages.com/img/2021/05/11/210511101215927332.png" alt="honey" />
            <p className="honey-points">+2</p>
            </button>

            <img className="mill-img" src="https://nsa40.casimages.com/img/2021/05/12/210512120247345062.png" alt="mill" />
            <p className="mill-points">+3</p>

            <img className="sprout-img" src="https://nsa40.casimages.com/img/2021/05/12/210512120321473004.png" alt="sprout" />
            <p className="sprout-points">+5</p>

            <button type='button' className="tree-img" onClick = {() => {
            setScore(score+4);
          }}>
            <img className="tree-img" src="https://nsa40.casimages.com/img/2021/05/12/210512120221548686.png" alt="tree" />
            <p className="tree-points">+4</p>
            </button>

            <img className="well-img" src="https://nsa40.casimages.com/img/2021/05/11/210511101411434825.png" alt="well" />
            <p className="well-points">+2</p>

            <button type='button' className="wheat-img" onClick = {() => {
            setScore(score+10);
          }}>
            <img className="wheat-img" src="https://nsa40.casimages.com/img/2021/05/12/210512120139894866.png" alt="wheat" />
            <p className="wheat-points">+10</p>
            </button>

            <img style={{filter: `grayscale(${100-score}%)`}} className="vineyard" src="https://nsa40.casimages.com/img/2021/05/12/210512101224124078.jpg" alt="vineyard" />
          </div>
        </div>
      </>
    )
  }

export default Vine;
