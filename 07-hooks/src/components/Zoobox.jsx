import React from 'react';

const ZooBox = ({zooList}) => {

    return (
        <div className='bigbox'>
            <ul>
                {zooList.map(animal =>
                    <li key={animal.id}>
                        <span className='post-id'>{animal.id}.</span>
                        <span className='post-title'>{animal.name}</span>
                    </li>
                )}
            </ul>
        </div>
    )
    
}

export default ZooBox;