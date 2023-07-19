import PropTypes from 'prop-types';
import { Title } from './Wrapper.styled';

const GlobalTitle = ({title}) => {
  return (
    <Title >{title}</Title>
  );
}

GlobalTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default GlobalTitle;
