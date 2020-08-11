import { connect } from "react-redux";
import DashboardScreen from "./DashboardScreen.jsx";

// const mapStateToProps = (state) => {
//   const {
//     newsGet,
//     forestergGet,
//     listingforms,
//     marketingGet,
//     userlistings,
//   } = state;
//   return {
//     newsGet,
//     forestergGet,
//     listingforms,
//     marketingGet,
//     userlistings,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   GetUsers: (page, search) => dispatch(GetUsers(page, search)),
//   getNews: (page, search) => dispatch(getNews(page, search)),
//   getForester: (page, search) => dispatch(getForester(page, search)),
//   getForms: (page, search) => dispatch(getForms(page, search)),
//   getMarketing: (page, search) => dispatch(getMarketing(page, search)),
// });

export default connect()(DashboardScreen);
