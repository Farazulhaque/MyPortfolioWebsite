import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const experience = () => {
    return (
        <section id='experience'>
            <h5>The Skills I have</h5>
            <h2>My Experience</h2>
            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill />
                            <div>
                                <h4>BootStrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* End of Frontend */}
                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill />
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill />
                            <div>
                                <h4>SpringBoot</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill />
                            <div>
                                <h4>Hadoop</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill />
                            <div>
                                <h4>AWS Lambda</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default experience