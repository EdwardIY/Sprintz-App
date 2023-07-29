import { useState } from 'react'
const motivationalQuotes = [
  { description: "Difficulties strengthen the mind.", author: "Seneca" },
  { description: "Virtue leads to a tranquil mind.", author: "Seneca" },
  { description: "Strength comes from overcoming adversity.", author: "Seneca" },
  { description: "Success is living in accordance with nature.", author: "Seneca" },
  { description: "Worry only about what's within your power.", author: "Epictetus" },
  { description: "Strive for excellence in all endeavors.", author: "Seneca" },
  { description: "Strive for virtue in all your actions.", author: "Marcus Aurelius" },
  { description: "You have the strength to endure.", author: "Marcus Aurelius" },
  { description: "Success lies in consistent effort.", author: "Unknown" },
  { description: "Seek wisdom, find tranquility.", author: "Unknown" },
  { description: "Every adversity carries with it the seed of equal or greater benefit.", author: "Napoleon Hill" },
  { description: "Your potential is endless. Go forth and achieve.", author: "Unknown" },
  { description: "Rome was not built in a day.", author: "Unknown" },
  { description: "Focus, follow one course until successful.", author: "Unknown" },
  { description: "Work hard, work smart.", author: "Unknown" },
  { description: "The harder I work, the luckier I get.", author: "Unknown" },
  { description: "The path to success is to take massive, determined action.", author: "Tony Robbins" },
  { description: "There is no substitute for hard work.", author: "Thomas Edison" },
  { description: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { description: "The future belongs to the competent.", author: "Robert Greene" },
  { description: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { description: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt" },
  { description: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { description: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { description: "Nothing will work unless you do.", author: "Maya Angelou" },
  { description: "Without hard work, nothing grows but weeds.", author: "Gordon B. Hinckley" },
  { description: "Success is not for the chosen few, but for the few who choose it.", author: "Unknown" },
  { description: "If you can dream it, you can do it.", author: "Walt Disney" },
  { description: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { description: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
  { description: "The difference between ordinary and extraordinary is that little extra.", author: "Jimmy Johnson" },
  { description: "There are no shortcuts to any place worth going.", author: "Beverly Sills" },
  { description: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { description: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
  { description: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
  { description: "Perseverance is failing 19 times and succeeding the 20th.", author: "Julie Andrews" },
  { description: "If you want to achieve greatness stop asking for permission.", author: "Anonymous" },
  { description: "Don't wait. The time will never be just right.", author: "Napoleon Hill" },
  { description: "It does not matter how slowly you go, as long as you do not stop.", author: "Confucius" },
  { description: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { description: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { description: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
]


export default function Agenda() {
  const[quote,setQuote] = useState( Math.floor(Math.random() * 42))

    return (
      <section className='Agenda'>
        <h1 className='Agenda__Quote'> {motivationalQuotes[quote].description}
          <span className="Agenda__Quote__Author">- {motivationalQuotes[quote].author}</span>
        </h1>
        <p className='Agenda__Tasks'> You have 3 task(s), 12 group task(s) and 4 sprint(z) remaining!</p>
      </section>
    )
  }