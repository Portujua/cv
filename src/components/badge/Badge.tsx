import classnames from 'classnames';
import './styles.scss';

interface Props {
  text: string;
  className?: string;
}

export const Badge = ({ text, className }: Props) => {
  return <div className={classnames('badge p-2 inline-block rounded-lg', className)}>{text}</div>;
};
