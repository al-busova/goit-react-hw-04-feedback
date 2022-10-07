import PropTypes from 'prop-types';
import { List, ListItem } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <ListItem>
        <b>Good:</b> {good}
      </ListItem>
      <ListItem>
        <b>Neutral:</b> {neutral}
      </ListItem>
      <ListItem>
        <b>Bad:</b> {bad}
      </ListItem>
      <ListItem>
        <b>Total:</b> {total}
      </ListItem>
      <ListItem>
        <b>Positive feedback:</b> {positivePercentage}%
      </ListItem>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
