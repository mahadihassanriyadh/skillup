import React from 'react';

const NotFound = () => {
    const errorStyle = {
        margin: "18% 0%"
    }
    return (
        <div style={errorStyle}>
            <h1 className="text-danger text-center">Error 404</h1>
            <h4 className="text-center">The Page you requested does not exist.</h4>
        </div>
    );
};

export default NotFound;