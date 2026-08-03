export type RegionKey = 'dubai' | 'india';

export interface RegionInfo {
  key: RegionKey;
  label: string;
  flag: string;
  countryName: string;
  cityLine: string;
  addressLines: string[];
  phones: string[];
  whatsappDigits: string;
  whatsappDisplay: string;
  emails: string[];
  businessHours: string;
  mapQuery: string;
  heroBadge: string;
  economyPhrase: string;
}

export const regions: Record<RegionKey, RegionInfo> = {
  dubai: {
    key: 'dubai',
    label: 'UAE',
    flag: '🇦🇪',
    countryName: 'United Arab Emirates',
    cityLine: 'Dubai, United Arab Emirates',
    addressLines: [
      'Al Shaali Building, Al Mamzar',
      '#101, Al Shaali Marine, Al Ittihad Road',
      'Dubai, United Arab Emirates',
    ],
    phones: ['+971 4 2668182', '+971 56 3114355', '+971 50 6949733'],
    whatsappDigits: '919061182653',
    whatsappDisplay: '+91 90611 82653',
    emails: ['comradesoftware@gmail.com', 'samkurakar@gmail.com'],
    businessHours: 'Mon – Sat, 9:00 AM – 7:00 PM (GST)',
    mapQuery: 'Al Shaali Building, Al Mamzar, Al Ittihad Road, Dubai, UAE',
    heroBadge: 'Enterprise Software Partner · Dubai, UAE',
    economyPhrase: 'the UAE economy',
  },
  india: {
    key: 'india',
    label: 'India',
    flag: '🇮🇳',
    countryName: 'India',
    cityLine: 'Thiruvananthapuram, Kerala, India',
    addressLines: ['Unity Tower', 'Opp. MG College', 'Thiruvananthapuram, Kerala 695004'],
    phones: ['+91 90611 82653'],
    whatsappDigits: '919061182653',
    whatsappDisplay: '+91 90611 82653',
    emails: ['comradesoftware@gmail.com', 'samkurakar@gmail.com'],
    businessHours: 'Mon – Sat, 9:30 AM – 6:30 PM (IST)',
    mapQuery: 'Unity Tower, Opp MG College, Kerala 695004',
    heroBadge: 'Enterprise Software Partner · Kerala, India',
    economyPhrase: "India's economy",
  },
};

export const regionList = Object.values(regions);
