import React from 'react';
import '../index.css';
import PropTypes from 'prop-types'

const Square = ({symbol, onClick}) => (
    <button className="square" onClick={onClick}>
        {symbol}
    </button>
)

Square.propTypes = {
    symbol: PropTypes.oneOf(['X', 'O', null]),
    onClick: PropTypes.func.isRequired
}

export default Square