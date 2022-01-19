import React from "react";

import { Wrapper,Navbar,Content } from "./account.style";

import Header from "../Header";

// Icons
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PaymentIcon from '@mui/icons-material/Payment';
import BoltIcon from '@mui/icons-material/Bolt';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser,logout } from "../../features/userSlice";
import { auth } from "../firebase";

const Account = () =>{

    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SignOut = () =>{
        auth.signOut().then(()=>{
            dispatch(logout())
            navigate('/')
        })
        .catch((error) => alert(error.message))
    }

    document.title='Tesla Account | Tesla';
    return(
        <>
        <Header/>
        <Wrapper>
            <Navbar>
                <div className="row" >
                    <div className="main home">
                        <HomeIcon className="logo" />
                    </div>
                    <div className="text high" >
                        <h2><a>Dashboard</a></h2>
                    </div>
                </div>
                <div className="row" >
                    <div className="main">
                        <PermIdentityIcon className="logo"/>
                    </div>
                    <div className="text">
                        <h2><a>Profile Settings</a></h2>
                    </div>
                </div>
                <div className="row" >
                    <div className="main">
                        <PaymentIcon className="logo"/>
                    </div>
                    <div className="text">
                        <h2><a>Payment Method</a></h2>
                    </div>
                </div>
                <div className="row" >
                    <div className="main">
                        <BoltIcon className="logo"/>
                    </div>
                    <div className="text">
                        <h2><a>Charging</a></h2>
                    </div>
                </div>
                <div className="row" >
                    <div className="main">
                        <AllInboxIcon className="logo"/>
                    </div>
                    <div className="text">
                        <h2><a>Loot Box</a></h2>
                    </div>
                </div>
                <div className="row" >
                    <div className="main">
                        <HistoryIcon className="logo"/>
                    </div>
                    <div className="text">
                        <h2><a>Order History</a></h2>
                    </div>
                </div>
                <div className="row" onClick={SignOut}>
                    <div className="main">
                        <LogoutIcon className="logo"/>
                    </div>
                    <div className="text">
                        <h2><a href="/" >Sign Out</a></h2>
                    </div>
                </div>
            </Navbar>
            <Content>
                <h1>{user?.displayName + "'s Dashboard"}</h1>
                <div className="container" >
                    <div className="box box1" >
                        <div className="desc" >
                            <h3>Order Tesla Solar</h3>
                            <p>Produce energy to power your Tesla life</p>
                            <a href="#" >View Solar</a>
                        </div>
                    </div>
                    <div className="box box2">
                        <div className="desc" >
                            <h3>Reserve a Car</h3>
                            <p>Browse our models</p>
                            <Link to='/'>Shop Now</Link>
                        </div>
                    </div>
                    <div className="box_fade" >
                        <div className="box3" ></div>
                        <div className="desc fade" >
                            <h3>Purchased a car from a third party?</h3>
                            <a href="#">Add</a>
                        </div>
                    </div>
                </div>
            </Content>
        </Wrapper>
        </>
    )
}

export default Account