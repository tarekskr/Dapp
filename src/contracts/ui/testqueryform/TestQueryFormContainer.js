import { connect } from 'react-redux';
import TestQueryForm from './TestQueryForm';
// import {testQuery} from './TestQueryFormAction'

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onTestQueryFormTest: querySpecs => {
      // dispatch(testQuery(querySpecs))
    }
  };
};

const TestQueryFormContainer = connect(mapStateToProps, mapDispatchToProps)(
  TestQueryForm
);

export default TestQueryFormContainer;
