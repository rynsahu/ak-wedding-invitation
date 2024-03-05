'use client'
import { useCountdown } from '@/hooks/useCountDown';
import { useEffect } from 'react';
import ShowCounter from './ShowCounter';

const Completion = () => (
    <div className='flex flex-col text-center justify-center items-center'>
        <span>Thank you for your warm wishes!</span>
        <span className="font-emoji">🙏</span>
    </div>
);

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

export default CountdownTimer;
