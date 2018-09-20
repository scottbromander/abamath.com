import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import './curriculum.css';
import PacManExample from './curriculum-images/pacman_example.png';
import SizesOfSquares from './curriculum-images/sizes_of_squares.png';
import DitheringTool from './curriculum-images/dithering_tool.png';
import DuplicateSprite from './curriculum-images/duplicate_sprite.gif';
import MakeEyesMove from './curriculum-images/make_eyes_move.gif';
import EyeAnimation from './curriculum-images/speed_of_eyes.gif';
import ExportAnimation from './curriculum-images/export_sprite.gif';
import UploadSprite from './curriculum-images/upload_sprite.gif';
import FlipSprite from './curriculum-images/flip_sprite.gif';
import ScaleSprite from './curriculum-images/download_sprite.gif';
import UploadCostume from './curriculum-images/upload_costume.gif';

// // <meta></meta>

export default () => (
  <div>
    <h3>Design Your Own Sprite</h3>
    <p>
      The primary website used for this is
      {' '}
      <OutboundLink href="https://www.piskelapp.com/">piskelapp.com.</OutboundLink>
    </p>
    <p>
      Note that scratch also has a sprite editor; however, the following are the advantages
      of piskel:
    </p>
    <ol>
      <li>Teaches how to import and export sprites</li>
      <li>Makes pixel art, which became hugely popular because of games like minecraft</li>
      <li>Easier to animate and visualize animation with tools like layers and onion skins</li>
    </ol>
    <p>
      In order to save their work online, they need a gmail. When they did not, I would usually
      ask parents to login with theirs. They do not have to login to use Piskel, just to save
      their work.
    </p>

    <h4>Tutorial:</h4>
    <p>
      The first task should be to copy a character, if they have one mind, they can do that,
      if not, they can do one of the ghosts from pacman
      {' '}
      <OutboundLink href="https://seeklogo.com/images/P/pacman-ghost-logo-4E0E79293D-seeklogo.com.png">
        here
      </OutboundLink>
      . The pink ghost is a good example because some students may be colorblind, and this
      seems to have a good difference in contrast.
    </p>
    <img src={PacManExample} height="300" alt="pacman example" />
    <p>
      Show them tools on the left. You wont need to demonstrate every single
      tool since most of them would likely know most of them. Encourage them
      to experiment to learn all of the tools available. Here are
      the tools I would encourage to demonstrate:
    </p>
    <ul>
      <li>
        On top left, under PISKEL, there are four different sized squares. They are brush sizes,
        useful to make your work faster.
      </li>
      <img src={SizesOfSquares} alt="There are four different sizes of squares" />
      <li>
          At the bottom of the right column of the tool set is a dithering tool.
          Try it out, it’s kinda cool.
      </li>
      <img src={DitheringTool} alt="Dithering Tool" />
    </ul>
    <p>
      Once they are done drawing the character; tell them to start animating it.
      First we duplicate our frame. Hover over the frame (the yellow highlighted thing,
      and then duplicate icon with two papers next to each other will appear.
    </p>
    <img src={DuplicateSprite} alt="Duplicate sprite" />
    <p>Then animate the eyes, and by that I mean move the eyes to the center </p>
    <img src={MakeEyesMove} height="300" alt="Make pacman's eyes move" />
    <p>
      After both of the eyes are ready, they can look at what they created!
      Make sure in the right top corner the click full size, so they can see it.
      Explain what FPS(frames per second) means, and make sure to
      lower it to 2 or 3 FPS. (it’s the scrollbar under the preview)
    </p>
    <img src={EyeAnimation} height="300" alt="Find a good speed for the eyes to move" />

    <p>Now last step, lets learn how to use onions skins, and flip sprites</p>
    <p>
      Duplicate the first frame, and using the transform tools on the right,
      flip the image vertically. If the ghost is in the center, there won’t be any problems;
      however, if its off, the ghost will flicker. To fix this we will need to move the ghost
      where he was in the last frame. This is where the onion tool is helpful.
      To the left of the FPS bar is an onion icon, click it, and you should be able to see
      where the ghost was last time.
    </p>
    <img src={FlipSprite} height="300" alt="Duplicate your current sprite and then flip the new one" />
    <p>
      After that let them work on their own stuff.
      If they want to, they can make the ghost’s wiggles wiggle.
    </p>

    <h4>Exporting and importing your sprites</h4>
    <p>On the right side, go to the export button.</p>
    <img src={ExportAnimation} height="300" alt="export as zip file" />
    <p>
      Make the scale 6x or higher so the images do not show up tiny in scratch
      and then click download zip (if the kids create more than 10 frames, might
      be easier to export in gif, since it keeps everything in order)
    </p>
    <img src={ScaleSprite} alt="Change scale and download zip" />
    <p>Make sure to unzip the zip file. </p>

    <p>Then in scratch click import new sprite. Only the first frame</p>
    <img src={UploadSprite} alt="Upload sprite in Scratch" />

    <p>And the rest of the frames go into that sprite’s costumes</p>
    <img src={UploadCostume} height="350" alt="Upload new costume for sprite" />


  </div>
);
