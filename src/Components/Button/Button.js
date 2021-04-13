import PropTypes from 'prop-types';
import s from './Button.module.css';
const Button = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick} className={s.Button}>
      <span className={s.ButtonName}> Load more</span>
    </button>
  );
};
export default Button;

Button.propTypes = { onClick: PropTypes.func.isRequired };
