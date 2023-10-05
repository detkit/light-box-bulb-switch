const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const sound = document.getElementById('audio');

btn.onclick = () => {
	body.classList.toggle('on');
	sound.play();
};
