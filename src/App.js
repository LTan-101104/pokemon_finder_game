import { useEffect, useState } from 'react';
import './App.css';
import shuffle from './utilities/shuffle';
import Card from './components/Card';




function App() {
  const [cards, setCard] = useState(shuffle)
  const [pickOne, setPickOne] = useState(null); // First selection
  const [pickTwo, setPickTwo] = useState(null); // Second selection
  const [disabled, setDisabled] = useState(false); // Delay handler
  const [wins, setWins] = useState(0); // Win streak

  const handleClick = (card) => {
    if (!disabled) {
      pickOne ? setPickTwo(card) : setPickOne(card)
    }
  }

  const handleTurn = () => {
    setPickOne(null);
    setPickTwo(null);
    setDisabled(false)
  }

  useEffect(() => {
    //logic to handle when choosing card
    let pickTimer;
    //!both cards are chosen
    if (pickOne && pickTwo) {
      //if both choice matches
      if (pickOne.image === pickTwo.image) {
        setCard((cardsSet) => {
          return cardsSet.map(card => {
            if (card.image !== pickOne.image) return card; //do not do anything if cards are not 2 of the above
            return { ...card, matched: true }
          })
        })
        handleTurn();
      }

      else {
        setDisabled(true)
        pickTimer = setTimeout(() => {
          handleTurn()
        }, 1000);
      }
    }

    return () => clearTimeout(pickTimer);
  }, [cards, pickOne, pickTwo])

  //If players found all matches
  useEffect(() => {
    const checkUnmatched = cards.filter(card => !card.matched)

    if (checkUnmatched.length === 0 && cards.length) {
      console.log("You win")
      setWins(wins + 1)
      handleTurn()
      setCard(shuffle)
    }



  }, [cards, wins])


  return (
    <div className='grid'>
      {cards.map(card => {
        const { id, image, matched } = card

        return <Card key={id}
          image={image}
          //!interesting, if I change the below into pickOne?.image === card.image || pickTwo?.image === card.image || matched, then everytime I pressed
          selected={pickOne === card || pickTwo === card || matched}
          onClick={() => handleClick(card)} />

      })}


    </div>
  );
}

export default App;
