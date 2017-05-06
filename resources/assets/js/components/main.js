import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Rank from './Rank';
import Myform from './Myform';
import NavbarForm from './Navbar';
import Navbar from './Navbar';
import Survey from './Survey';
import Home from './Home';
import Home_progress_bar from './Home_progress_bar';
import AchievementPage from './achievement_page/AchievementPage';
import HomePage from './home_Page/HomePage';

setInterval(tick, 1000);
function tick() {
// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console 
if (document.getElementById('clock')) {
    ReactDOM.render(
        <Clock date = {new Date()} />,
        document.getElementById('clock'));
     }
}

if (document.getElementById('rank')) {
    ReactDOM.render(
        <Rank />,
        document.getElementById('rank'));
}

if (document.getElementById('survey')) {
    ReactDOM.render(
        <Survey url="/survey/new" scale="Circular_scale"/>,
        document.getElementById('survey'));
}

if (document.getElementById('circular_progress_bar')) {
    ReactDOM.render(
        <Home />,
        document.getElementById('circular_progress_bar'));
}


if (document.getElementById('home_progress_bar')) {
    ReactDOM.render(
        <Home_progress_bar />,
        document.getElementById('home_progress_bar'));
}

if (document.getElementById('achievement_page')) {
    ReactDOM.render(
        <AchievementPage/>,
        document.getElementById('achievement_page'));
}

if (document.getElementById('home_page')) {
    ReactDOM.render(
        <HomePage/>,
        document.getElementById('home_page'));
}

