import './styles.css'
import { useState, useEffect } from 'react'

export default function app() {
  const [flashCard, setFlashCard] = useState({
    question: 'React nedir?',
    choices: ["JavaScript framework'ü", 'JavaScript kütüphanesi'],
    answer: 'JavaScript kütüphanesi.',
    explanation: `Birinin framework diyebilme cüretini gösterdiğini duyarsanız, onu mümkün olduğunca bilgili bir şekilde düzeltmeniz, tercihen yanıtınıza " aslında..." diye başlamanız önemlidir.`,
  })

  const [click, setClick] = useState(true)

  useEffect(() => {
    document.addEventListener('click', () => setClick(!click))

    return () => document.removeEventListener('click', () => setClick(!click))
  }, [click])

  /* Challenge: 

    Flashcard'ın ileri geri çevrilmesi gerekiyor. Göreviniz bunu aşağıdaki gibi ayarlamaktır: 
    
        1. Kullanıcı Flashcard'a tıkladığında, 32. satırda className'i "flash-card" olan div'e "flipped" CSS class'ı eklenmelidir. 
           
        2. Kullanıcı Flashcard'a tekrar tıklarsa, "flipped" class'ı div'den kaldırılmalıdır. 
           
        3. Aynı kalıp sonraki tıklamalar için de tekrarlanmalıdır, böylece kullanıcı kartı istediği kadar ileri geri çevirmeye devam edebilir. 
*/

  return (
    <div>
      <header>
        <img src="./images/react.svg" />
        <h1> React Çalışma Arkadaşlarım </h1>
      </header>

      <div className={click ? 'flash-card flipped' : 'flash-card'}>
        <div className="flash-card-inner">
          <div className="flash-card-front">
            <p className="question">{flashCard.question}</p>
            <ol type="a">
              {flashCard.choices.map((choice) => (
                <li key={crypto.randomUUID()}>{choice}</li>
              ))}
            </ol>
          </div>
          <div className="flash-card-back">
            <p className="answer">{flashCard.answer}</p>
            <p>{flashCard.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
