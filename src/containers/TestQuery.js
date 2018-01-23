import { connect } from 'react-redux';
import TestQueryForm from '../components/TestQueryForm';
import { testQuery } from '../actions/testQuery';

const mapStateToProps = (state, ownProps) => {
  return {
    testQuery: state.testQuery
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTestQuery: querySpecs => {
      dispatch(testQuery(querySpecs))
    }
  };
};

const TestQueryFormContainer = connect(mapStateToProps, mapDispatchToProps)(TestQueryForm);

export default TestQueryFormContainer;
