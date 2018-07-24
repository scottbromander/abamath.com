import React from "react";

<meta>About page describing Who Abamath is as a company, What we do, and How to get involved.</meta>

export default ({ data }) =>
  <div>
    <h1>
      About 
    </h1>
    <h3>
      Who are you?
      </h3>
    <p>
    We are a group of highly energetic software developers, college 
    students, and engineers passionate about fostering the next 
    generation of problem solvers to be the super heroes of tomorrow.
    </p>
    <h3>
      What do you do?
      </h3>
      <p>
      We do for coding what little league does for baseball. 
      We run epic coding, video game, and website design classes through partnerships 
      with community education programs in Minnesota with all of 
      the excitement of a sport. 
    </p>
      <h3>
      I love working with kids and STEM! Can I help you?
      </h3>
      <p>
      Probably! Even when we don't have openings, we're always 
      looking to get in touch with potential future instructors for
       our coding classes! Tell us about yourself <a href="https://www.abamath.com/application">here</a>!
      </p>
      <h3>
      Why aren't you in my town yet?
      </h3>
      <p>
      We had to start somewhere. We're from the southwest metro, 
      so we started there. We're currently expanding like crazy 
      in Minnesota. If you want us in your town, get in touch and
       let us know!
        </p>
  </div>

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`