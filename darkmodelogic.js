const cstLghtModeBtn = document.querySelector('#lghtModeBtn');
	cstLghtModeBtn.innerHTML=`
		Dark Mode
	`;
	let currMode = 0;

	const funLghtMode = () => {
		if(currMode==0){
			const head  = document.querySelector('head');
		    const linkCss  = document.querySelector('#cssId');
		    linkCss.href = 'darkmode.css';
		    head.appendChild(linkCss);
		    cstLghtModeBtn.innerHTML=`Light Mode`;

			currMode=1;
		} else {
			const head  = document.querySelector('head');
		    const linkCss  = document.querySelector('#cssId');
		    linkCss.href = 'lightmode.css';
		    head.appendChild(linkCss);
		    cstLghtModeBtn.innerHTML=`Dark Mode`;

			currMode=0;
		}
	}

	cstLghtModeBtn.addEventListener('click', funLghtMode);