import PropTypes from 'prop-types';
import { TransactionHead } from 'components/TransactionHead/TransactionHead';
import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import { Table, Head, Body } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <TransactionHead />
      </Head>

      <Body>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </Body>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
