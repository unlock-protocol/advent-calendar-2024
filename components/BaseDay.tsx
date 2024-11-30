import { DaySize } from '../layout/daySizes';

interface BaseDayProps {
  day: number;
  children?: JSX.Element;
  hideDay?: boolean;
  onClick?: () => void;
  outterClasses?: string;
  innerClasses?: string;
  size?: DaySize;
}

const BaseDay = ({
  day,
  size,
  onClick,
  children,
  outterClasses = '',
  innerClasses = '',
  hideDay = false,
}: BaseDayProps) => {
  if (!outterClasses) {
    outterClasses = '';
  }
  const gridClass = size
    ? `col-span-${size.default.cols} row-span-${size.default.rows} order-${
        size.default.order
      } ${
        size.sm ? `sm:col-span-${size.sm.cols} sm:row-span-${size.sm.rows}` : ''
      }`
    : 'col-span-1 row-span-1';
  outterClasses = `${outterClasses} border-solid border rounded-xl relative`;
  innerClasses = `${innerClasses} text-lg sm:text-2xl w-full absolute left-0 top-0 bottom-0 font flex items-center justify-center text-center font-bold`;
  if (onClick) {
    outterClasses = `${outterClasses} cursor-pointer`;
  }
  if (children) {
    innerClasses = `${innerClasses} group-hover:invisible`;
  }
  return (
    <div onClick={onClick} className={`${outterClasses} ${gridClass}`}>
      {!hideDay && <div className={innerClasses}>{day}</div>}

      {children}
    </div>
  );
};

export default BaseDay;
