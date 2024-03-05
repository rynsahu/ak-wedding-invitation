'use client'

const DateTimeDisplay = ({ value, type, isDanger }: any) => {
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
        <p suppressHydrationWarning>{`${value}`}</p>
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

export default ShowCounter;
