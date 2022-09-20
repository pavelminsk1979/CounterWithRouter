import {combineReducers, legacy_createStore} from "redux";
import {ReduserInputMin} from "../redusers/ReduserInputMin";
import {ReduserInputMax} from "../redusers/ReduserInputMax";
import {ReduserStateNumber} from "../redusers/ReduserStateNumber";

const rootReduser=combineReducers({
    inputMin:ReduserInputMin,
    inputMax:ReduserInputMax,
    number:ReduserStateNumber
})

export const store=legacy_createStore(rootReduser)

export type ReduxStoreType=ReturnType<typeof rootReduser>

// @ts-ignore
window.store=store