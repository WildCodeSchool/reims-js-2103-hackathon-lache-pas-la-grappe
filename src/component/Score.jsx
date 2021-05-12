import React from 'react';
import ReactScoreIndicator from 'react-score-indicator';

function Score ({score}) {
    return (
        <ReactScoreIndicator
        value={score}
        maxValue={100}
    />
    );
}

export default Score;