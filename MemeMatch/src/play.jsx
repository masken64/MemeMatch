import i1 from './assets/cards/1.png';
import i2 from './assets/cards/2.png';
import i3 from './assets/cards/3.png';
import i4 from './assets/cards/4.png';
import i5 from './assets/cards/5.png';
import i6 from './assets/cards/6.png';
import i7 from './assets/cards/7.png';
import i8 from './assets/cards/8.png';
import i9 from './assets/cards/9.png';
import i10 from './assets/cards/10.png';
import i11 from './assets/cards/11.png';
import i12 from './assets/cards/12.png';
import i13 from './assets/cards/13.png';
import { useEffect, useState } from 'react';


export default function Play(){
    const images = [
        { id: 1, src: i1 },
        { id: 2, src: i2 },
        { id: 3, src: i3 },
        { id: 4, src: i4 },
        { id: 5, src: i5 },
        { id: 6, src: i6 },
        { id: 7, src: i7 },
        { id: 8, src: i8 },
        { id: 9, src: i9 },
        { id: 10, src: i10 },
        { id: 11, src: i11 },
        { id: 12, src: i12 },
        { id: 13, src: i13 }
      ];
    const [score, setScore] = useState(0);
    const [cards, setCards] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [game, setGame] = useState(false);
    useEffect(()=>{
        startGame();
    },[]);
    const startGame = () =>{
        const shuffledImages = shuffleArray(images);
        const selectedCards = shuffledImages.slice(0,4);
        setCards(selectedCards);
    };


    function shuffleArray(array){
        for(let i = array.length -1; i>0;i--){
            const j = Math.floor(Math.random()*(i+1));
            [array[i],array[j]] = [array[j],array[i]];
        }
        return array;
    }

    function handleCardClick(id){
        if(selectedImages.includes(id)){
            gameOver();
            console.log('over');
        } else {
            setScore(score+1);
            setSelectedImages([...selectedImages,id]);
            startGame();
        }
    }

    function gameOver(){
        setGame(true);
    }

    function restartGame(){
        setScore(0);
        setSelectedImages([]);
        setGame(false);
        startGame();
    }


      return(
        <div className='playArea'>
            {game ? (
                <div className='overcont'>
                    <div className='over'>Game Over!</div>
                    <button className='restart' onClick={restartGame}>Restart</button>
                </div>
            ) : (
                <>
                    <div className='playcont'>
                    <div className='playArea'>
                        {cards.map((card) => (
                            <div key={card.id} className='card' onClick={() => handleCardClick(card.id)}>
                                <img src={card.src} className='cardimg' alt={`Card ${card.id}`} />
                            </div>
                            
                        ))}
                    </div>
                    <div className='score'>Score: {score}</div>
                    </div>
                </>
            )}
        </div>
    );
}