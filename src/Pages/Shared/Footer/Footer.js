import React from 'react';
import './Footer.css';


const Footer = () => {
    return (

        <footer className="bg-dark text-center text-white">

            <div className="container p-4">

                <section className="mb-4">

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>


                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-twitter"></i
                    ></a>


                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-google"></i
                    ></a>


                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-instagram"></i
                    ></a>


                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-linkedin-in"></i
                    ></a>


                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>

                <section className="">
                    <form action="">
                        <div className="row d-flex justify-content-center">

                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>



                            <div className="col-md-5 col-12">

                                <div className="form-outline form-white mb-4">
                                    <input type="email" placeholder="Your Email" className="form-control" />

                                </div>
                            </div>



                            <div className="col-auto">

                                <button type="submit" className="btn btn-outline-light mb-4">
                                    Subscribe
                                </button>
                            </div>

                        </div>

                    </form>
                </section>



                <section className="mb-4 col-lg-6 mx-auto">
                    <p>
                        A Full Stack Niche Car Sales Application built using ReactJs, React Bootstrap, NodeJs, ExpressJs and for storing data MongoDB. This is a simple application where users can buy cars online very easily.
                    </p>
                </section>



            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <small>© {new Date().getFullYear()} Copyright. Application Developed By Saalim Shadman, A Computer Science Student At RMIT, Australia.</small>
            </div>

        </footer>

    );
};

export default Footer;