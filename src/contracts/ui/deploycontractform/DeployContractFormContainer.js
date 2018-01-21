import {connect} from 'react-redux'
import DeployContractForm from './DeployContractForm'
import {deployContract} from './DeployContractFormAction'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeployContractFormDeploy: (contractSpecs) => {
      dispatch(deployContract(contractSpecs))
    }
  }
}

const DeployContractFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeployContractForm)

export default DeployContractFormContainer
