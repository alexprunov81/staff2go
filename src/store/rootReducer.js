
import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';


import fieldsAuthorization from 'store/reducers/base/fieldsAuthorization';
import fieldsRegistration from 'store/reducers/base/fieldsRegistration';
import fieldsEmployersAccount from 'store/reducers/base/fieldsEmployersAccount';
import fieldsApplicantsAccount from 'store/reducers/base/fieldsApplicantsAccount';
import fieldsVacancies from 'store/reducers/base/fieldsVacancies';
import fieldsResume from 'store/reducers/base/fieldsResume';

import infoAccountReducer from "./reducers/infoAccountReducer";

import popupReducer from "./reducers/popupReducer";
import profActiveReducer from "./reducers/profActiveReducer";

import professionBase from "store/reducers/base/professionBase";
import scopeworkBase from "store/reducers/base/scopeworkBase";

import popupMapInfoReducer from "store/reducers/popupMapInfoReducer";

const rootReducer = combineReducers({
  form: formReducer,
  fieldsAuthorization: fieldsAuthorization,
  fieldsRegistration: fieldsRegistration,
  fieldsEmployersAccount: fieldsEmployersAccount,
  fieldsApplicantsAccount: fieldsApplicantsAccount,
  fieldsVacancies: fieldsVacancies,
  fieldsResume: fieldsResume,
  accountInfo: infoAccountReducer,
  professionBase: professionBase,
  scopeworkBase: scopeworkBase,
  popupReducer: popupReducer,
  profActiveReducer: profActiveReducer,
  popupMapInfoReducer: popupMapInfoReducer
});

export default rootReducer;
