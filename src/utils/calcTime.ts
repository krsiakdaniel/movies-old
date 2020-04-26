// Convert time to hours and minutes
type Props = {
  time: number;
};

const calcTime = ({ time }: Props) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

export { calcTime };
