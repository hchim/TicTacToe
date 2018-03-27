import React from 'react';
import '../index.css';
import PropTypes from 'prop-types'

const StatusLabel = ({status}) => (
    <div className="status">{status}</div>
)

StatusLabel.propTypes = {
    status: PropTypes.string.isRequired
}

export default StatusLabel