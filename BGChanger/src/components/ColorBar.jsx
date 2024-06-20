import React from 'react';
import { useState } from 'react';

function ColorBar(props) {

  let [color, setColor] = useState('#374151')

  return (

    <div className="inline-flex rounded-3xl shadow-sm border border-black-200 rounded-s-lg px-3" style={{backgroundColor: color}} role="group">

      <button id="red" type="button" onClick={() => setColor("red")} className="px-4 py-2 text-sm font-medium text-gray-900 bg-bubble-gum border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white mb-2 mr-2 mt-2">
        Red
      </button>
      <button id="green" type="button" style={{ backgroundColor: "green" }} onClick={() => setColor("green")} className="px-4 py-2 text-sm font-medium text-gray-900 bg-green border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white mb-2 mr-2 mt-2">
        Green
      </button>
      <button id="blue" type="button" style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")} className="px-4 py-2 text-sm font-medium text-gray-900 bg-blue border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white mb-2 mr-2 mt-2">
        Blue
      </button>
      <button id="yellow" type="button" style={{ backgroundColor: "yellow" }} onClick={() => setColor("green")} className="px-4 py-2 text-sm font-medium text-gray-900 bg-yellow border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white mb-2 mr-2 mt-2">
        Yellow
      </button>
      <button id="gray" type="button" style={{ backgroundColor: "gray" }} onClick={() => setColor("gray")} className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white mb-2 mr-2 mt-2">
        Gray
      </button>
      <button id="pink" type="button" style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")} className="px-4 py-2 text-sm font-medium text-gray-900 bg-pink border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white mb-2 mr-2 mt-2">
        Pink
      </button>
      <button id="lavender" type="button" style={{ backgroundColor: "lavender" }} onClick={() => setColor("lavender")} className="px-4 py-2 text-sm font-medium text-gray-900 bg-lavender border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white mb-2 mr-2 mt-2">
        Lavender
      </button>
      <button id="purple" type="button" style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")} className="px-4 py-2 text-sm font-medium text-gray-900 bg-purple border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white mb-2 mr-2 mt-2">
        Purple
      </button>
    </div>


  );
}

export default ColorBar;