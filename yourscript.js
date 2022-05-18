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
						POPUP.classList.add('artem_test_popup');
						POPUP.innerHTML = `
							<div class="artem_test_header">
								<img class="artem_test_picture" src=${MESSAGE_DATA.image}>
								<div class="artem_test_title">
									<span class="artem_test_name">${MESSAGE_DATA.name}</span>
									<span class="artem_test_work">${MESSAGE_DATA.title}</span>
								</div>
							</div>
							<div class="artem_test_content">
								<img class="artem_test_vector_pict" src="https://svgshare.com/i/hU5.svg">
								<p>${MESSAGE_DATA.message}</p>
							</div>
						`;
						return POPUP;
					}
					function createBtn(img_src) {
						const POPUP_BTN = document.createElement('button');
						POPUP_BTN.classList.add('artem_test_btn');
						const POPUP_BTN_IMG = document.createElement('img');
						POPUP_BTN_IMG.src = img_src;
						POPUP_BTN_IMG.classList.add('artem_test_btn__picture');
						POPUP_BTN.append(POPUP_BTN_IMG);
						return POPUP_BTN;
					}
					const CLOSE_POPUP = createBtn("https://svgshare.com/i/hKK.svg");
					const CLOSE_POPUP_SEC = createBtn("https://svgshare.com/i/hLL.svg");
					CLOSE_POPUP_SEC.classList.add('artem_test_newbtn');
					const OPEN_POPUP = createBtn("https://svgshare.com/i/hLM.svg");
					OPEN_POPUP.classList.add('artem_test_hide');

					CLOSE_POPUP_SEC.addEventListener("click", function () {
						document.querySelector('.artem_test_popup').classList.add('artem_test_hide');
						CLOSE_POPUP.classList.add('artem_test_hide');
						CLOSE_POPUP_SEC.classList.add('artem_test_hide');
						OPEN_POPUP.classList.remove('artem_test_hide');
					});
					CLOSE_POPUP.addEventListener("click", function () {
						document.querySelector('.artem_test_popup').classList.add('artem_test_hide');
						CLOSE_POPUP.classList.add('artem_test_hide');
						CLOSE_POPUP_SEC.classList.add('artem_test_hide');
						OPEN_POPUP.classList.remove('artem_test_hide');
					});
					OPEN_POPUP.addEventListener("click", function () {
						document.querySelector('.artem_test_popup').classList.remove('artem_test_hide');
						CLOSE_POPUP.classList.remove('artem_test_hide');
						CLOSE_POPUP_SEC.classList.remove('artem_test_hide');
						OPEN_POPUP.classList.add('artem_test_hide');
					});
					document.querySelector('body').appendChild(createPopup());
					document.querySelector('body').appendChild(CLOSE_POPUP);
					document.querySelector('body').appendChild(OPEN_POPUP);
					document.querySelector('.artem_test_header').appendChild(CLOSE_POPUP_SEC);
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
				.artem_test_popup {
					position: fixed;
					bottom: 0;	
					right: 0;
					width: 240px;
					max-width: 100%;
					max-height: 100%;
					background-color: #fff;
					margin: 40px;
					border-radius: 4px;
				}
				
				.artem_test_hide {
					display: none;
				}
				
				.artem_test_picture {
					object-fit: cover;
					object-position: center;
					height: 35px;
					width: 35px;
					border-radius: 100px;
					margin: 0 2% 0 6%;
				}
				
				.artem_test_header {
					position: relative;
					display: flex;
					background-color: #f3f3f3;
					padding: 10px 7px;
					border-radius: 4px 4px 0px 0px;
				}
				
				.artem_test_name, .artem_test_work {
					display: block;
					font-family: "Arial";
				}
				
				.artem_test_name{
					font-size: 0.9em;
				}
				.artem_test_work{
					font-size: 0.68em;
					color: rgb(92, 92, 92);
				}
				
				.artem_test_title {
					margin-left: 5%;
					padding-top: 2px;
				}
				
				.artem_test_content {
					position: relative;
					padding: 7%;
					color: #646464;
					font-family: "Arial";
				}
				
				.artem_test_btn {
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
				
				.artem_test_btn__picture {
					width: 100%;
					height: 100%;
				}
				
				.artem_test_newbtn {
					position: absolute;
					top: 11px;
					background-color: transparent;
					right: 11px
				}

				.artem_test_vector_pict {
					position: absolute;
					width: 10%;
					top: -12px;
					left: 45px;
				}
				`;
				document.head.appendChild(style);
			}).catch(function (err) {
				console.log('Fetch Error', err);
			});
});

