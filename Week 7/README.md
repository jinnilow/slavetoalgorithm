# Week 7 Content
## Rethinking the Brief

[A quick recapture of my initial project](https://github.com/jinnilow/slavetoalgorithm/blob/master/Week%205/README.md) - I wanted to create a tool which would visually project a memory through our sensory experiences. But of course, looking at the timeframe, possibility of the project & the feedback as well, I decided to think of other ways I could carry out the idea without the use of VR and the EEG sensor. Essentially, the project still has to 
1. Trigger memories through sensory experiences.
2. Generate an artwork/ visual output based on the experience.

### Brainstorm

Yasmin and I brainstormed a few ideas that I could do for my project. 

The first idea was to use a [DIY cardboard VR headset](https://www.youtube.com/watch?v=asITXtq3iEg) to visually project the memory. Users should be able to input what they are thinking of through some sort of text input, and that should generate a visual/ artwork in the VR world. As I was quite unsure of how to connect everything together and honestly did not want to do VR, I decided to move on to the next idea.
<br /> <br /> 
<img src="https://i.ibb.co/zhV47fR/Screenshot-2020-09-11-at-2-15-50-PM.png" alt="Screenshot-2020-09-11-at-2-15-50-PM" border="0" width="500"/>
<br /> <br /> 

As I was discussing this with Yasmin, she brought up a point about how we usually can’t rely on our memories because some parts of it might not have even happened, but it’s usually the feeling/emotion that you remember from it. This gave me the idea to focus more on the emotions then, and possibly use face tracking as a device track the user’s emotions.

So we thought of a web-based project that would help with memory building. First, the user has to trigger a memory through any chosen sensory experiences in their own space. Then, the tool could possibly facial track users as they think of a memory and guess the emotions that they are feeling. The tool will then prompt open-ended questions that will guide them through the process of remembering, and the end result would be sort of this 3D visualised trail of thought. As they click onto each point of their trail of thought, they will be able to see a part of their memory. This would also be helpful for people that might’ve had traumatic incidents, so they will not have to visually relive the whole experience again, but could instead confront the emotions linked to the incident from a new perspective.
<br/><br/> 
<img src="https://i.ibb.co/tQCG4cv/1.jpg" alt="1" border="0" width="320"/> <img src="https://i.ibb.co/bdpBDJC/2.jpg" alt="2" border="0" width="320"/> <img src="https://i.ibb.co/0Zft1Wj/Untitled-Artwork-2.jpg" alt="Untitled-Artwork-2" border="0" width="320"/> <img src="https://i.ibb.co/0DvFKz1/Untitled-Artwork-3.jpg" alt="Untitled-Artwork-3" border="0" width="320"/> <img src="https://i.ibb.co/Bjy7Sn7/Untitled-Artwork-4.jpg" alt="Untitled-Artwork-4" border="0" width="320"/>
<br/><br/> 

The third idea was to create a digital data sculpture based on the emotional memory. So first the user would have to try and verbally explain what they feel about the memory or what they remember, and this would generate a digital sculpture of different colours and textures and shapes. To even bring this further, the end result could possibly be 3D printed as a tangible memory. 
<br/><br/> 
<img src="https://i.ibb.co/2tDVPDR/Untitled-Artwork.jpg" alt="Untitled-Artwork" border="0">
<br/><br/> 

### Refining the Idea

I ended up selecting the second idea and had to continue refining it. After a lot of research, I realised that it might’ve been still quite ambitious to do everything mentioned in the second idea as I would have to learn how to code an interactive website, facial track users and turn them into readable emotions, prompt open ended questions which meant having to create a database of visuals for both the emotions and the text input. Then, I would also have to learn how to generate a 3D trail of thought/ mind map visual. Basically, there is too much that needs to be done within 5 weeks. And so, I have decided to simplify the whole idea. 

When I did my research for facial tracking emotions, Python was mainly recommended and I felt really overwhelmed as I do not know how to use Python and do not intend to learn it within the span of 5 weeks.
<br/><br/> 
<img src="https://i.ibb.co/f25X8BX/Screenshot-2020-09-11-at-1-05-03-PM.png" alt="Screenshot-2020-09-11-at-1-05-03-PM" border="0">
<br/><br/> 

And so, I decided to have a chat with Linsy- she used to be in Slave to Algorithm as well and created an interactive mirror using facial tracking. Through discussing with her, we managed to come up with a simpler method to be done through Javascript. This brought me such relief that at least it can be possibly done with the resources I know. 
<br/><br/> 
<img src="https://i.ibb.co/D4nwv3S/IMG-3038.png" alt="IMG-3038" border="0">
<br/><br/> 

Through this, I went on to research facial expression tracking through p5js and found many codes that have managed to track emotions through facial tracking  quite accurately.
<br /> <br /> 
<img src="https://i.ibb.co/KxVX4rM/Screenshot-2020-09-10-at-9-43-38-PM.png" alt="Screenshot-2020-09-10-at-9-43-38-PM" border="0"> <br /> 
<sub> [p5.js Face Tracking with Dots](https://editor.p5js.org/sl7211/sketches/ry8Q4eqCX) </sub>
<br /> <br /> 
