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
<img src="https://i.ibb.co/2tDVPDR/Untitled-Artwork.jpg" alt="Untitled-Artwork" border="0" width="500"/>
<br/><br/> 

### Refining the Idea

I ended up selecting the second idea and had to continue refining it. After a lot of research, I realised that it might’ve been still quite ambitious to do everything mentioned in the second idea as I would have to learn how to code an interactive website, facial track users and turn them into readable emotions, prompt open ended questions which meant having to create a database of visuals for both the emotions and the text input. Then, I would also have to learn how to generate a 3D trail of thought/ mind map visual. Basically, there is too much that needs to be done within 5 weeks. And so, I have decided to simplify the whole idea. 

When I did my research for facial tracking emotions, Python was mainly recommended and I felt really overwhelmed as I do not know how to use Python and do not intend to learn it within the span of 5 weeks.
<br/><br/> 
<img src="https://i.ibb.co/f25X8BX/Screenshot-2020-09-11-at-1-05-03-PM.png" alt="Screenshot-2020-09-11-at-1-05-03-PM" border="0" width="500"/>
<br/><br/> 

And so, I decided to have a chat with Linsy- she used to be in Slave to Algorithm as well and created an interactive mirror using facial tracking. Through discussing with her, we managed to come up with a simpler method to be done through Javascript. This brought me such relief that at least it can be possibly done with the resources I know. 

So my current project would still essentially show what a person might feel when thinking of a memory. I was thinking of creating the tool through Processing & so basically the experience would start of with the user triggering a memory through any kind of sensory experience, so either smelling a scent etc and the tool would essentially track the facial expression and translate it to emotions. The data for that could then generate a digital model to visually represent the emotional memory. 
<br/><br/> 
<img src="https://i.ibb.co/17pGQng/ezgif-com-crop.gif" alt="ezgif-com-crop" border="0" width="800"/>
<br/><br/> 

After my conversation with Linsy, I went on to research facial expression tracking through p5js and found many codes that have managed to track emotions through facial tracking  quite accurately.
<br /> <br /> 
<img src="https://i.ibb.co/KxVX4rM/Screenshot-2020-09-10-at-9-43-38-PM.png" alt="Screenshot-2020-09-10-at-9-43-38-PM" border="0" width="500"/> <br /> 
<sub> [p5.js Face Tracking with Dots](https://editor.p5js.org/sl7211/sketches/ry8Q4eqCX) </sub> <img src="https://i.ibb.co/6RHkbjF/Screenshot-2020-09-10-at-10-08-37-PM.png" alt="Screenshot-2020-09-10-at-10-08-37-PM" border="0" width="500"/> <br /> 
<sub> [201107 Open Processing sketch by Takawo](https://www.openprocessing.org/sketch/942983) </sub>
<br /> <br /> 

<img src="https://i.ibb.co/6RHkbjF/Screenshot-2020-09-10-at-10-08-37-PM.png" alt="Screenshot-2020-09-10-at-10-08-37-PM" border="0" width="500"/> <br /> 
<sub> [201107 Open Processing sketch by Takawo](https://www.openprocessing.org/sketch/942983) </sub>
<br /> <br /> 

& I also found one that generated visual forms, through motion tracking and facial expressions.
<br /> <br /> 
<img src="https://i.ibb.co/Xx4Sqvw/Screenshot-2020-09-10-at-10-35-41-PM.png" alt="Screenshot-2020-09-10-at-10-35-41-PM" border="0" width="500"/> <br /> 
<sub> [Triangle Camera Open Processing sketch](https://www.openprocessing.org/sketch/813371) </sub>
<br /> <br /> 

<img src="https://i.ibb.co/5McQXXS/Screenshot-2020-09-11-at-10-15-12-PM.png" alt="Screenshot-2020-09-11-at-10-15-12-PM" border="0" width="500"/><br /> 
<sub> [emojiCV by Spencer Lee James](https://spencerleejames.com/project/emojicv) </sub>
<br /> <br /> 

So I guess my next big challenge would be to actually understand how the code works and to figure out how to translate these emotions & connect them to a database of visuals to generate some form of digital art if possible. As for the visual forms I was thinking of combining different shapes/colours and textures. I was [reading this article](https://hi.stamen.com/the-shapes-of-emotions-72c3851143e2) that basically talked about the psychology of how shapes/ colours/ textures/ even intensity in height and colour can represent an emotion.
<br /> <br /> 
<img src="https://i.ibb.co/yQdXcBb/1-m-QCOKXy1-L-el-X7y-Pxq10-LQ.gif" alt="1-m-QCOKXy1-L-el-X7y-Pxq10-LQ" border="0"><br /> 
<sub> The Shape of Emotions, 2016</sub>
<br /> <br /> 

I also saw this Open Processing sketch that I felt matched the kind of visual that I wanted to achieve as an output.
<br /> <br /> 
<img src="https://i.ibb.co/G99Bc6k/ezgif-com-video-to-gif.gif" alt="ezgif-com-video-to-gif" border="0"> <br /> 
<sub> [Bursting Open Processing sketch by Roni Kaufman](https://www.openprocessing.org/sketch/838545) </sub>
<br /> <br /> 

### Pseudocode 

To understand how pseudocode works, we did an activity in class where we tried writing an activity in our day using pseudocode.

FUNCTION grocery shopping
INPUT weather
IF  wind>20km/h
     Don’t go out

IF wind<20km/h
    Go out 

THEN  walk to the supermarket
WHILE  listening to music

END IF  trip to supermarket is successful

I am not too sure if I did this completely right, but it did give me a brief idea as to how pseudocode works and how it can simplify & make a person understand how to work the code better. I have also created a flowchart for my project so that I can visually understand how I can create a pseudocode out of it.
<br /> <br /> 
<img src="https://i.ibb.co/TYNWYCF/Screenshot-2020-09-11-at-1-52-25-PM.png" alt="Screenshot-2020-09-11-at-1-52-25-PM" border="0" width="500"/>
<br /> <br /> 

### Processing 

For this week’s class, we learnt how to generate random letters while it moves rapidly in its own placement. We also learnt how to do this in javascript which will be really handy for me as I was thinking of randomly generating visuals as well.
<br /> <br /> 
<img src="https://i.ibb.co/9bsGPQy/ezgif-com-video-to-gif.gif" alt="ezgif-com-video-to-gif" border="0">
<br /> <br /> 

We then made a few iterations, ones that can bounce off the borders as well as ones that increase in size as we type. The really interesting one was the one that could generate type as you type on the keyboard. This actually gave me the idea that along with the generated visual, users can generate a brief description of their memory along with the generated visual, and it will almost become this sort of final art piece/ commemorative of their memory. It would be cool to figure out if users could delete and edit their text in case they made a mistake.
<br /> <br /> 
<img src="https://i.ibb.co/Dtp9vP6/ezgif-com-gif-maker.gif" alt="ezgif-com-gif-maker" border="0">
<br /> <br /> 

