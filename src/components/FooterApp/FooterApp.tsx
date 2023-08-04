import React from 'react'

const FooterApp = () => {
  return (
    <div className="footer mt-20 px-10 bg-prim-color text-second-color p-5">
      <ul className="footer-content grid grid-cols-grid-260 gap-7">
        <li>
          <h3>sponsors</h3>
          <p>Cisco - Amazon - Google -Azure - LinkedIn  <br />
          IBM -Facebook -Tesla - Appel -Microsoft <br />
          Ofppt - 1337  
          </p>
        </li>
        <li>
          <p>
          A Fawectt book <br />
          Published by The Random House Publishing Group <br />
          Copyright © 2023 by Ahmed Samy <br />
          All rights reserved 
          </p>
        </li>
      </ul>
    </div>
  )
}

export default FooterApp;