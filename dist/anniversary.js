const reasons = [
'For making home a feeling, not just a place.',
'For the love that makes ordinary days feel special.',
'For showing us what it means to stand beside someone.',
'For a kind of care that words can never quite capture.',
'For all the little things that mean everything.',
'For giving us two favourite people to look up to.',
'For the warmth we carry with us, wherever we go.',
'For a togetherness worth celebrating every day.',
'For the comfort of knowing we belong.',
'For a love that feels steady in a changing world.',
'For every reason you have given me to smile.',
'For the beautiful family we get to call ours.',
'For teaching us that love is something you do.',
'For the way your happiness becomes our happiness.',
'For all the care we noticed, and all the care I didn’t.',
'For making the word “home” so full of meaning.',
'For the little joys that become our biggest treasures.',
'For the gift of being your children.',
'For reminding us how much the everyday moments matter.',
'For a story we are so grateful to be part of.',
'For the love behind a thousand small gestures.',
'For giving us so much to be thankful for.',
'For showing that growing together is something beautiful.',
'For the memories we will always hold close.',
'For twenty-six years of choosing each other.',
'For being you. Our Mom. Our Dad. Our forever favourites.'
];
let reasonIndex = 0;
document.querySelector('#next-reason').addEventListener('click', () => {
 reasonIndex = (reasonIndex + 1) % reasons.length;
 document.querySelector('#reason-text').textContent = reasons[reasonIndex];
 document.querySelector('#reason-counter').textContent = `${String(reasonIndex + 1).padStart(2, '0')} / 26`;
});
const letter = document.querySelector('#letter-dialog');
const closeLetter = () => { letter.close(); };
document.querySelector('#open-letter').addEventListener('click', () => { letter.showModal(); document.body.classList.add('modal-open'); });
letter.querySelector('.close').addEventListener('click', closeLetter);
letter.addEventListener('close', () => document.body.classList.remove('modal-open'));
letter.addEventListener('click', event => { const bounds = letter.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeLetter(); });
let celebrationTimer;
document.querySelector('#celebrate').addEventListener('click', () => {
 document.querySelector('#celebration-status').textContent = 'Happy 26th anniversary! You two are so loved. ♡';
 const field = document.querySelector('#confetti');
 clearTimeout(celebrationTimer); field.replaceChildren();
 if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
 for(let i = 0; i < 75; i++) {
  const piece = document.createElement('span'); piece.className = 'confetti-piece'; piece.textContent = ['♥','✦','✧','●'][i % 4];
  piece.style.cssText = `--left:${Math.random()*100}%;--duration:${3+Math.random()*3}s;--size:${10+Math.random()*15}px;--color:${['#e6c18c','#b55a73','#f3d7a9','#d5969e'][i%4]};--drift:${Math.random()*240-120}px;animation-delay:${Math.random()*.6}s`;
  field.append(piece);
 }
 celebrationTimer = setTimeout(() => field.replaceChildren(), 7000);
});
const progress = document.querySelector('.progress');
function updateProgress() { const height = document.documentElement.scrollHeight - window.innerHeight; progress.style.width = `${height > 0 ? window.scrollY / height * 100 : 0}%`; }
window.addEventListener('scroll', updateProgress, {passive:true}); window.addEventListener('resize', updateProgress); updateProgress();
