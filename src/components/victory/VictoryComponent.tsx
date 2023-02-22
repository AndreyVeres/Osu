import React from 'react';
import { useSelector } from 'react-redux';
import IReducers from '../../types/reducers/reducersType';
import './victory.scss';
// eslint-disable-next-line import/order
import { Link } from 'react-router-dom';
import { backButtonIcon } from '../../assets/images/icons';
import SelectMapPageFooter from '../selectMap/footer/SelectMapPageFooter';

function VictoryComponent() {
  const mapsData = useSelector((state: IReducers) => state.activeGameReduccer);
  const songDiffucult = useSelector((state: IReducers) => state.songDifficultyIndexReducer);
  const gameScore = useSelector((state: IReducers) => state.gameScoreReducer);
  const background = useSelector((state: IReducers) => state.backgroundSourceReducer);
  const currentGame = mapsData.mapData[songDiffucult];
  return (
    <>
      <img src={background} alt="" className="victory-background" />
      <div className="victory-header">
        <div className="victory-map-name">
          {currentGame.metadata.Title.toUpperCase()}
        </div>
        <div className="victory-map-author">
          Beatmap by
          {' '}
          {currentGame.metadata.Artist}
        </div>
      </div>
      <div className="victory-content">
        <div className="points-block">
          <span className="points-block-score">Score</span>
          {' '}
          {gameScore.points}
        </div>
        <div className="victory-points-info">
          <div className="victory-points-bottom">
            <div className="victory-combo">
              <div className="victory-combo-title">
                Combo
              </div>

            </div>
            <div className="victory-accurency">
              <div className="victory-accurency-title">
                Accurency
              </div>
              {gameScore.accuracy}
              %
            </div>
          </div>
        </div>
        <SelectMapPageFooter />
      </div>
    </>
  );
}

export default VictoryComponent;
