import React, {Component} from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import {RoomContext} from "../context";
import StyledHero from "../components/StyledHero";
import {Carousel} from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
        this.state = {slug: this.props.match.params.slug, defaultBcg}
    }

    static contextType = RoomContext;

    // componentDidMount() { }

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)
        console.log(room)
        if (!room) {
            return <div className="error ">
                <h3>No such room could be found</h3>
                <Link to='/rooms' className='btn-primary'> Back to rooms</Link>
            </div>
        }
        const {name, description, shortDescription, capacity, size, price, extras, breakfast, pets, images} = room;
        const [mainImg, ...otherImages] = images;
        return <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                        Back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    <Carousel>
                        {otherImages.map((image) => {
                            console.log(image)
                            return <div key={image}>
                                <img src={image} className='img-fluid'/>
                                <p className="legend">{shortDescription}</p>
                            </div>
                        })}
                    </Carousel>
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>● price: ${price}</h6>
                        <h6>● size: ${size} sqft</h6>
                        <h6>● Max Capacity: {
                            capacity > 1 ? `${capacity} people` : `${capacity} person`
                        } </h6>
                        <h6>{pets ? '● pets allowed ' : '● no pets allowed ⛔'}</h6>
                        <h6>{breakfast && '● Free breakfast included'}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item, index) => <li key={index}> ▶ {item}</li>)}
                </ul>

            </section>
        </>
    }
}
