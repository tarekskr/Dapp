import { connect } from "react-redux";

import { deployContract } from "../actions/deploy";

import DeployContractForm from '../components/DeployContractForm';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onDeployContract: contractSpecs => {
      dispatch(deployContract(contractSpecs));
    }
  };
};

const Deploy = connect(mapStateToProps, mapDispatchToProps)(DeployContractForm);

export default Deploy;
