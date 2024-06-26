import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);


const isFutureEvent = (startDate) => dayjs(startDate).isAfter(dayjs(), 'date');

const isPastEvent = (endDate) => dayjs(endDate).isBefore(dayjs(), 'date');

const isPresentEvent = (startDate, endDate) =>
  dayjs(startDate).isSameOrBefore(dayjs(), 'date') &&
  dayjs(endDate).isSameOrAfter(dayjs(), 'date');


export { isFutureEvent, isPastEvent, isPresentEvent };
