let linkL = '';
	const funFileExist = (thelink) => {
        return new Promise((resolve, reject) => {
        const theImage = new Image();
        theImage.src = thelink;
        theImage.onload = () => {
            console.log(`File found: ${thelink}`);
            resolve(thelink);
        };
        theImage.onerror = () => {
            console.warn(`File not found: ${thelink}`);
            resolve("fileLetters/errorskull.png");
        };
    });

    };

	const funCounter = async (theletter) => {
	    const linkStart = "fileLetters/";
	    let numberCount = 0;
	    const maxAttempts = 100;

	    for (let i = 0; i < maxAttempts; i++) {
	        const link = linkStart.concat(theletter, i, ".png");
	        const fileExists = await funFileExist(link); // Wait for the check
	        if (fileExists === "fileLetters/errorskull.png") {
	            break; // Stop counting when no more files are found
	        }
	        numberCount++;
	    }

	    return numberCount; // Total valid images
	};


	const funRandPic = async (theLett) => {	
		if (theLett == " ") {
			return "fileLetters/empty.png";
		} 
		else {
			const linkStart = "fileLetters/";
			const maxCount = await funCounter(theLett);

			if (maxCount === 0) {
                console.warn(`No images found for '${theLett}'. Using empty.png.`);
                return "fileLetters/errorskull.png";
            }

			const randNumber = Math.floor(Math.random() * maxCount);
			const linkL2 = linkStart.concat(theLett, randNumber,".png");
			console.log(`Random file chosen for '${theLett}': ${linkL2}`);
			return funFileExist(linkL2);
		}
		
	}

	const funCombine = async () => {
		const cstText = document.querySelector('#textIn').value;
		const contLet = document.querySelector('#contLet');
		contLet.innerHTML = '';


		for(let i=0; i<cstText.length; i++) {
			const character = cstText.charAt(i).toLowerCase();
			const imgSrc = await funRandPic(character);
			
			const cstLetter = document.createElement('img');
			cstLetter.src = imgSrc;
			cstLetter.style.height = "100px";
    		cstLetter.style.width = "auto";
			contLet.appendChild(cstLetter);

			await new Promise(resolve => setTimeout(resolve, 10));
		}	
	}
	document.querySelector('#convBtn').addEventListener('click', funCombine);
	document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                funCombine();
            }
        });      