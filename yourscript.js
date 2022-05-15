document.addEventListener("DOMContentLoaded", function () {

	fetch('https://dev.nexusmedia-ua.com/devtest/')
		.then(
			function (response) {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' +
						response.status);
					return;
				}
				response.json().then(function (data) {
					const MESSAGE_DATA = data.messages[0];
					function createPopup() {
						const POPUP = document.createElement('div');
						POPUP.classList.add('popup');
						POPUP.innerHTML = `
							<div class="header">
								<img class="picture" src=${MESSAGE_DATA.image}>
								<div class="title">
									<span class="name">${MESSAGE_DATA.name}</span>
									<span class="work">${MESSAGE_DATA.title}</span>
								</div>
							</div>
							<div class="content">
								<p>${MESSAGE_DATA.message}</p>
							</div>
						`;
						return POPUP;
					}
					function createBtn(img_src) {
						const POPUP_BTN = document.createElement('button');
						POPUP_BTN.classList.add('btn');
						const POPUP_BTN_IMG = document.createElement('img');
						POPUP_BTN_IMG.src = img_src;
						POPUP_BTN_IMG.classList.add('btn__picture');
						POPUP_BTN.append(POPUP_BTN_IMG);
						return POPUP_BTN;
					}
					const CLOSE_POPUP = createBtn("https://svgshare.com/i/hKK.svg");
					const CLOSE_POPUP_SEC = createBtn("https://svgshare.com/i/hLL.svg");
					CLOSE_POPUP_SEC.classList.add('newbtn');
					const OPEN_POPUP = createBtn("https://svgshare.com/i/hLM.svg");
					OPEN_POPUP.classList.add('hide')

					CLOSE_POPUP_SEC.addEventListener("click", function () {
						document.querySelector('.popup').classList.add('hide');
						CLOSE_POPUP.classList.add('hide');
						CLOSE_POPUP_SEC.classList.add('hide');
						OPEN_POPUP.classList.remove('hide');
					});
					CLOSE_POPUP.addEventListener("click", function () {
						document.querySelector('.popup').classList.add('hide');
						CLOSE_POPUP.classList.add('hide');
						CLOSE_POPUP_SEC.classList.add('hide');
						OPEN_POPUP.classList.remove('hide');
					});
					OPEN_POPUP.addEventListener("click", function () {
						document.querySelector('.popup').classList.remove('hide');
						CLOSE_POPUP.classList.remove('hide');
						CLOSE_POPUP_SEC.classList.remove('hide');
						OPEN_POPUP.classList.add('hide');
					});
					document.querySelector('body').appendChild(createPopup());
					document.querySelector('body').appendChild(CLOSE_POPUP);
					document.querySelector('body').appendChild(OPEN_POPUP);
					document.querySelector('.header').appendChild(CLOSE_POPUP_SEC);
				});
				const style = document.createElement('style');

				style.textContent = `
				*{
					margin: 0;
					padding: 0;
					box-sizing: border-box;
				}
				
				body {
					background-color: rgba(0, 0, 0, 0.8);
					width: 100%;
					height: 100vh;
					max-width: 1100px;
					margin: 0 auto;
				}

				.popup {
					position: fixed;
					bottom: 0;	
					right: 0;
					width: 240px;
					max-width: 100%;
					max-height: 100%;
					background-color: #fff;
					margin: 40px;
				}
				
				.hide {
					display: none;
				}
				
				.picture {
					object-fit: cover;
					object-position: center;
					height: 35px;
					width: 35px;
					border-radius: 100px;
					margin: 0 2% 0 6%;
				}
				
				.header {
					display: flex;
					background-color: #f3f3f3;
					padding: 10px 7px;
				}
				
				.name, .work {
					display: block;
				}
				
				.name{
					font-size: 0.94em;
				}
				.work{
					font-size: 0.7em;
					color: rgb(92, 92, 92);
				}
				
				.title {
					margin-left: 5%;
					padding-top: 2px;
				}
				
				.content {
					padding: 7%;
					color: #646464;
				}
				
				
				.btn {
					position: fixed;
					bottom: 25px;
					right: 25px;
					width: 30px;
					height: 30px;
					border: none;
					background-color: transparent;
					background: #00aaf4;
					border-radius: 50%;
					padding: 8px;
				}
				
				
				.btn__picture {
					width: 100%;
					height: 100%;
				}
				
				.newbtn {
					position: relative;
					top: 2px;
					background-color: transparent;
					right: -53px;
				}
				`;
				document.head.appendChild(style);
			}).catch(function (err) {
				console.log('Fetch Error', err);
			});
});