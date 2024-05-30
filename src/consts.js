import { isFutureEvent, isPastEvent, isPresentEvent } from './utils/filters.js';
import { sortByDay, sortByPrice, sortByDuration } from './utils/sort-types.js';


const EVENT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const Filters = {
  EVERYTHING: {
    name: 'everything',
    emptyMessage: 'Click New Event to create your first point',
    filterMethod: (events) => events
  },
  FUTURE: {
    name: 'future',
    emptyMessage: 'There are no future events now',
    filterMethod: (events) => events.filter((event) => isFutureEvent(event.dateFrom))
  },
  PRESENT: {
    name: 'present',
    emptyMessage: 'There are no present events now',
    filterMethod: (events) => events.filter((event) => isPresentEvent(event.dateFrom, event.dateTo))
  },
  PAST: {
    name: 'past',
    emptyMessage: 'There are no past events now',
    filterMethod: (events) => events.filter((event) => isPastEvent(event.dateTo))
  }
};

const SortTypes = {
  DAY: {
    name: 'day',
    default: '',
    sortMethod: sortByDay
  },
  EVENT: {
    name: 'event',
    default: 'disabled',
    sortMethod: () => 0
  },
  TIME: {
    name: 'time',
    default: '',
    sortMethod: sortByDuration
  },
  PRICE: {
    name: 'price',
    default: '',
    sortMethod: sortByPrice
  },
  OFFER: {
    name: 'offer',
    default: 'disabled',
    sortMethod: () => 0
  },
};

export { EVENT_TYPES, Filters, SortTypes };
