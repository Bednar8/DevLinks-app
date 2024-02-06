import View from './View';
import uploadIcon from '../../assets/images/icon-upload-image.svg';

class ProfileDetails extends View {
  _appContent = document.querySelector('#app__content');

  render(data) {
    this._data = data;
    this._appContent.innerHTML = '';
    const markup = this._generateMarkup();
    this._appContent.insertAdjacentHTML('afterbegin', markup);
    this._data.currentPage = 'profile details';
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
                  <label class="label-upload heading-S">
                    <img src="${uploadIcon}" alt="">
                    + Upload Image
                    <input type="file" id="photo" name="photo"
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
                    <input class="input__required" type="text" id="name" placeholder="e.g. John">
                    <p class="input__error hidden">Can't be empty</p>
                  </div>
                  <div class="form__item">
                    <label for="surname">Last name*</label>
                    <input class="input__required" type="text" id="surname"
                      placeholder="e.g. Appleseed">
                    <p class="input__error hidden">Can't be empty</p>

                  </div>
                  <div class="form__item">
                    <label for="mail">Email</label>
                    <input type="text" id="mail"
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
