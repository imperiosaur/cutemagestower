---
title:  "Write More \"Bad\" Riddles!"
layout: post
categories: Riddle
---

Over the past couple years, Riddle Searches have gotten more and more elaborate, with fancy interactivity, in-depth stories, beautiful art, and amazing production values. Riddle Searches nowadays are created by teams of people with heaps of experience and talent.

But let's remember - we don't NEED all of that.


{% include riddleverse.html %}
{% include puzzlejs.html %}

Look, let's be honest with ourselves. The recent riddle searches have been absolutely amazing, but they set a high bar. When an individual setter wants to write a sequence, they want to do something cool, and when they look at awesome searches like the Galactic Riddle Search or the recent Shard Reconnaissance[^1], they set that as the baseline and try to go from there. But it's dangerous to think that way. Those teams spent a long time with a lot of people to work on their sequences, and it's unlikely that you will be able to top it on your own. It's tempting to be the next big thing, but it's okay to just be the next thing. Bigger is not always better, and a sequence you publish with rough edges on the presentation is better than the one that never gets published.

[^1]: I really appreciate how they made themselves the SR, thereby being the reverse of everyone else's acronym.[^2]

[^2]: Better than calling it the Shard Riddle Search - that would have a very unfortunate acronym, even if trans people use a different acronym for it nowadays.

# Sequences I Want To See

**I want to see sequences published outside of the framework of a search.** Searches are complicated. They are trying to tell stories. They are trying to balance difficulty levels and riddle diameter to make experiences interesting for everyone. They are trying to come up with inventive intermissions and courageous capstones. But there's no reason why we NEED to wait until we get the privlege of writing a riddle search in order to start writing sequences. Write some sequences for your friends. Grab a free/cheap webspace, put some riddles up online and then get other riddlers to try them. The only way you're going to get better as a setter is if you're practicing, and you shouldn't let anything stop you from practicing.

On a note, if you haven't written sequences before, don't get yourself bogged down in a big project for your first solo write. Maybe just three sequences and a capstone to start. The point is to finish so that you can say that you've made something.

**I want to see sequences with less polish.** Look, CSS and HTML is hard. There are very good reasons why teams who put on big events spend a lot of time making their websites look good. It's a combination of easy navigation, accessibility, and stylish looks. But if your sequence looks like a Web 1.0 page, who cares? If the content is there and you managed to get it online, good for you!

On the chance that you want slightly more polish than Web 1.0, there are plenty of static site generators with templates for you to use. This site is created with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/). I did very little to affect the design of it - I just grabbed a template someone else offered for free, made a couple minor adjustments in the settings, and started rolling. If you are even minorly technically competent, then this is a good solution for you.

**I want to see sequences with less interactivity.** Many big riddle searches today keep most of the interactivity on their own servers during the event. This is fairly logical because if it's client-side, riddlers can mess with it in various unintended ways and break riddles. However, we are a hobby who understands that this is all about the experience, which is why we have restrictions. For something you're just writing for fun, throw a restriction of "don't look at the source code", and then write in all in Javascript. Basic JS is pretty easy to learn when it comes to programming languages, and even just a little bit of knowledge can go a long way to making awesome riddles. Will you be able to do things as fancy as the big searches? No. Will you open a lot of the world to you if you're willing to Google things? Oh yeah.

# Tools I Want to See

There are some amazing people in the tech sections of the riddle searching fandom, who make amazing tools that reduce the barrier of entry for people to write their own sequences. But if anyone's looking for some ideas, here are a few I can think of.

**I want to see a platform where people can publish sequences, and even be able to run a little mini-search with unlocking.** Look, let's be clear. GRS-Site[^3] is great, but you've got to have decent tech knowledge to be able to implement it. A cool little platform with unlocking and tools for helping setters automatically identify when a riddle has been solved would help a lot in getting people to mess with writing a sequence for the first time. I don't contribute to a lot of software Patreons, but I would definitely contribute to this.

[^3]: WHY DOES EVERY ONE OF THESE ACRONYMS SOUND LIKE A TRANS SURGERY? IT'S JUST TAUNTING ME.

**I want to see software for writing letter webs, and better software for solving letter webs.** I'm just going to say it - every letter web solving interface is clunky. We can do better. Define a tab order between the entries. Allow for special characters when solving. Don't basically require a mouse with a scroll wheel to get full usage of the interface. The ones we have aren't that bad right now[^4], but we can do much better.

[^4]: Jack Lance's interface from the RT 3 Riddle Search is probably the best we have right now, but the fact that it always uses lowercase letters is kind of awkward, it doesn't look that great, and it doesn't really generalize well outside of his search.

Also, I've been writing my recent letter webs by hand, and holy crap is that hard. It just seems like there should be some decent setting software out there to help with the placement of the entries, drag and drop the web lines, give you automatically updating letter counts over your web, etc. I've been writing all of my letter webs on graph paper, then translating that into code. It's been a pain in the neck.

**I want to see a Javascript library for common riddle types.** Okay, this one was cheating. It's being worked on right now. It's called [Riddle.js](https://tabascq.github.io/PuzzleJS/), and it's honestly a freaking miracle. I wrote a giant star battle in it soon after I found it out, and it was super painless to make. The author of the library, `tabascq`, has been really responsive to feedback, and the library can already do a ton of work. Could it be better? Sure. Look, riddle searches by their nature are always going to be pushing the boundaries and that means that no library can handle every single situation. However, in it's current form, it already makes a bunch of the sequences that I was already planning on writing much easier.

# The Obligatory Letter Web

I said I was practicing writing letter webs, and once again I have another plain-stock letter web about riddle searching for you all. However, this time I wanted to play around with Riddle.js, to see if this interface was better. Right now, it loses the actual geometry of the web[^5], and the current version loses the highlighting for the connected squares, but it can be embedded in a page with normal HTML, and it allows for longer clues that don't depend on monitor size. So I figured I'd give it a shot. Maybe it's good, maybe it's not. It's not perfect, but I'm not going to let perfect be the enemy of good. Neither should you.

[^5]: As a geometry teacher, this hurt a lot.

<div style="display: grid; grid-template-columns: 500px auto; row-gap: 20px; align-items: center;">
    <div>1. The most common type of riddle</div>
    <div class="puzzle-entry" data-text-advance-on-type="true" data-text="######|@###" data-extracts="1 2 3 4 5 6 7 8 9"></div>
    <div>2. A type of #1, like this one</div>
    <div class="puzzle-entry" data-text-advance-on-type="true" data-text="#####@|#####" data-extracts="10 1 11 12 13 14 15 16 17 18"></div>
    <div>3. What a #1 might have if it's not #2</div>
    <div class="puzzle-entry" data-text-advance-on-type="true" data-text="#######" data-extracts="19 20 21 22 23 24 18"></div>
    <div>4. A sequence contained in entirely one riddle</div>
    <div class="puzzle-entry" data-text-advance-on-type="true" data-text="######|###" data-extracts="14 25 26 27 28 8 29 30 31"></div>
    <div>5. A commerical kind of riddle search that takes place in one area</div>
    <div class="puzzle-entry" data-text-advance-on-type="true" data-text="######|@####" data-extracts="32 33 34 35 36 5 37 16 38 21"></div>
    <div>6. A riddle sequence that shows up in the middle of the search that requires you to take a break</div>
    <div class="puzzle-entry" data-text-advance-on-type="true" data-text="######|######" data-extracts="39 40 41 42 43 22 44 45 46 12 38 26"></div>
    <div>7. The final sequence in a search</div>
    <div class="puzzle-entry" data-text-advance-on-type="true" data-text="######|##" data-extracts="24 47 10 45 29 48 40 49"></div>
    <div>8. Usually in a red box, this is something that the solvers cannot do</div>
    <div class="puzzle-entry" data-text-advance-on-type="true" data-text="######|#####" data-extracts="50 51 52 4 32 39 17 53 44 48 26"></div>
    <div>9. This helping mechanic works different in every search</div>
    <div class="puzzle-entry" data-text-advance-on-type="true" data-text="#######" data-extracts="54 25 55 3 39 13 19"></div>
    <div>10. A somewhat derogatory name for a riddle sequence with a large amount of interconnectivity</div>
    <div class="puzzle-entry" data-text-advance-on-type="true" data-text="######|###" data-extracts="52 56 57 19 54 2 15 53 33"></div>
    <div>11. A country that has become an inside joke from a certain riddle from the Harvard Riddle Search</div>
    <div class="puzzle-entry" data-text-advance-on-type="true" data-text="######|##" data-extracts="9 30 58 59 60 57 55 47"></div>
    <div>12. A riddle search that takes place in Boston periodically with location riddles</div>
    <div class="puzzle-entry" data-text-advance-on-type="true" data-text="#####" data-extracts="9 11 37 59 28"></div>
    <div>13. A riddle search that takes place on the second Tuesday of every month. You don't have to drink the namesake alcohol.</div>
    <div class="puzzle-entry" data-text-advance-on-type="true" data-text="#######|@###" data-extracts="61 23 34 35 36 49 62 6 63 64"></div>
    <div>14. Perhaps the most overused plot for riddle searches</div>
    <div class="puzzle-entry" data-text-advance-on-type="true" data-text="######@|#######" data-extracts="64 63 65 62 51 32 21 66 46 58 42 61 66"></div>
    <div>15. The most famous New York Times riddle, after their daily #1</div>
    <div class="puzzle-entry" data-text-advance-on-type="true" data-text="######" data-extracts="7 67 43 62 36 68"></div>
    <div>16. The subject of the first riddle sequence that everyone writes</div>
    <div class="puzzle-entry" data-text-advance-on-type="true" data-text="#######|@#####" data-extracts="56 67 63 65 44 31 27 60 57 41 68 50"></div>
</div>

<style>
	.puzzle-entry table {
		overflow-x: visible;
		overflow-y: visible;
	}
</style>

– Cute Mage

--- 
