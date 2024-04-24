import { formatDistanceToNow, formatRelative } from 'date-fns'
import Item from './cartitem';
import { useState } from 'react';
function Singleorder(props) {
    const [item,setitems]=useState(false)
    const test=()=>{
        setitems(!item)
    }
    return ( 
        <div className="flex justify-center items-center mb-4">
  <div className="w-[65%] p-6 bg-yellow-200 border-yellow-300 rounded-lg shadow-md dark:bg-yellow-800 dark:border-yellow-600">
    <div className="flex flex-wrap justify-between">
      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{formatRelative(new Date(props.data.createdAt), new Date(), { addSuffix: true })}</h5>
      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Order Total: Rs {props.data.total}</h5>
    </div>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{formatDistanceToNow(new Date(props.data.createdAt), { addSuffix: true })}</p>
    {item ? (
      <div className="grid grid-flow-row gap-4 items-center" onClick={test}>
        {props.data.products.map((t) => (
          <Item key={t.product} id={t.product} quan={t.quantity} />
        ))}
      </div>
    ) : (
      <button onClick={test} className="text-white bg-red-600 hover:bg-red-700 focus:ring-red-300 font-medium rounded-lg p-2 text-center dark:bg-red-600 dark:hover:bg-red-700">
        Show items
      </button>
    )}
  </div>
</div>
     );
}

export default Singleorder;