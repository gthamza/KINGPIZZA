import React from 'react';
import './Aboutbody.css';

function Aboutbody() {
  return (
    <>
      <div className="about-section">
        <center><h1 className='title-about'>DEAR GUEST!</h1></center>
        <p className="about-shop">
          Welcome to “MACBURGER”. Thank you for choosing our establishment for a pleasant pastime. 
          We are always glad to see you as a guest – we invite you to try the dishes Eastern, European
          and Indo-Pakistani cuisine, prepared specially for to your individual order: each dish is 
          prepared from the moment of your order from fresh selected products.
        </p>
        <h1 className='rules'>Rules for visiting “MACBURGER”:</h1>
        <p className="rules-text">
          “MACBURGER” is a private establishment, and the administration may refuse to allow a guest to visit without explaining the reason. Please remember that any manifestation of aggression and inappropriate behavior, alcohol intoxication, which causes discomfort to other guests. Visitors and their personal belongings may be searched to ensure the safety of MACBURGER guests.
        </p>
        <p><strong>The following are not allowed into the cafe area:</strong></p>
        <ol>
          <li>Persons under 18 years of age, after 22:00, unaccompanied by adults;</li>
          <li>Persons under the influence of alcohol, drugs, and toxic substances;</li>
          <li>Behaving aggressively towards guests and/or cafe staff;</li>
          <li>Drinking alcoholic beverages near the entrance to “MACBURGER”;</li>
          <li>Suspected of using or distributing drugs;</li>
          <li>Suspected of committing illegal acts against other guests and staff or property of “MACBURGER”;</li>
        </ol>
        <div className="rukes">
        <p className="rules-text">
          If a guest(s) violates public order (behaves inappropriately towards other guests or employees of “MACBURGER”), the administration may take measures to remove guest(s) from the establishment, having previously calculated them. “MACBURGER” is not responsible for the safety of vehicles, loss of personal belongings, and values. In our “MACBURGER” and on its territory, a video surveillance system is installed for security purposes. Visitors to “MACBURGER” are responsible for compliance with law and order, rules, and conditions while in the cafe. While on the territory of “MACBURGER”, you agree to our terms and conditions and fully accept the above rules.
        </p>
        </div>
      </div>
    </>
  );
}

export default Aboutbody;
