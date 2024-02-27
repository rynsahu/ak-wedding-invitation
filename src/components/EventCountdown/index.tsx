'use client'
import { useCountdown } from '@/hooks/useCountDown';
import { useEffect } from 'react';

const Completion = () => <span>Thank you for your warm wishes!</span>;

const DateTimeDisplay = ({ value, type, isDanger }: any) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="flex gap-3">
      <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
      <p>:</p>
      <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate, onDateExpired }: any) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const isDateExpired = days + hours + minutes + seconds <= 0;

  useEffect(() => {
    if (isDateExpired) onDateExpired(targetDate);
  }, [isDateExpired]);

  if (isDateExpired) {
    return <Completion />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

const EventCountdown = ({ onDateExpired, eventDate }: any) => {
  const WEDDING_EVENT_DATE_IN_MS = new Date(eventDate).getTime();

  return (
    <div className='flex justify-center'>
      <CountdownTimer
        onDateExpired={onDateExpired}
        targetDate={WEDDING_EVENT_DATE_IN_MS} 
        suppressHydrationWarning
      />
    </div>
  );
}

export default EventCountdown;
