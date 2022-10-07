import React from 'react';
import Room from "./Room";

const RoomsList = ({rooms}) => {
    if (rooms.length === 0) {
        return <div className='empty-search'>Unfortunately, there are no rooms matched your search parameters</div>
    }
    return (

        <section className='roomslist'>
            <div className="roomslist-center">
                {
                    rooms.map(item => {
                        return <Room key={item.id} room={item} />
                    })
                }
            </div>
        </section>
    );
};

export default RoomsList;
