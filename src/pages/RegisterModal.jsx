import {
  AvatarsContainer,
  FormInput,
  ModalAvatar,
  RegisterModalNavbar,
  PasswordInput,
} from '../components';

const RegisterModal = () => {
  return (
    <div className="darken-filter">
      <div className="login-modal">
        <div className="modal-back-btn">
          <a href="lobby">
            <img src="/assets/images_modal/back_button.png" alt="back_button" />
          </a>
        </div>
        
        <RegisterModalNavbar />

        <div className="modal-header">
          <div className="modal-gunEdge-img">
            <img src="/assets/images_modal/Modal-Gun-Edge.png" alt="" />
          </div>
          <ModalAvatar />
        </div>
        <div className="modal-showcase-container">
          <div className="modal-form-container">
            <form action="">
              <FormInput
                inputText='NICKNAME'
                type='text'
                placeholderText='This will be your screen name'
              />
              <FormInput
                inputText='EMAIL ADDRESS'
                type='email'
                placeholderText='Enter valid email address' />
              <PasswordInput />
            </form>
          </div>
          <AvatarsContainer /> 
        </div>
      </div>
    </div>

  );
};
export default RegisterModal;