export interface PrayerTimes {
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  jumuah_khutbah: string;
  jumuah_iqamah: string;
}

// Default prayer times
export const defaultPrayerTimes: PrayerTimes = {
  fajr: '05:30',
  dhuhr: '13:15',
  asr: '16:45',
  maghrib: '19:45',
  isha: '21:15',
  jumuah_khutbah: '13:15',
  jumuah_iqamah: '13:45'
};
