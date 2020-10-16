# lab-13-user-adventure

#Main page------------------------------------
- HTML form inputs for name and class
    - what for? to personalize the quest
    -store in local storage 

-Outcomes 
1) validation - log 'hello world' on submit -- just to prove my event listener is wired up
1)Log form data on submit 
1)Store in local storage on submit (and log local storage)
1)Do step 3+ redirect to the map page on submit



#Map-------------------------------------------
-Hard coded HTML: <\ul> that can hold a bunch of links 
-Generate HTML: loop over the quests, and make a link for each one
-If the quest is already completed, make a non-link div instead.

1)Log out my quest data to make sure it is wired up
1)Loop through the quest one by one to make sure my loop works 
1)Make a link (with query param) for each quest and log the HTML element out
1)Append the links to the <\ul> 

                    - ToDo: disable completed quests, redirect on game end





#Quest page----------------------------------
-Hard coded HTML not much. Maybe lots of empty divs? Maybe we generate those through?

Outcomes:
1)Get the search params and log them out
1)Use the search params to grab the correct quest (log it out)
1)Render a bunch of the 'quest stuff' to the DOM
    -note that the choices will need a loop
    -we'll need an event listener on the button that figures out which option the user selected (log that out)
    -in the event listener, use the data to manipulate state(change HP/sanity/meeter/items complete quest etc)

    go back to map page and finish ToDos
    1)Figure out end game state and redirect
    1)Disable the completed quests


#Results ----------------------------------------
-USe state to display a different message depending on the final user state (HP/sanity/items/conversion)