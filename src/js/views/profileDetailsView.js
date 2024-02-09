import View from './View';
import uploadIcon from '../../assets/images/icon-upload-image.svg';

class ProfileDetails extends View {
  _appContent = document.querySelector('#app__content');
  _containerApp = document.querySelector('.container-app');

  addHandlerInputs() {
    this._parentEl.addEventListener('keyup', function (e) {
      const firstNameMokup = document.querySelector(
        '.phone__mokup--first-name'
      );
      const lastNameMokup = document.querySelector('.phone__mokup--last-name');
      const emailMokup = document.querySelector('.phone__mokup--email');

      const firstNameInput = document.querySelector('input#name');
      const lastNameInput = document.querySelector('input#surname');
      const emailInput = document.querySelector('input#mail');

      if (e.target === firstNameInput) {
        firstNameMokup.textContent = firstNameInput.value;
      }

      if (e.target === lastNameInput) {
        lastNameMokup.textContent = lastNameInput.value;
      }

      if (e.target === emailInput) {
        emailMokup.textContent = emailInput.value;
      }
    });
  }

  render(data) {
    this._data = data;
    this._appContent.innerHTML = '';
    const markup = this._generateMarkup();
    this._appContent.insertAdjacentHTML('afterbegin', markup);
    this._data.currentPage = 'profile details';
    this.addNavActive();
    this.checkRender();
    this.showProfileImg(data);
  }

  addNavActive() {
    const links = document.querySelectorAll('.nav__link--profile-details');
    const allLinks = document.querySelectorAll('.nav__item--link');
    allLinks.forEach(link => link.classList.remove('active'));
    links.forEach(link => link.classList.add('active'));
  }

  saveProfileDetailsData(data) {
    console.log(data);
    const firstNameInput = document.querySelector('input#name').value;
    const lastNameInput = document.querySelector('input#surname').value;
    const emailInput = document.querySelector('input#mail').value;

    data.user.name = firstNameInput;
    data.user.lastName = lastNameInput;
    data.user.email = emailInput;
  }

  formValidation() {
    const inputsRequired = document.querySelectorAll('.input__required');
    let correctForm;
    inputsRequired.forEach(input => {
      const errorText = input.parentElement.querySelector('.input__error');
      if (input.value.trim() === '') {
        errorText.classList.remove('hidden');
        correctForm = false;
      } else {
        errorText.classList.add('hidden');
        correctForm = true;
      }
    });
    return correctForm;
  }

  showProfileImg(data) {
    const profileImg = document.querySelector('.profile-img');
    const inputProfileImg = document.querySelector('#photo-file');
    const imgBox = document.querySelector('.phone__mokup--img-profile');
    const label = document.querySelector('.label-upload');
    const labelText = document.querySelector('.label-text');
    const path = label.querySelector('path');
    const labelShadow = document.querySelector('.label-shadow');

    inputProfileImg.onchange = function () {
      this._data = data;
      imgBox.classList.remove('hidden');
      profileImg.src = URL.createObjectURL(inputProfileImg.files[0]);
      label.style.backgroundImage = `url('${profileImg.src}')`;
      label.style.backgroundColor = `rgba(0,0,0,0.5)`;
      label.classList.add('label-upload-active');
      labelText.textContent = '+ Change Image';
      labelText.style.color = '#FFF';
      path.style.fill = '#FFF';
      labelShadow.classList.remove('hidden');
      this._data.user.imgUrl = profileImg.src;
    };
  }

  _generateMarkup() {
    return `
    <div class="section__box">
            <div class="header__text">
              <h1 class="heading-M">Profile Details</h1>
              <p class="header__text--description">Add your details to create a
                personal touch to your profile.</p>
            </div>

            <div class="add-link__box scroll">
              <div class="add-link__box--content profile__picture--box">
                <h3 class="text-m">Profile picture</h3>
                <div class="upload__box">
                  <label class="label-upload heading-S ${
                    this._data.user.imgUrl ? 'label-upload-active' : ''
                  }" for="photo-file" ${
      this._data.user.imgUrl !== ''
        ? `style="background-image: url('${this._data.user.imgUrl}');`
        : ''
    }"> 
    <div class="label-shadow ${
      this._data.user.imgUrl !== '' ? '' : 'hidden'
    }"></div>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="${
      this._data.user.imgUrl !== '' ? '#FFF' : '#633CFF'
    }"  d="M33.75 6.25H6.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L6.25 23.339V8.75h27.5ZM6.25 26.875l8.125-8.125 12.5 12.5H6.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L27.91 22.5l5.839 5.84v2.91ZM22.5 15.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z"/></svg>
                    <p class="label-text" ${
                      this._data.user.imgUrl !== ''
                        ? `style="color: #FFF;"`
                        : ''
                    }>+ ${
      this._data.user.imgUrl !== '' ? 'Change' : 'Upload'
    } Image</p>
                    <input type="file" id="photo-file" name="photo"
                      accept="image/png, image/jpeg">
                  </label>
                  <p class="text-s">Image must be below 1024x1024px. Use PNG or
                    JPG
                    format.
                  </p>
                </div>

              </div>

              <div class="add-link__box--content">
                <form>
                  <div class="form__item">
                    <label for="name">First name*</label>
                    <input class="input__required" value="${
                      this._data.user.name ? this._data.user.name : ''
                    }" type="text" id="name" placeholder="e.g. John">
                    <p class="input__error hidden">Can't be empty</p>
                  </div>
                  <div class="form__item">
                    <label for="surname">Last name*</label>
                    <input class="input__required" value="${
                      this._data.user.lastName ? this._data.user.lastName : ''
                    }" type="text" id="surname"
                      placeholder="e.g. Appleseed">
                    <p class="input__error hidden">Can't be empty</p>

                  </div>
                  <div class="form__item">
                    <label for="mail">Email</label>
                    <input type="text" id="mail"
                    value="${
                      this._data.user.email ? this._data.user.email : ''
                    }"
                      placeholder="e.g. email@example.com">
                    <p class="input__error hidden">Can't be empty</p>

                  </div>
                </form>
              </div>

            </div>
          </div>
          <div class="btn__box"><button
              class="btn btn-primary btn-save">Save</button>
          </div>
    `;
  }
}

export default new ProfileDetails();
