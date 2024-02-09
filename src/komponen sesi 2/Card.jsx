import ProfilePict from '../assets/naruto-dattebayo.jpg'

export default function Card(){
    return(
        <div className="card">
            <img className='card-image' src={ProfilePict} alt="profile pict"></img>
            <h2 className='card-title'>Mr.Kim Code</h2>
            <p className='card-text'>I want to be a frontend react developer</p>
        </div>
    )
}