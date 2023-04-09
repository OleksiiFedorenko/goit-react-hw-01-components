import PropTypes from 'prop-types';
import { BodyRow, BodyCell } from './TransactionItem.styled';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <BodyRow>
      <BodyCell>{type}</BodyCell>
      <BodyCell>{amount}</BodyCell>
      <BodyCell>{currency}</BodyCell>
    </BodyRow>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
