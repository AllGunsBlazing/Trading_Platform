import React from 'react';
import {render,screen} from '@testing-library/react'; // is it displaying on the screen comes from testing library
import '@testing-library/jest-dom/extend-expect'; //to delay the check if component is fetching data and is delayed so this is used to delay the time
import Hero from "./Landing_page/home/Hero.js";

// Test Suite , a comment shown on terminal
describe('Hero Component', ()=>{
    test('renders hero img', ()=>{
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image"); // selecting an element from screen
        expect(heroImage).toBeInTheDocument(); // a function avaiable in the imports
        expect(heroImage).toHaveAttribute("src","media/homeHero.png"); // one more check or attribute to check 

    }); 
});

