// Convert time to hours and minutes
type Props = {
  time: number;
};

const timeNumber = 60;

const calcTime = ({ time }: Props) => {
  const hours = Math.floor(time / timeNumber);
  const mins = time % timeNumber;
  return `${hours}h ${mins}m`;
};

export { calcTime };
