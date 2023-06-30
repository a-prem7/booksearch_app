import React from 'react'
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
    <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
            <h2 className='header-title text-capitalize'>Find your Book of choice</h2><br />
            <p className='header-text fs-18 fw-3'>Explore a vast selection of titles and genres, that allows you to dive into captivating stories and expand your knowledge in the realm of literature.</p>
            <SearchForm />
        </div>
    </header>
</div>
)
}

export default Header