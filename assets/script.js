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
								<img class=picture src="assets/user_image.jpeg">
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
					const CLOSE_POPUP = createBtn("assets/btn.svg");
					const OPEN_POPUP = createBtn("assets/open_btn.svg");
					OPEN_POPUP.classList.add('hide')

					CLOSE_POPUP.addEventListener("click", function () {
						document.querySelector('.popup').classList.add('hide');
						CLOSE_POPUP.classList.add('hide');
						OPEN_POPUP.classList.remove('hide');
					});
					OPEN_POPUP.addEventListener("click", function () {
						document.querySelector('.popup').classList.remove('hide');
						CLOSE_POPUP.classList.remove('hide');
						OPEN_POPUP.classList.add('hide');
					});
					document.querySelector('.container').appendChild(createPopup());
					document.querySelector('.container').appendChild(CLOSE_POPUP);
					document.querySelector('.container').appendChild(OPEN_POPUP);
				});
			}).catch(function (err) {
				console.log('Fetch Error', err);
			});
});