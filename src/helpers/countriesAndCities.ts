// Countries and their cities data
export const countriesAndCities: Record<string, string[]> = {
    'Egypt': [
        'Cairo', 'Alexandria', 'Giza', 'Shubra El Kheima', 'Port Said', 'Suez', 'Luxor', 'Mansoura',
        'El Mahalla El Kubra', 'Tanta', 'Asyut', 'Ismailia', 'Faiyum', 'Zagazig', 'Aswan', 'Damietta',
        'Minya', 'Beni Suef', 'Hurghada', 'Qena', 'Sohag', '6th of October City', 'Shibin El Kom',
        'Banha', 'Kafr el-Sheikh', 'Arish', 'Mallawi', '10th of Ramadan City', 'Bilbeis', 'Marsa Matruh',
        'Kafr el-Dawwar', 'Qalyub', 'Desouk', 'Abu Kabir', 'Girga', 'Akhmim', 'Matareya'
    ],
    'UAE': [
        'Dubai', 'Abu Dhabi', 'Sharjah', 'Al Ain', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain',
        'Al Dhaid', 'Hatta', 'Khor Fakkan', 'Dibba Al-Fujairah', 'Kalba', 'Madinat Zayed', 'Liwa Oasis',
        'Ruwais', 'Jebel Ali', 'Al Hamriyah', 'Dhaid', 'Masafi'
    ],
    'Saudi Arabia': [
        'Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam', 'Khobar', 'Dhahran', 'Taif', 'Buraidah',
        'Tabuk', 'Hail', 'Khamis Mushait', 'Hofuf', 'Mubarraz', 'Ha\'il', 'Najran', 'Al Bahah',
        'Yanbu', 'Jubail', 'Abha', 'Sakaka', 'Jizan', 'Qurayyat', 'Kharj', 'Dhahran', 'Ras Tanura',
        'Buraydah', 'Al Khobar', 'Al Qatif', 'Al Jubail', 'Al Kharj', 'Al Taif', 'Al Baha', 'Al Qunfudhah'
    ],
    'USA': [
        'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio',
        'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus',
        'Charlotte', 'San Francisco', 'Indianapolis', 'Seattle', 'Denver', 'Washington', 'Boston',
        'El Paso', 'Nashville', 'Detroit', 'Oklahoma City', 'Portland', 'Las Vegas', 'Memphis',
        'Louisville', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno', 'Sacramento',
        'Mesa', 'Kansas City', 'Atlanta', 'Long Beach', 'Colorado Springs', 'Raleigh', 'Miami',
        'Virginia Beach', 'Omaha', 'Oakland', 'Minneapolis', 'Tulsa', 'Arlington', 'Tampa'
    ],
    'Germany': [
        'Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund',
        'Essen', 'Leipzig', 'Bremen', 'Dresden', 'Hannover', 'Nuremberg', 'Duisburg', 'Bochum',
        'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Karlsruhe', 'Mannheim', 'Augsburg', 'Wiesbaden',
        'Gelsenkirchen', 'Mönchengladbach', 'Braunschweig', 'Chemnitz', 'Kiel', 'Aachen', 'Halle',
        'Magdeburg', 'Freiburg', 'Krefeld', 'Lübeck', 'Oberhausen', 'Erfurt', 'Mainz', 'Rostock'
    ],
    'Jordan': [
        'Amman', 'Zarqa', 'Irbid', 'Russeifa', 'Wadi as-Sir', 'Aqaba', 'Salt', 'Madaba', 'Jerash',
        'Mafraq', 'Karak', 'Tafilah', 'Ma\'an', 'Ajloun', 'Mafraq', 'Zarqa', 'Balqa', 'Jerash',
        'Karak', 'Tafilah', 'Ma\'an', 'Ajloun'
    ],
    'Lebanon': [
        'Beirut', 'Tripoli', 'Sidon', 'Tyre', 'Zahle', 'Jounieh', 'Baalbek', 'Byblos', 'Nabatieh',
        'Batroun', 'Jbeil', 'Keserwan', 'Mount Lebanon', 'North Lebanon', 'South Lebanon', 'Bekaa',
        'Nabatieh', 'Akkar', 'Baalbek-Hermel'
    ],
    'Kuwait': [
        'Kuwait City', 'Al Ahmadi', 'Hawalli', 'Al Farwaniyah', 'Al Jahra', 'Mubarak Al-Kabeer',
        'Ahmadi', 'Jahra', 'Farwaniya',  'Kuwait City', 'Al Ahmadi', 'Al Farwaniyah'
    ],
    'Qatar': [
        'Doha', 'Al Rayyan', 'Al Wakrah', 'Al Khor', 'Al Shamal', 'Umm Salal', 'Al Daayen',
        'Dukhan', 'Lusail', 'Mesaieed', 'Al Khor', 'Al Wakrah', 'Al Rayyan', 'Umm Salal'
    ],
    'Oman': [
        'Muscat', 'Salalah', 'Sohar', 'Nizwa', 'Sur', 'Al Buraimi', 'Al Khaburah', 'Al Suwaiq',
        'Al Rustaq', 'Al Khasab', 'Al Madina A\'Zarqa', 'Al Buraimi', 'Al Khaburah', 'Al Suwaiq'
    ]
};

// Helper function to get countries sorted alphabetically
export const getCountries = (): string[] => {
    return Object.keys(countriesAndCities).sort();
};

// Helper function to get cities for a specific country
export const getCitiesForCountry = (country: string): string[] => {
    return countriesAndCities[country] || [];
};

// Helper function to check if a country exists
export const isValidCountry = (country: string): boolean => {
    return country in countriesAndCities;
};

// Helper function to check if a city exists in a country
export const isValidCityForCountry = (country: string, city: string): boolean => {
    return countriesAndCities[country]?.includes(city) || false;
};