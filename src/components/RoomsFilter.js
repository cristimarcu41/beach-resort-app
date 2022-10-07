import React from 'react';
import {useContext} from 'react'
import {RoomContext} from "../context";
import Title from '../components/Title';
// get all unique values
const getUnique = (items, value) => [...new Set(items.map(item => item[value]))];

const RoomsFilter = ({rooms}) => {
    const context = useContext(RoomContext)
    const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context;
    // get unique types
    let types = ['all', ...getUnique(rooms, 'type')];
    // get unique capacities
    let capacities = [...getUnique(rooms, 'capacity')]

    return (
        <section className='filter-container'>
            <Title title='search rooms'/>
            <form className='filter-form'>
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className='form-control ' onChange={handleChange}>
                        {types.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                </div>
                {/*end of select type*/}
                {/*select capacity*/}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className='form-control'
                            onChange={handleChange}>
                        {capacities.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                </div>
                {/*end select capacity*/}
                {/*room price*/}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input min={minPrice} max={maxPrice} name="price" value={price} onChange={handleChange}
                           className='w-100' type="range"/>
                </div>
                {/*end of room price*/}
                {/*size*/}
                <div className="form-group">
                    <label htmlFor="size">Room size</label>
                    <div className="">
                        <input type="number" name="minSize" id="size" value={minSize} className='size-input'
                               onChange={handleChange}/>
                        <input type="number" name="maxSize" id="maxSize" value={maxSize} className='size-input'
                               onChange={handleChange}/>
                    </div>
                </div>
                {/* end of size*/}
                {/*extras*/}
                <div className="form-group d-flex align-items-end">
                    <div className="single-extra">
                        <input type="checkbox" checked={breakfast} name="breakfast" onChange={handleChange} id="breakfast"/>
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" checked={pets} name="pets" onChange={handleChange} id="pets"/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/*end of extras*/}

            </form>
        </section>
    );
};

export default RoomsFilter;
