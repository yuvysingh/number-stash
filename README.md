# number-stash

This is the  first game I have made with VANILLA JS 

Here I learnt what the DOM is and how to work with it, how to use event listeners and so on.

In the game the player gets a number and has a choice whether to keep it, this number is added to their total.
The aim is to maximise the total, with the constraint that they can only choose 5 nums or reject 3 nums

I decided to study the game and found that if you were to use a non dynamic stratergy the best way to maximise the total is to have a threshold.
This means that you will not stash any number lower than the threshold. 
Then I found and checked that the highest expectation is of 66.1 with a threshold of 9.

Expectations given certain thresholds.

1:52.5
2:54.99612436914065
3:57.445198500000004
4:59.755392181640666
5:61.81993600000003
6:63.542633056640625
7:64.85279850000002
8:65.71194999414064
9:66.11433600000005
10:66.08315249414065
11:65.6640625
12:64.91739655664063
13:63.91017599999999
14:62.708864681640634
15:61.3735185
16:59.953765869140625
17:58.486816000000005
18:56.997455619140624
19:55.4997585
20:53.999995931640626

Deployment here [Click here](https://number-stash.vercel.app/)
