import { HeadCRow, HeadCell } from './TransactionHead.styled';

export const TransactionHead = () => {
  return (
    <HeadCRow>
      <HeadCell>Type</HeadCell>
      <HeadCell>Amount</HeadCell>
      <HeadCell>Currency</HeadCell>
    </HeadCRow>
  );
};
