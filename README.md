# number-stash

This is the  first game I have made with VANILLA JS.
Here I learnt what the DOM is and how to work with it, how to use event listeners and so on.

In the game the player gets a number and has a choice whether to keep it, if kept this number is added to the total.
The aim is to maximise the total, with the constraint being that they can only choose 5 nums or reject 3 nums

I decided to study the stratergies of the game and looked into using a static threshold.
This means that the player will not stash any number lower than the threshold. 
I then found and checked that the maximum expectation for the total is 66.1, which happens with a threshold of 9.

Expectations of each threshold, I checked these by running simulations of the game with the stratergy. 
![Screenshot](numstash.png)

Deployment here [Click here](https://number-stash.vercel.app/)
