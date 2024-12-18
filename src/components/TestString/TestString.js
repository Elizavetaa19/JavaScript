import React from 'react';
import { greetingUser } from '../../App';


function TestString()
{
   return(
      <h1>{greetingUser('Liza')}</h1>
   );
}

export default TestString;
