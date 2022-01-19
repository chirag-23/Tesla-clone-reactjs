import React,{ useState } from 'react'
import { Wrapper,Content,Content1 } from './header.style'
import { Link } from 'react-router-dom';

import SideNav from '../SideNav'
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

    const [open,setOpen] = useState(false);

    return (
        <>
        <Wrapper>
            <div className='logo' >
            <Link to='/'>
                <img src='/images/logo.svg' alt='logo'/>
            </Link>
            </div>
            <Content>
                <Link to='/models'>Model S</Link>
                <Link to='/model3'>Model 3</Link>
                <Link to='/modelx'>Model X</Link>
                <Link to='/modely'>Model Y</Link>
                <Link to='#'>Solar Roof</Link>
                <Link to='#'>Solar Panels</Link>
            </Content>
            <Content1>
                <a href='#' className='none' >Shop</a>
                <Link to='/login' className='none'>Account</Link>
                <a href='#' onClick={()=> setOpen(true)} >Menu</a>
            </Content1>
            {open && 
            <div className='top'>
                <div className='close' onClick={()=> setOpen(false)}>
                    <CloseIcon/>
                </div>
            </div> 
            }       
            <SideNav show={open}/>
        </Wrapper>
        </>
    )
}

export default Header