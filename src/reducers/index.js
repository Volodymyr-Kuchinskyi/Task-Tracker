import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import board from './boardReducer';
import boards from './boardsReducer';
import auth from './authReducer';
import teams from './teamsReducer';
import team from './teamReducer';
import invites from './invitesReducer';

export default combineReducers({ boards, board, auth, teams, team, invites, form: formReducer });
