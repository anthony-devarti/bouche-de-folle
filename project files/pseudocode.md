# React Restaurant Project

## Users "I Can" statements
1.) I can see the menu
    a.)I can see what's in the dish
        1.) I can make substitutions or remove ingredients
2.) I can see the hours of operation
3.) I can see the location on a map
4.) I can experience the mood of the restaurant through the webpage
    -color scheme attached
    -helvetica 
5.) I can look for specific types of foods

## Problems
    -API call working as expected.  This should probably be handled first, to make sure that the necessary data is coming through as expected.
    -Nav bar logo extending beyond the bottom of the nav-bar may be trouble.
    

## Components
Navbar (https://getbootstrap.com/docs/4.0/components/navbar/)
    logo
    home
    visit us
        hours of operation
        address and map
    contact us

Hero element
    CTA - sends user to menu
    background image

Menu
    Categories ()
        Menu item card (https://getbootstrap.com/docs/4.0/components/collapse/#accordion-example)
            description
            price
            image
            substitutions checkboxes
                recommendations
                    If > 2 items are removed, recommend chosing somthing else.


Menu card logic
    should be an accordion style menu
    price field in bottom right for prices
    push dish title to label section on accordion
    search image of dish and fill left section with result? are there images already attached?
    Is the visibility or lack of visibility on an accordion style component going to have a negative impact on the API call?




