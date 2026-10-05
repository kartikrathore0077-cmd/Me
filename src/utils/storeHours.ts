export interface StoreStatus {
  isOpen: boolean;
  statusText: string;
  detailText: string;
  dayName: string;
  currentTimeString: string;
}

export function getStoreStatus(customDate?: Date): StoreStatus {
  // Use IST (Indian Standard Time, UTC+5:30)
  const now = customDate || new Date();
  
  // Calculate IST time
  const utcOffset = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istOffset = 5.5 * 3600000;
  const istDate = new Date(utcOffset + istOffset);

  const dayOfWeek = istDate.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
  const hours = istDate.getHours();
  const minutes = istDate.getMinutes();
  const currentMinuteOfDay = hours * 60 + minutes;

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[dayOfWeek];

  const timeFormatter = new Intl.DateTimeFormat('en-IN', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata'
  });
  const currentTimeString = timeFormatter.format(istDate);

  // Sunday: Closed
  if (dayOfWeek === 0) {
    return {
      isOpen: false,
      statusText: 'Closed Today (Sunday)',
      detailText: 'Opens Monday at 9:00 AM IST',
      dayName,
      currentTimeString
    };
  }

  // Monday: 9:00 AM - 9:00 PM (540 to 1260 mins)
  if (dayOfWeek === 1) {
    const openTime = 9 * 60; // 540
    const closeTime = 21 * 60; // 1260 (9:00 PM)

    if (currentMinuteOfDay >= openTime && currentMinuteOfDay < closeTime) {
      const remainingMinutes = closeTime - currentMinuteOfDay;
      const remainingHours = Math.floor(remainingMinutes / 60);
      return {
        isOpen: true,
        statusText: 'Open Now · Monday Hours',
        detailText: `Closes at 9:00 PM (${remainingHours > 0 ? `${remainingHours}h ` : ''}${remainingMinutes % 60}m left)`,
        dayName,
        currentTimeString
      };
    } else if (currentMinuteOfDay < openTime) {
      return {
        isOpen: false,
        statusText: 'Closed Now',
        detailText: 'Opens today at 9:00 AM',
        dayName,
        currentTimeString
      };
    } else {
      return {
        isOpen: false,
        statusText: 'Closed for the Night',
        detailText: 'Opens Tuesday at 9:00 AM',
        dayName,
        currentTimeString
      };
    }
  }

  // Tuesday to Saturday: 9:00 AM – 7:00 PM (or till 9:30 PM seasonal)
  // Let's use 7:00 PM standard (19:00) with seasonal note
  const openTime = 9 * 60;
  const standardCloseTime = 19 * 60; // 7:00 PM

  if (currentMinuteOfDay >= openTime && currentMinuteOfDay < standardCloseTime) {
    const remainingMinutes = standardCloseTime - currentMinuteOfDay;
    const remainingHours = Math.floor(remainingMinutes / 60);
    return {
      isOpen: true,
      statusText: 'Open Now',
      detailText: `Standard closing 7:00 PM (${remainingHours > 0 ? `${remainingHours}h ` : ''}${remainingMinutes % 60}m left)`,
      dayName,
      currentTimeString
    };
  } else if (currentMinuteOfDay < openTime) {
    return {
      isOpen: false,
      statusText: 'Closed Now',
      detailText: 'Opens today at 9:00 AM',
      dayName,
      currentTimeString
    };
  } else {
    const nextDay = dayOfWeek === 6 ? 'Monday' : days[dayOfWeek + 1];
    return {
      isOpen: false,
      statusText: 'Closed for the Night',
      detailText: `Opens ${nextDay} at 9:00 AM`,
      dayName,
      currentTimeString
    };
  }
}

export const WEEKLY_SCHEDULE = [
  { day: 'Monday', hours: '9:00 AM – 9:00 PM', highlight: 'Extended Monday Shopping' },
  { day: 'Tuesday', hours: '9:00 AM – 7:00 PM', highlight: 'Seasonal up to 9:30 PM' },
  { day: 'Wednesday', hours: '9:00 AM – 7:00 PM', highlight: 'Seasonal up to 9:30 PM' },
  { day: 'Thursday', hours: '9:00 AM – 7:00 PM', highlight: 'Seasonal up to 9:30 PM' },
  { day: 'Friday', hours: '9:00 AM – 7:00 PM', highlight: 'Seasonal up to 9:30 PM' },
  { day: 'Saturday', hours: '9:00 AM – 7:00 PM', highlight: 'Weekend Family Shopping' },
  { day: 'Sunday', hours: 'Closed', highlight: 'Weekly Maintenance Day' }
];
