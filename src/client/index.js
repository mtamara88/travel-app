// js files
import { handleSubmit } from "./js/handleSubmit";
import { getData } from "./js/handleSubmit";
import { updateUI } from "./js/updateUI";
import { validate } from "./js/formValidation";

// sass files
import './styles/resets.scss';
import './styles/base.scss';
import './styles/layout.scss';
import './styles/userForm.scss';
import './styles/result.scss';

// addEventListener for "click" on button "generate"
document.getElementById("submit").addEventListener("click", handleSubmit);

export { handleSubmit, validate, getData, updateUI };