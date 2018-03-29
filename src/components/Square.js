import React from 'react';
import '../index.css';
import PropTypes from 'prop-types'
import { Button } from 'react-onsenui';
import Dimensions from 'react-dimensions'

const Square = ({symbol, onClick, containerWidth}) => {
    let style = {
        "height": containerWidth,
        "line-height": containerWidth,
        "font-size": containerWidth * 0.6
    }

    return (
        <Button className="square" style={style} modifier='outline' onClick={onClick}>
            {symbol}
        </Button>
    )
}

Square.propTypes = {
    symbol: PropTypes.oneOf(['X', 'O', null]),
    onClick: PropTypes.func.isRequired
}

export default Dimensions()(Square)