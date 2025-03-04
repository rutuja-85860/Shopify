import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const Navbar = () => { 
    const cartdata =  useSelector(state=>state.cart)
    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand" href="#"to="/" >Shopify</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </form>
                    </div>
                </nav>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        
                        <li class="nav-item">
                            <Link  class="nav-link" href="#" to="/Product">Product{cartdata.length}</Link >
                        </li>
                        <li class="nav-item">
                            <Link  class="nav-link" href="#" to="/Categories">Categories</Link >
                        </li>
                        <li class="nav-item">
                            <Link  class="nav-link" href="#" to="/Main">Cart</Link >
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;
