import React from 'react'
import './about.css'
import ME from '../../assets/me1.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <FaAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>

                        <article className='about_card'>
                            <FiUsers className='about_icon' />
                            <h5>Clients</h5>
                            <small>0</small>
                        </article>

                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon' />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>
                    <p className='about_content'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia optio officiis illum repellendus quasi at eligendi eveniet assumenda incidunt impedit magni, saepe dolorem voluptatum ullam quod blanditiis numquam temporibus. Vel.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About