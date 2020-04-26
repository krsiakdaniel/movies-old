// Convert a number to money formatting
type Props = {
  money: number;
};

const convertMoney = ({ money }: Props) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export { convertMoney };
