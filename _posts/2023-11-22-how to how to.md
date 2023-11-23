---
title:  "How to How to Hunt"
layout: post
categories: others
mathjax: true
---

{% include nutshell.html %}

There are lots of puzzle hunts coming up this December, followed by the big one – the [MIT Mystery Hunt](http://puzzles.mit.edu/) – happening in January, which makes this the best time of year for learning how to solve hunt puzzles. This post is not for the people who are learning about solving puzzle hunt puzzles for the first time. This post is for the people teaching them.


# Structure is not Enough

When I’m not writing way too long blog posts about puzzle hunts for the Internet, I am a middle school math teacher. I’ve taught middle school or high school for 9 years at this point, teaching fraction arithmetic all the way up to [:Taylor Series](#TaylorsVersion). For those who are not involved in this sphere and haven’t been in a middle or high school in the past ten tears, good mathematics teaching looks different than it did in the early 2000s. You can see this in how mathematics teaches word problems.

There are generally two types of word problems taught in math class. The first are the type where the words are just a thin veil for the math problem the book wants you to do, and the second are the type where students are given a situation and the first step is to figure out what topics from math even apply. Two examples of this kind of problem that I use all the time are: “How long would it take Pokémon Go to hatch an egg if it was taped to a ceiling fan?” and “How much would it cost to fill your place of residence with Jell-O?”.

Now let’s be clear – much like the thinly veiled problems, I have chosen those problems specifically because the math concepts they get at are relevant to what we’re teaching. The [Pokémon Go](https://www.101qs.com/3827) problem comes in when I first teach about circles, and the Jell-O problem happens when we talk about irregular area and volume. However, these problems also require students to grapple with figuring out what information they need to work on the problem. Students need to figure out that they need the speed of the fan, and the size of the fan, or that they need to get a LOT of measurements of their house. In fact, the final step of the [endgame of the 2021 MIT Mystery Hunt](https://puzzles.mit.edu/2021/endgame.html) is a great geometry problem, and I have just given them those measurements along with a map of MIT and told them to find the coin. Students come up with multiple ways of doing it!

In fact, even though it’s not 100% relevant, I want to dive into one particular question for a moment. The problem that sparked a lot of this was a problem about filling up an octagonal water tank. Dan Meyer [talked](https://www.ted.com/talks/dan_meyer_math_class_needs_a_makeover) about how silly this problem was, and then [he got an octagonal water tank and filmed himself filling it up, along with taking some measurements](http://threeacts.mrmeyer.com/watertank/). I have run this exact problem in multiple classes before, and the new version works really well – but there’s a trick to using it as a teacher: don’t give the students any information until they ask for it. Even when they do, keep it to basic information and make them do calculations. Do they want the volume of the water tank? I don't have that, but I have some different measurements on it. Do they want how fast the water tank is emptying? I don’t have that, but I do have a video of the water flowing from the water tank into a measuring cup. When students ask for things like the volume, it turns into a discussion of “what pieces of information could you ask for instead that would allow you to get the same information?” This is a discussion not about calculation, but about how you think about and approach a math problem.

My favorite part of this problem comes in the middle. The measurements are all in centimeters. The measurement cup is in grams. Eventually, you will have to convert from cubic centimeters to grams. I love watching students figure out that they need to do this. The vast majority of students do not identify this need at the very beginning of the problem, but when it comes for them to combine the two, they realize that their two measurements aren’t compatible, and they need to do some conversion to put them together. When I first started teaching this problem, students would come up to me and ask for the conversion factor. Nowadays students just pull out their laptops and [:ask Google](#AskGoogle). This moment is great because it really demonstrates that they’re not just blindly following a procedure, but constantly thinking about the problem and about what they need to do. This is something that wasn’t explicitly taught in math classes in the past, but is completely necessary.

This specific topic is the thing that I find missing from [:most](#ISaidMost) discussions about how to solve [:hunt puzzles](#HuntPuzzles). Folks are real good at breaking down the common structures of hunt puzzles and showing the steps necessary to solve them. However, what’s missing is the thought process. How do you approach the puzzle? How do you determine what to look at first? How do you know if the path you are going down is the correct one? How do you know what step you’re on? How do you know if the path you are on is a red herring?

Not to toot [:my own horn](#Doot), but this is a thing that I feel that I did well on [the stream part of the 2023 How to Hunt seminar](https://www.youtube.com/watch?v=I1i87mwfomw). When I went over [Harold and the Purple Crayon](http://puzzles.mit.edu/2022/puzzle/harold-and-the-purple-crayon/), I specifically included a couple Google searches that didn’t work in order to talk about the process of how you can use search engines to help you identify things. When I went over [Teach Us Amelia Bedelia](http://puzzles.mit.edu/2022/puzzle/teach-us-amelia-bedelia/), I started with looking over the puzzle and showed how I identified all the important parts that I was pulling from the puzzle. When I talked about solving metapuzzles, not only did I give multiple questions that solvers could use in order to help them think about how to solve metas, I talked about the great HEGU CRATER/DEGU CRATER issue from [Spaceopolis](https://puzzles.mit.edu/2020/puzzle/spaceopolis/). All of this came together not just to talk about the structures, but about how to approach those structures and how to think about them. This is incredibly important.

# Don’t Lecture At Them

Another thing that is really being pushed behind the scenes of education is moving away from a “sage on the stage” model. The basic idea is that students are not empty vessels to be filled, but active participants in their own education. Lectures have their place, but it is amongst a mixture of discussions, independent work, group work, and critical thinking exercises. In addition, students come into a class with knowledge, and if you can activate that knowledge, they will learn so much more from your teaching.

But of course, this is an inherently intuitive concept. Imagine if you had to listen to an hour long presentation about how to use an incredibly complicated piece of construction equipment. What do you think is the chance of you being able to use that piece of equipment competently right afterwards? Pretty low, unless you were already familiar with similar equipment. An hour long presentation just isn’t the right format for this information. I know that if I had to sit through that, I would definitely [:lose my focus](#YayADHD) on the presentation multiple times.

Your lesson should include something for students to _do_. When we did the stream part of Hunt 101, while it was hard to directly interact with people, we did have chat take part in filling out clues as we solved Teach Us, Amelia Bedelia. While this was a small task, it helped to break up the overall stream, and it encouraged participants to process the information we were giving in order to try some stuff themselves, while being bite-sized enough that participants could easily chime in.

Of course, for me the real win in this category came on the Thursday night before Hunt. For those who don’t know, Ben and I ran a presentation where we talked about some details very specific to the Hunt, reviewed a bit about [:Identify, Sort, Index, Solve](#NoAbbreviation), but then spent the vast majority of the time giving the participants [a set of puzzles](https://puzzles.mit.edu/resources/hth2023/hth2023.html) that I had written specifically for that event. We had [: 50ish people](#SeatCount) in that classroom, and all of them were working on different puzzles. The puzzles were designed to be short, but to highlight different kinds of puzzles that were likely to show up in the Hunt. The metapuzzle didn’t even give you all the answers in order to mimic solving a metapuzzle without all the information.

During that time, I walked around and interacted with groups of people solving puzzles. I watched as some groups got an aha all on their own and were off to the running. Some groups needed a bit of a hint on how to start. Different groups tackled different puzzles because of their interests, and even groups who tackled the same puzzles used different resources to solve that puzzle. It was, quite frankly, an amazing evening.

# The Lesson Doesn’t End When the Puzzles Start

When you are brand new to puzzle hunting, it is easy to get lost or overwhelmed. Puzzles are complicated, and it can be easy for entrenched solvers to forget how much we have learned since we have begun. Experienced solvers may spout out jargon, not explain what they’re doing, and pull answers magically out of incredibly complicated spreadsheets. If they’re not having a good time, you need to find out about it. 

Now, I’m not saying that if you teach a person, then you are required to be the one to check in on them. Certainly I have to believe that, given the number of people from different teams that I taught last year. However, if your team has new people on it, there needs to be someone designated to making sure that they feel welcome, that they’re having fun, and that they’re feeling like they are contributing in some way. Encourage hunt experts to team up with newbies on tackling puzzles – location puzzles and events are great for this. Managing emotions in your students is an important aspect of teaching, and if you make sure they have a good time, they’ll come back. If they feel lost and confused the entire time, then you’ve probably lost them.

# Wrapping it Up

Look, not everyone is professionally trained in teaching, nor do you need to be in order to be able to teach something. However, good teaching has changed from the 90s/00s, and many of us who grew up in those times have bad pictures in our heads about what constitutes a good teacher. But this doesn’t mean that we have to be bad either. By planning carefully and engaging with your student, you’ll be able to have a very effective lesson. That planning is hard, but I have confidence in you all.

After all, it’s just another puzzle.

– Cute Mage

---


# :x Taylors Version

Or as I prefer to call them: [:Series (Taylor’s Version)](#SeniorsSuck).

# :x Seniors Suck

I was HIGHLY disappointed at the number of High School Seniors in 2021 who did not get this joke. Like I expect that not all of my cultural references are going to hit with the kids, but I was shocked at getting no reaction from a Taylor Swift joke. Sheesh.

# :x Ask Google

Some, if they forget they’re in a classroom, will pull out their [:phones](#PhonesInClass).

# :x Phones in Class

Okay, so I have a lot of rants about education from my experience as a classroom teacher, but a big one is “Cell phones won’t be a problem in your class if your class is interesting.” I don’t particularly care the majority of the time if high school students have a cell phone. Middle school students, on the other hand, should not have their phones on them during class for developmental reasons.

# :x I Said Most

I’m sure that people are going to say “Oh, but this video includes this bit of information that talks about it.” That’s great – but I have found many discussions on this lacking – especially from resources that are made for the MIT Mystery Hunt specifically.

# :x Hunt Puzzles

Remember puzzle hunts? You know, the thing this blog is supposed to be about? It turns out that if I start ranting about math teaching, I will just keep going. I have Strong Opinions™.

# :x Doot

🎺 doot 🎺

# :x Yay ADHD

Yay ADHD!

# :x No Abbreviation

I hope it’s obvious why I’m not abbreviating that.

# :x Seat Count

I don’t think we had 50 seats. We definitely had people sitting on the floor. Whatever the maximum capacity of 4-159 is, we had more than that.