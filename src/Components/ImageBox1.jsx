// import thala1 from '../image/thala1.gif';
// import thala2 from '../image/thala2.gif';
import thala3 from '../image/thala3.gif';
// import thala4 from '../image/thala4.gif';
import bolejokoyal from '../audio/bolejokoyal.mp3';

function ImageBox1(){
    return(
    <div className='imageBox1' style={{backgroundImage: `url(${thala3})`}}>
    <audio id='songBolejo' loop>
    <source src={bolejokoyal} type="audio/mpeg" />
    Your browser does not support the audio element.
    </audio>
</div>
    );
}

export default ImageBox1;