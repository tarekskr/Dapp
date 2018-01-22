import { connect } from 'react-redux';
import LoadContractsButton from './LoadContractsButton';
import { loadContracts } from './LoadContractsButtonActions';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onUserClick: event => {
      event.preventDefault();

      dispatch(loadContracts());
    }
  };
};

const LoadContractsButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadContractsButton);

export default LoadContractsButtonContainer;
