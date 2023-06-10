import React from 'react'
import './footer.css'

const footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>FARAZ</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="footer_copyright">
                <small>&copy; Md Farazul Haque</small>
            </div>
        </footer>
    )
}

export default footer