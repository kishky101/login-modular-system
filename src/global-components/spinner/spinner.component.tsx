import React from "react";

import './spinner.styles.scss'

const Spinner: React.FC = () => {
    return (
        <div className="spinner-overlay">
            <div className="spinner-overlay__spinner"></div>
        </div>
    )
}

export default Spinner;