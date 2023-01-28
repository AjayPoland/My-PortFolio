import React from "react";

//styling bootstrap css.
import "bootstrap/dist/css/bootstrap.min.css";

import '../css/welcome.css';
function Welcome() {
  return (
    <>
      <div className='mx-5'>
        <header>
          <h1>Hi!</h1>
        </header>
        <main>
          <p>I am here to present myself as a software developer. I
            Prefer to work mostly in the front-end designinng although have a
            knowledge of back-end programming.
          </p>
          <p>
            Nowadays, the IT world is changing drastically, by the empact of new
            teachnology, to fullfill the demands of modern world requirement.
          </p>
          <p>
            I also want to contribute my skills in this sector and be the part
            of those teams who all are adding the huge value to the IT industry!
          </p>
          ThankYou.
        </main>
      </div>
    </>
  );
}

export default Welcome;
