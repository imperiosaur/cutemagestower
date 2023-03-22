---
title:  "AI: Conjuri's Haystack"
layout: post
categories: MIT2023
---

I love illegal puzzles, so I really loved the AI rounds, and I kinda want to dive into them. We’re going to start with Conjuri’s Quest. Not going to lie, this is my favorite of all four AIs. However, I'm also slightly biased because of my experience with this meta, which you’ll see at the end of the article.


# Rogue-Like Progression

This round is centered around the idea of making a meta out of a [rogue-like](https://en.wikipedia.org/wiki/Roguelike) game. The basic idea is that you’re playing a game with a procedurally generated dungeon where you learn and do better every time. You can map out the progression of the game.

1. Start exploring, figure out how the puzzles work
2. Unlock a couple puzzles
3. Spend a lot of time dying, but unlocking a bunch of puzzles.
4. Solve some puzzles, try to figure out how to input answers to the puzzles. 
5. Figure out strategies to beat the monsters, at the same time start to unlock some new items from solving puzzles.
6. Repeat steps 2 and 5, unlocking waves of new puzzles.
7. At some point someone on your team accidentally buys the Hardener, making your life harder.
8. Get to the boss. Die a bunch.
9. Get to the boss and win. Unlock the Spellbook.
10. Someone figures out how to use the Spellbook and upgrade all of your items.
11. Everyone starts mapping their paths through the game, and then figures out how to solve the meta.

This is a solid progression, and I absolutely love how progress is gated both from figuring out how the game works and solving actual puzzles. The game pushes itself in there just enough that you can solve puzzles while letting your teammates deal with the video game part, but you can’t completely ignore the video game. Also, from the little bit of playing the game that I did, I thought the game was kind of fun.

One of things I particularly liked about its design is that it is centered around being a rogue-like meta first and foremost and lets a lot of the other choices flow from that idea. Puzzles are gated behind other puzzles in the game itself, integrating the unlocking structure into the game. The items allowing you to specialize in doing different things during each run meant that you could spend one run focusing on getting gold, the next on trying to find puzzles, and the one after that trying to get into the boss encounter. The extraction method was very much tied into it being rogue-like as well, but I’ll get into that later. The whole round felt like one cohesive whole, and whoever had the vision for it did a wonderful job implementing that vision.

That being said, there was one thing I didn’t like about this round, but to explain that, allow me to tell you about the time I saved the world from an apocalypse. 
# Saving the World
Apocrypha is a game published by Lone Shark Games. It is a game about the people who can see the monsters and other supernatural creatures living among us and how they handle that. The game has a strong horror theme to it as it deals with memory loss, creatures hiding among us, and people being helpless to said creatures. It’s a fun game, but also I’ll admit that if you start to process what’s happening, it can mess with your mind.

The most relevant part to the above explanation is the “Lone Shark Games” part. Lone Shark is known not only as game designers, but also as puzzle creators. They like putting puzzles in games and games in puzzles. In the case of Apocrypha, they hid a giant puzzle set throughout the cards, rulebook, box art, basically anywhere they could. Tackling it was a big deal, given the size of the game. However, there was a problem with it.

While so much of the game was part of the puzzle, there was still so much of the game left. How does one know that one particular card has a part of the puzzle and one doesn’t? Some puzzles stood out to me as I played the game. I found the puzzle in the Death cards immediately upon unboxing the set, saw the puzzle in the base set rulebook in my first readthrough, and I noted that Candlebox was probably used in a puzzle, but I certainly did not get the scope or scale of the puzzle from a casual glance, so it stayed in the back of my mind. Now technically, everything needed for the puzzle was hidden in the game and it was solvable as soon as all three boxes were out, but in practice it wasn’t enough. The full puzzle wasn’t solved[^3] until the Stenographer’s Guide was published and the Lone Shark Huginn and Muninn Twitter accounts were giving hints and checking answers. In practice, these added no new information. The Stenographer’s Guide didn’t repeat anything that wasn’t on the back of the Box 3 rulebook, but it highlighted where to look for each of the individual puzzles, which allowed us to appropriately focus. Muninn’s Twitter account allowed us to check answers - this wasn’t strictly necessary, since the puzzles all had clear answers, but it meant that we could confirm what we had done and knew when we had finished an individual puzzle.

[^3]: I mean, I guess it could’ve been solved by someone and then they told no one, but given that the last step involves sending something to Lone Shark, I find it unlikely. 

This puzzle was super fun, but I would argue that the puzzle was much better with the Stenographer’s Guide. There was still plenty of things that we needed to find in the game, but we at least had the trailheads 

If you want to see what was involved in this puzzle, [this is the google presentation](https://docs.google.com/presentation/d/1Pk3MEhi0bDQw4pJB39eu9A29rDLQJUIf2NtIP81OGNw/edit?usp=sharing)[^10] that I maintained to help onboard folks as to where we were.
 

[^10]: If that is loading slowly for you, you can also use the published version [here](https://docs.google.com/presentation/d/e/2PACX-1vTIbUdQ0K7EkeLdI7MpJmgUQhkVgj-8gvgTQrEh74XWgH84jv3mKT_0KL6CT_A031szgitUP44g5hIO/pub?start=false&loop=false&delayms=3000). 

# Back to the Dungeon
Fortunately, Conjuri’s Quest doesn’t have nearly as many art assets as Apocrypha does, but there are still a lot of data streams contained in the game. Here’s a list of things that need to be considered:

* Puzzles
	* Puzzle Answers
	* Puzzle Titles
* Monsters
	* Monster Names
	* Puzzle Types
	* Monster - Puzzle Assignments
* Maps
	* Shape of the Map
	* Location of the Monsters
	* Location of the Puzzles
	* Location of the Key Doors
* Boss Fight
	* Location of the Boss
	* Order of the Monsters
	* Number of Instances of Each Monster
* Items
	* Item Names
	* Item Order
	* Spells

That is a lot of data - so much more than most other shell metas. It’s totally valid to get lost in the data. A lot of this is relevant, but a lot of it is not, and it isn’t obvious at the start which parts to focus on. There are certainly some deductions that are reasonable to make, but there is still a lot to get lost in. However, there’s another issue that crops up with this meta specifically, and that has to do with extraction.

Because of the way that extraction works, each run will only give you a couple of letters. There are some very good reasons as to why this happens. First of all, from a game design perspective this shortened the game, made the map more manageable, and allowed for more freedom in the random placement. From a meta design perspective, it is very thematic for a metapuzzle about rogue-like games to only give you a piece each run and require you to do multiple runs to see the whole thing.[^4]

[^4]: Although actually, The MIT Mystery Hunt ✅ only needed one run because we’re awesome. We Wheel of Fortuned[^5] the phrase from ???UE?ITEBU*.

[^5]: This refers to only having some of the letters and getting the rest of the phrase, like solving a puzzle in the game show Wheel of Fortune.

The problem is, when each run only gives you a couple of letters, it’s hard to confirm that you’re on the right track. Puzzles need built-in confirmation to help solvers know that they’re on the right track, and this meta not only has lots of additional information that hides the true path, but it also removes the confirmation step that most metas have.

This leads to the power-level errata[^6] that was released at 2:20 AM on Monday: 
> You will need to completely map out the rooms and their contents. * Item order and doors are not relevant to the puzzle; after using the items for the puzzle, neither the items nor the puzzle answers will be used again. * Each run has different counts, a different matching, and a different room map. * In each run, not all monsters will have a match.

[^6]: This is errata that makes the puzzle easier, as opposed to errata to fix a mistake. I don’t think that this term has been used in puzzle hunts before, but I’m stealing it from other games because it makes sense here.

In my personal opinion, this errata was not only necessary at the time, but made the puzzle better overall. The biggest thing it does is tells us that neither the item names nor the original puzzle answers are used for the final meta. That being said, the clarification that mapping is important pushed us in the right direction. All of this allowed us to focus on the right parts of the meta, and is why we finished one minute after The Team to be Named…[^7].

[^7]: Look, I will do the *woosh* and the *neow* every time, but I refuse to say TTBNL’s full name every time. If they wanted me to do that they shouldn’t have picked a boring long name.

# Cute Mage’s Personal Quest

I can’t talk about Conjuri’s Quest without talking about my personal experience solving it. When we unlocked it on Sunday, a couple people claimed working on the video game and I stepped back from it. Besides, there was a Wyrmhole that needed dealing with, and I had already done something similar to the Hall of Innovation the previous day. As the day progressed, I realized that this Hunt wasn’t finishing by 6:00 PM on Sunday, and I was feeling kind of down. For various personal reasons, I had to fly back Sunday night[^1] instead of Monday afternoon, so I had scheduled my flight for late Sunday night assuming that the Hunt was going to be over. I hadn’t left early in years, and I was feeling pretty bummed about it. Fortunately, in my sadness I checked what time my flight left and realized that what I had thought was the departure time was actually the arrival time, and I needed to book it to Logan. So book it I did.

[^1]: This may or may not have been a mistake. I had to work on Monday but I was not very awake for it. (Also, I hadn’t had to fly to the Hunt for years, but I just moved and was now airplane range away instead of commuter rail range. 😞)

Turns out I needn’t have done that. My flight was delayed. I made it through the airport with a minimum of TSA Agents touching me[^2], and then I sat at my gate, waiting for news of my airplane. Idly, I decided to hop on the wifi and see how we were doing. We still were stuck on three metas - the Lost at Sea meta from Wyrmhole, the Ascent meta, and the Conjuri’s Quest meta. I poked into Lost at Sea for a while, but I was text only at that point because it turns out that Logan Airport wifi _also_ blocks the ports needed for Discord audio. I submitted a couple ideas but soon it was time to board. This was three hours after my flight was scheduled to leave.

[^2]: The answer to this is not 0 unfortunately. That’s the punishment for being a trans woman apparently. I ALWAYS trigger the scanners and the TSA agents need to inspect me every single time.

On the plane, JetBlue started advertising their free Wi-Fi. Normally I don’t like buying airplane wifi, but if it’s free, why the heck not? I get it for my phone, and I'm back to solving. Well, as best I can solve on a phone. We still have three open metas. Ascent seemed like progress was being made on it, but most of the conversation was being had over the audio channel, so that was a no-go. Lost at Sea had a giant spreadsheet dump, making it hard to view on the phone. This was also being worked on audio, so that was another strike against it. This meant that the easiest puzzle to work on was the one that was a video game that I couldn’t play on my phone. Life is weird.

Over the next hour, I proceeded to ask all sorts of questions about how the game worked, and my teammates were very patient and gave me all sorts of info. Then, this happened.

![Discord logs of Cute Mage solving the first step of Conjuri's meta](/img/conjuriaha.png)

One of the nice things about hunting with The MIT Mystery Hunt ✅ was that I didn’t have the full reputation that I did on Palindrome. After that, I may have started to develop it again.

# A Plea for Archival

So yeah, I absolutely love Conjuri’s Quest and I think that it was overall executed wonderfully. I just wish that it was still able to be solved now. Look, I totally get the metapuzzle may not be able to be fully archivable, especially since it was a shared state between teams. This was absolutely the case for my pet metapuzzle Introspection from New You City[^8]. But right now, not only can we not get any data on the metapuzzle from the game, but because the answer checker to each of the puzzles was in the game, we can't check the answer to any puzzle in this round. These are now the only puzzles from 2000 forwards that don't have an answer checker.

[^8]: On that note, I greatly appreciate Shai’s implementation of the archival version of Introspection, especially since I completely crashed after Hunt and was not going to be able to make it. 

Even a javascript app that generates a bunch of relevant data every time the solver refreshes the page would be super helpful and allow people to solve the cool puzzle that they wrote[^9]. Cause quite frankly, it's really freaking cool and I want other people to see how cool it was.

[^9]: In addition, you would need a js Spellbook, which is also possible. I would’ve put it in the paragraph above, but it would’ve broken the flow that I accidentally wrote.

– Cute Mage

--- 
