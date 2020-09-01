import React, { Fragment } from 'react';
import Bottombar from '../layout/Bottombar';
const About = () => {
  return (
    <Fragment>
      <h1>About Food For Today</h1>
      <p1>Developer: Yibo Wang</p1>
      <br />
      <ul>
        <l1>
          <a href='https://github.com/LoneRan'>visit my github</a>
        </l1>
      </ul>
      <br />

      <p1>Version: 1.0.0</p1>
      <br />
      <l1>
        Every single day when we get up, we will face a philosophy question:
        what to eat today? what for breakfast, for lunch or dinner? What's more
        horrible is not only I'm very poor but also I'm too lazy to go out for
        vaggies or meats. Here is the story. I only got 1000$ a month (sad
        story). Unfortunately I'm also a geek/fashion guy. I always think all
        the big impressive and great companies are assholes. Apple release new
        macbook pro 13 and I want it. Burberry's new arrivals are stunning and I
        want it. Well look at my pay bill and salary, fine nevermind. I can do
        these things: not travelling, not buying video games, not going out for
        dinner. But in the end, I have to eat. What if I can spend less on food,
        maybe I can save the money for what I want. I have only 100$/200$/300$
        or more a month. How can I survive? No. Not just survive! I want to eat
        healthy.
      </l1>
      <Bottombar />
    </Fragment>
  );
};

export default About;
