import React from 'react';

function Aboutbody() {
  return (
    <div className='About-section'>
      <h2 className="heading h2-sm">DEAR GUEST!</h2>
      <p className='text'>
        Welcome to “MACBURGER”. Thank you for choosing our establishment for a pleasant pastime. We are always glad to see you as a guest – we invite you to try the dishes Eastern, European and Indo-Pakistani cuisine, prepared specially for your individual order: each dish is prepared from the moment of your order from fresh selected products.
      </p>

      <h3 className="subheading">RULES FOR VISITING “MACBURGER”:</h3>
      <p className='text2'>
        “MACBURGER” is a private establishment, and the administration may refuse to allow a guest to visit without explaining the reason. Please remember that any manifestation of aggression and inappropriate behavior, alcohol intoxication, which causes discomfort to other guests. Visitors and their personal belongings may be searched to ensure the safety of MACBURGER guests.
      </p>

      <p className='text'>
        The following are not allowed into the cafe area:
      </p>
      <ul className='rules-list'>
        <li>Persons under 18 years of age, after 22:00, unaccompanied by adults;</li>
        <li>Persons under the influence of alcohol, drugs, and toxic substances;</li>
        <li>Behaving aggressively towards guests and/or cafe staff;</li>
        <li>Drinking alcoholic beverages near the entrance to “MACBURGER”;</li>
        <li>Suspected of using or distributing drugs.</li>
      </ul>
    </div>
  );
}

export default Aboutbody;
