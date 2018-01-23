import { connect } from "react-redux";
import ContractsList from "../components/ContractsList";

const mapStateToProps = (state, ownProps) => {
  return {
    explorer: state.explorer
  };
};

const Explorer = connect(mapStateToProps)(ContractsList);

export default Explorer;
