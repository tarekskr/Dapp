//import AuthenticationContract from '../../../../build/contracts/Authentication.json'
//import { loginUser } from '../loginbutton/LoginButtonActions'
import store from '../../../store'

//const contract = require('truffle-contract')

export function deployContract(contractSpecs) {

    let web3 = store.getState().web3.web3Instance

    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {
        // TODO: deploy contract after checking specs!
    } else {
        console.error('Web3 is not initialized.');
    }
}
