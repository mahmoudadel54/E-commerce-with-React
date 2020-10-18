import React from 'react';

const Filter = (props) => {
    const { typesCategories, onClickFilter,activeFilter } = props
    return (
        <ul className="list-group filter">
            <li key={0} className={activeFilter===0?"list-group-item active":"list-group-item" } onClick={()=>onClickFilter(0)}>
                All
            </li>
            {typesCategories.map(type =>
                <li key={type.id} className={activeFilter===type.id?"list-group-item active":"list-group-item"} 
                onClick={()=>onClickFilter(type.id)}>
                    {type.name}
                </li>
            )
            }
        </ul>
    );
}

export default Filter;