
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Oswald:wght@600;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);


const popupKey = 'motivationalPopupShown_' + window.location.href;

if (sessionStorage.getItem(popupKey)) {
  console.log('[Motivational Popup] Already shown for this URL');
} else {
  console.log('[Motivational Popup] Showing popup for first time on this URL');
  sessionStorage.setItem(popupKey, 'true');


  const popup = document.createElement('div');
  popup.id = 'motivational-popup';

  
  Object.assign(popup.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '400px',
    borderRadius: '22px',
    border: '1.5px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.9), 0 0 15px rgba(102, 51, 153, 0.7)', 
    padding: '35px 40px',
    fontFamily: "'Oswald', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#fff',
    zIndex: '999999',
    userSelect: 'none',
    cursor: 'default',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    animation: 'fadeInScale 0.5s ease forwards, bounce 2.5s ease-in-out 1s infinite',
    background: 'linear-gradient(270deg, #5f2c82, #49a09d, #5f2c82)', // purple-teal-purple gradient
    backgroundSize: '600% 600%',
    animationFillMode: 'forwards',
  });

  
  const emoji = document.createElement('div');
  emoji.textContent = '💪🔥';
  emoji.style.fontSize = '3rem';
  emoji.style.marginBottom = '15px';
  popup.appendChild(emoji);

 
  const quoteText = document.createElement('div');
  quoteText.id = 'motivational-quote';
  Object.assign(quoteText.style, {
    fontSize: '2.1rem',
    fontWeight: '900',
    marginBottom: '25px',
    lineHeight: '1.3',
    letterSpacing: '0.02em',
    userSelect: 'text',
    WebkitFontSmoothing: 'antialiased',
    fontSmooth: 'always',
    transform: 'translateZ(0)',
    filter: 'blur(1.8px)',
    opacity: '0.8',
    cursor: 'pointer',
    transition: 'filter 0.3s ease, opacity 0.3s ease',
  });

  
  const quotes = [
    "Push yourself because no one else is going to do it for you.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Your body can stand almost anything. It’s your mind that you have to convince.",
  "Success starts with self-discipline.",
  "Every step counts. Keep moving forward.",
  "You miss 100% of the shots you don’t take.",
  "Dream it. Wish it. Do it.",
  "Great things never come from comfort zones.",
  "Stay positive. Work hard. Make it happen.",
  "Believe you can and you're halfway there.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to focus on goals, not obstacles.",
  "Small progress is still progress.",
  "Success doesn’t come to you, you go to it.",
  "Don’t limit your challenges. Challenge your limits.",
  "The best time for new beginnings is now.",
  "Your limitation—it’s only your imagination.",
  "Work hard in silence. Let success make the noise."
  ];
  
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
  popup.appendChild(quoteText);

  
  quoteText.addEventListener('mouseenter', () => {
    quoteText.style.filter = 'blur(0)';
    quoteText.style.opacity = '1';
  });
  quoteText.addEventListener('mouseleave', () => {
    quoteText.style.filter = 'blur(1.8px)';
    quoteText.style.opacity = '0.8';
  });

  
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.setAttribute('aria-label', 'Close motivational popup');
  Object.assign(closeBtn.style, {
    background: 'rgba(255, 255, 255, 0.15)',
    border: 'none',
    color: '#fff',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    cursor: 'pointer',
    position: 'absolute',
    top: '15px',
    right: '15px',
    transition: 'background 0.3s ease',
    boxShadow: '0 2px 10px rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '1',
  });
  closeBtn.addEventListener('mouseenter', () => {
    closeBtn.style.background = 'rgba(255, 255, 255, 0.4)';
  });
  closeBtn.addEventListener('mouseleave', () => {
    closeBtn.style.background = 'rgba(255, 255, 255, 0.15)';
  });
  closeBtn.addEventListener('click', () => {
    popup.remove();
  });
  popup.appendChild(closeBtn);

  
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.textContent = `
    @keyframes fadeInScale {
      0% {
        opacity: 0;
        transform: scale(0.85);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
      40% {transform: translateY(-10px);}
      60% {transform: translateY(-5px);}
    }
    @keyframes gradientShift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `;
  document.head.appendChild(styleSheet);

  
  popup.style.animation += ', gradientShift 15s ease infinite';

  
  document.body.appendChild(popup);
}
