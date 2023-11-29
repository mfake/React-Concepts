import React from "react";


const buttonGap = {
    gap: '5px',
}

function Login(){
    return(
        <section className="container-fluid mt-5 base-page">
            <div className="row g-0">
                <div className="col-lg-6">
                <div className="d-flex flex-column justify-content-center px-4 py-10 pe-lg-16 mt-5">
                    <div className="mb-4">
                    <h2 className="text-3xl fw-bold">Sign in</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Don&apos;t have an account?{' '}
                        <a href="#" className="fw-semibold text-decoration-none text-dark"> Create a free account </a>
                    </p>
                    </div>
                    <form action="#" method="POST">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-group mb-4 mt-1 d-flex justify-content-end">
                            <a href="#" className="text-sm fw-semibold text-dark text-decoration-none"> Forgot password? </a>
                        </div>
                        <div className="mb-4">
                            <button type="button" className="btn btn-dark w-100 fw-semibold"> Get started </button>
                        </div>
                    </form>
                    <div className="col-sm-12 d-flex" style={buttonGap}>
                        <button type="button" className="btn btn-outline-primary col-md-6"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                        <button type="button" className="btn btn-outline-primary col-md-6"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                    </div>
                </div>
                </div>
                <div className="col-lg-6">
                <img
                    className="mx-auto h-100 w-100 rounded-md object-cover pr-8"
                    src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    alt=""
                />
                </div>
            </div>
        </section>
    )
}

export default Login;