import React from 'react'

const Footer = () => {
    return (
        <div 
        className="d-flex w-100 justify-content-center" 
        style={{ 
            position: 'absolute',
            left: '0',
            bottom: '0'
            }}>
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <span className="text-muted">Schedaddy © 2023</span>
            </div>
        </footer>
    </div>
    
    )
}

export default Footer