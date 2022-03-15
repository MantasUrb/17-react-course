import ZooBox from "../components/Zoobox";
import withZooBoxEmpty from "./withZooBoxEmpty";
import withZooBoxError from "./withZooBoxError";
import { compose } from 'recompose';

const withZooBoxCompose = compose(
    withZooBoxError,
    withZooBoxEmpty
  );

export default withZooBoxCompose(ZooBox);