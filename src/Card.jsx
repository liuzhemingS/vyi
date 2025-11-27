import vsauce from './assets/vsauce.jpg';

function Card(){

    return(
        <div className="card">
            <img src={vsauce} alt="vsauce" className='img'  />
            <h2>Vsauce</h2>
            <p>I'm vsauce and I make videos about videos of videos about videos of videos in videos</p>
        </div>
    );
}

export default Card