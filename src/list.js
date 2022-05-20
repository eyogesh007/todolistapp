import react from 'react'

function List(prop){
  return(
    <div>
    <h3>
    {prop.title}
    </h3>
    <p>{prop.task}</p>
    </div>
  )
}

export default List;
