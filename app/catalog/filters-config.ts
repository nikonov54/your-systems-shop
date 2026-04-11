// filters-config.ts

export const cameraFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['Hikvision', 'HiWatch', 'iFlou', 'Ezviz', 'Dahua', 'Trassir', 'Tiandy', 'LTV'] },
  { id: 'videoanalitika', name: 'Видеоаналитика', options: ['Детекция движения', 'Детекция человека', 'Детекция т/с', 'Пересечение линии', 'Вторжение в зону', 'Изменение сцены', 'Перимет', 'Активное сдерживание', 'Скопление людей', 'Подсчет людей', 'Праздношатание', 'Оставленные предметы', 'Захват лиц', 'Распозвание лица', 'Распознавание автомобильных номеров'] },
  { id: 'tip-korpusa', name: 'Тип корпуса', options: ['Купольный', 'Цилиндрический', 'Компактный', 'Рыбий глаз', 'Взрывозащищенный'] },
  { id: 'ispolnenie', name: 'Исполнение', options: ['Внутреннее', 'Уличное', 'Взрывозащищенное'] },
  { id: 'razreshenie', name: 'Разрешение, Мп', options: ['2', '4', '5', '6', '8', '12'] },
  { id: 'tip-obektiva', name: 'Тип объектива', options: ['Фиксированный', 'Вариофокальный', 'Моторизированный'] },
  { id: 'fokusnoe-rasstoyanie', name: 'Фокусное расстояние, мм', options: ['2.7 - 12', '2.7 - 13.5', '2.8', '2.8 - 12', '3.6', '4'] },
  { id: 'podsvetka', name: 'Подсветка, м', options: ['от 1 до 15 м', 'от 20 до 40 м', 'от 45 до 90 м', 'от 100 до 200 м'] },
  { id: 'wifi', name: 'Wi-Fi', options: ['да', 'нет'] },
  { id: 'sd-karta', name: 'SD-карта', options: ['да', 'нет'] },
  { id: 'pir-datchik', name: 'PIR-датчик', options: ['да', 'нет'] },
  { id: 'audio', name: 'Аудио', options: ['Аудиовход', 'Аудиовыход', 'Встроенный динамик', 'Встроенный микрофон', 'Нет'] },
  { id: 'trevoga', name: 'Тревожный вход/выход', options: ['да', 'нет'] },
  { id: 'ip', name: 'IP', options: ['IP40', 'IP42', 'IP54', 'IP65', 'IP66', 'IP67', 'IP68', 'Нет'] },
  { id: 'ik', name: 'IK', options: ['08', '10'] },
  { id: 'osobennosti', name: 'Особенности', options: ['Активное сдерживание', 'Смарт подсветка'] },
  { id: 'pitanie', name: 'Питание', options: ['AC 24В', 'AC100В ~ 240В', 'DC 12В', 'DC 24В', 'DC 36В', 'DC 5В', 'DC 5В (USB type-C)', 'DC 5В (microUSB)', 'PoE'] }
];

export const recorderFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['Hikvision', 'HiWatch', 'iFlou', 'Dahua', 'Trassir', 'Tiandy', 'LTV'] },
  { id: 'videoanalitika', name: 'Видеоаналитика', options: ['Детекция движения', 'Детекция человека', 'Детекция т/с', 'Пересечение линии', 'Вторжение в зону', 'Изменение сцены', 'Перимет', 'Активное сдерживание', 'Скопление людей', 'Подсчет людей', 'Праздношатание', 'Оставленные предметы', 'Захват лиц', 'Распозвание лица', 'Распознавание автомобильных номеров'] },
  { id: 'kanaly', name: 'Количество каналов', options: ['4', '8', '10', '16', '20', '32', '40', '64', '80', '128'] },
  { id: 'max-res-ip', name: 'Макс. разрешение записи IP, Мп', options: ['4', '6', '8', '12', '16', '24', '32'] },
  { id: 'max-res-decode', name: 'Макс. разрешение декодирования, Мп', options: ['4', '6', '8', '12', '16', '24', '32'] },
  { id: 'kolich-hdd', name: 'Количество HDD', options: ['1', '2', '4', '8', '16', '24'] },
  { id: 'trevoga', name: 'Тревожный вход/выход', options: ['1', '2', '4', '6', '8', '9', '16', 'нет'] },
  { id: 'audio-rec', name: 'Аудио', options: ['1', '2', 'нет'] },
  { id: 'outputs', name: 'Видеовыходы', options: ['CVBS', 'HDMI', 'VGA'] },
  { id: 'lan', name: 'LAN порты', options: ['1', '2', '4'] },
  { id: 'poe', name: 'PoE порты', options: ['4', '8', '16', '24', 'нет'] },
  { id: 'osobennosti-rec', name: 'Особенности', options: ['RS-232', 'RS-485', 'SAS', 'eSATA', 'USB', 'SFP', 'Wi-Fi', '4К', 'Для установки в стойку'] }
];

export const microphoneFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['Stelberry', 'ESM', 'Dahua'] },
  { id: 'pitanie-v', name: 'Питание, В', options: ['5,5 - 16', '6 - 12', '6 - 14', '7,5 - 16', '8 - 14', '8 - 15', '8.5 - 15', '9 - 15', '9 - 18', '12'] },
  { id: 'akust-dalnost', name: 'Акустическая дальность, м', options: ['1-10', '10-20', '20-40', '40-80', '80-100', '100-150'] },
  { id: 'chastota-hz', name: 'Частота, Гц', options: ['100 - 10\'000', '100 - 12\'000', '100 - 4\'000', '100 - 6\'100', '100 - 7\'200', '100 - 8\'300', '100 - 9\'200', '150 - 12\'000', '20 - 20\'000', '270 - 4\'000', '300 - 4\'000', '300 - 5\'500', '80 - 16\'000'] }
];

export const mountingBoxFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['KadrOn', 'BOXFORCAM', 'Hikvision', 'Dahua'] },
  { id: 'material', name: 'Материал', options: ['Пластик', 'Металл'] },
  { id: 'ip-box', name: 'IP', options: ['IP66', 'IP67', 'нет'] },
  { id: 'osobennosti-box', name: 'Особенности', options: ['Взрывозащищенные'] }
];

export const bracketFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['KadrOn', 'BOXFORCAM', 'Hikvision', 'HiWatch', 'Dahua'] },
  { id: 'tip-kronshteyna', name: 'Тип кронштейна', options: ['Настенный', 'Потолочный', 'Угловой', 'Универсальный', 'Для столба'] }
];

export const switchFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['Hikvision', 'Trassir', 'Dahua', 'Tiandy', 'Ruijie', 'TFortis', 'Mastermann', 'Tenda', 'Wi-Tek'] },
  { id: 'tip-kommutatora', name: 'Тип коммутатора', options: ['Неуправляемый', 'Управляемый L2', 'Управляемый L3', 'Smart'] },
  { id: 'tip-ustanovki', name: 'Тип установки', options: ['Настольный', 'Настенный', 'На DIN-рейку', 'В стойку'] },
  { id: 'promyshlenny', name: 'Промышленный', options: ['да', 'нет'] },
  { id: 'poe-ports', name: 'PoE Порты', options: ['4', '6', '8', '16', '24', '48'] },
  { id: 'lan-ports', name: 'LAN Порты', options: ['4', '6', '8', '16', '24', '48'] },
  { id: 'up-link-ports', name: 'UP Link Порты', options: ['1', '2', '4', 'нет'] },
  { id: 'sfp-ports', name: 'SFP Порты', options: ['1', '2', '4', 'нет'] },
  { id: 'gigabit-ports', name: 'Гигабитные Порты', options: ['Все', 'Downlink', 'Uplink', 'нет'] },
  { id: 'budget-poe', name: 'Бюджет PoE (Вт)', options: ['до 100', 'до 200', 'до 300', 'до 400', 'нет'] },
  { id: 'osobennosti-net', name: 'Особенности', options: ['Extend', 'Console Port', 'AI QoS', 'AI VLAN', 'Watchdog', 'Совмещенные Uplink', 'Облачное управление', 'Стекирование', 'Питания через ББП'] },
  { id: 'pitanie-net', name: 'Питание', options: ['AC 100-240В', 'AC 220В', 'DC 12В', 'DC 48-54В', 'DC 5В'] }
];

export const routerFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['Micro-Drive', 'Keenetic', 'MikroTik', 'TP-Link', 'Teltonika', 'Huawei', 'ZTE'] },
  { id: 'ispolnenie', name: 'Исполнение', options: ['Внутреннее', 'Уличное (IP65/67)', 'Встраиваемое', 'Промышленное (DIN-рейка)'] },
  { id: 'lte-category', name: 'Категория LTE (Агрегация)', options: ['LTE Cat.4 (до 150 Мбит/с)', 'LTE Cat.6 (до 300 Мбит/с)', 'LTE Cat.9 (до 450 Мбит/с)', 'LTE Cat.12 (до 600 Мбит/с)', 'LTE Cat.18 (до 1.2 Гбит/с)'] },
  { id: 'sim-slots', name: 'Слот для SIM-карт', options: ['1 SIM', '2 SIM (Резервирование)', 'Micro-SIM', 'Nano-SIM'] },
  { id: 'wifi-range', name: 'Диапазон Wi-Fi', options: ['2.4 ГГц', '5 ГГц', 'Двухдиапазонный (Dual-Band)'] },
  { id: 'wifi-standards', name: 'Стандарты Wi-Fi', options: ['Wi-Fi 4 (802.11n)', 'Wi-Fi 5 (802.11ac)', 'Wi-Fi 6 (802.11ax)'] },
  { id: 'ethernet-ports', name: 'Порты Ethernet', options: ['1 x LAN', '2 x LAN', '4 x LAN', '10/100 Мбит/с', '1000 Мбит/с (Gigabit)'] },
  { id: 'antenna-connectors', name: 'Разъемы для антенн', options: ['SMA (4G/LTE)', 'RP-SMA (Wi-Fi)', 'MIMO поддержка', 'Встроенные антенны'] },
  { id: 'power-type', name: 'Тип питания', options: ['DC 9-36В', 'Passive PoE (24В)', 'PoE (802.3af/at)', 'Micro-USB', 'Блок питания в комплекте'] },
  { id: 'vpn-protocols', name: 'Поддержка VPN', options: ['L2TP/PPTP', 'OpenVPN', 'IPsec', 'WireGuard', 'GRE'] },
  { id: 'industrial-features', name: 'Промышленные функции', options: ['Watchdog (Перезагрузка по расписанию)', 'SMS-управление', 'Modbus TCP', 'Диапазон температур -40...+70°C'] }
];

export const accessPointFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['Ruijie', 'Ubiquiti', 'TP-Link', 'MikroTik'] },
  { id: 'wifi-standard', name: 'Стандарт Wi-Fi', options: ['Wi-Fi 7 (802.11be)', 'Wi-Fi 6/6E (802.11ax)', 'Wi-Fi 5 (802.11ac)'] },
  { id: 'frequency-bands', name: 'Частотные диапазоны', options: ['2.4 ГГц', '5 ГГц', '6 ГГц', 'Трехдиапазонный (Triple-band)'] },
  { id: 'max-throughput', name: 'Пропускная способность', options: ['до 3000 Мбит/с', 'до 5400 Мбит/с', 'до 9000 Мбит/с', 'свыше 18 Гбит/с'] },
  { id: 'mimo-tech', name: 'Технология MIMO', options: ['2x2 MIMO', '4x4 MIMO'] },
  { id: 'max-users', name: 'Макс. количество подключений', options: ['128', '256', '512', '1024', '2000+'] },
  { id: 'power-over-ethernet', name: 'Питание PoE', options: ['802.3af (до 15.4W)', '802.3at (до 30W)', '802.3bt (до 60W)', 'Passive PoE'] },
  { id: 'mounting-type', name: 'Тип монтажа', options: ['Потолочный', 'Настенный', 'Встраиваемый', 'Уличный (IP67)'] },
  { id: 'management', name: 'Управление', options: ['Облачное', 'Локальное', 'Mesh-сеть', 'Без контроллера'] }
];

export const sfpFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['Hikvision', 'Dahua', 'Ruijie', 'TP-Link', 'MikroTik', 'TRASSIR'] },
  { id: 'speed', name: 'Скорость', options: ['1.25 Гбит/с', '10 Гбит/с', '25 Гбит/с', '40 Гбит/с'] },
  { id: 'fiber-type', name: 'Тип волокна', options: ['Многомодовый (MM)', 'Одномодовый (SM)'] },
  { id: 'connector-type', name: 'Тип коннектора', options: ['LC Duplex', 'LC Simplex', 'RJ-45 (медный SFP)'] },
  { id: 'distance', name: 'Дальность', options: ['до 550 м', 'до 10 км', 'до 20 км', 'до 40 км', 'до 80 км'] },
  { id: 'wavelength', name: 'Длина волны', options: ['850 нм', '1310 нм', '1550 нм'] },
  { id: 'temperature', name: 'Температурный режим', options: ['Commercial (0°C до 70°C)', 'Industrial (-40°C до 85°C)'] }
];

export const poeInjectorFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['Hikvision', 'Dahua', 'TP-Link', 'TRASSIR', 'Tenda', 'Wi-Tek'] },
  { id: 'poe-standard', name: 'Стандарт PoE', options: ['802.3af (до 15.4W)', '802.3at (до 30W)', '802.3bt (до 60W)', 'Passive PoE (24V)'] },
  { id: 'ports-count', name: 'Количество портов', options: ['1 порт', '4 порта', '8 портов', '16 портов'] },
  { id: 'output-power', name: 'Выходная мощность', options: ['15W', '30W', '60W', '90W', '120W'] },
  { id: 'installation', name: 'Установка', options: ['Настольный', 'На DIN-рейку', 'Настенный'] }
];

export const antennaFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['Hikvision', 'Dahua', 'TP-Link', 'MikroTik', 'Ubiquiti', 'TRASSIR'] },
  { id: 'frequency-range', name: 'Диапазон частот', options: ['2.4 ГГц', '5 ГГц', '2.4/5 ГГц (двухдиапазонная)', '4G/LTE (700-2700 МГц)'] },
  { id: 'gain', name: 'Коэффициент усиления', options: ['3 dBi', '5 dBi', '7 dBi', '8 dBi', '10 dBi', '12 dBi', '15 dBi'] },
  { id: 'connector', name: 'Тип разъема', options: ['SMA', 'RP-SMA', 'N-Type', 'TS-9', 'CRC9'] },
  { id: 'antenna-type', name: 'Тип антенны', options: ['Штыревая', 'Панельная', 'Направленная', 'Всенаправленная', 'Внутренняя'] },
  { id: 'polarization', name: 'Поляризация', options: ['Вертикальная', 'Горизонтальная', 'Двойная'] }
];

export const telemetryFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['Eijkelkamp', 'OTT HydroMet', 'Campbell Scientific', 'Sutron', 'In-Situ'] },
  { id: 'parameter', name: 'Измеряемый параметр', options: ['Уровень воды', 'Давление', 'Температура', 'Проводимость', 'pH', 'Мутность'] },
  { id: 'output-signal', name: 'Выходной сигнал', options: ['4-20 мА', '0-10 В', 'RS-232', 'RS-485 (Modbus)', 'SDI-12'] },
  { id: 'accuracy', name: 'Точность', options: ['±0.05%', '±0.1%', '±0.25%', '±0.5%'] },
  { id: 'protection', name: 'Степень защиты', options: ['IP68', 'IP67', 'IP66'] },
  { id: 'power-supply', name: 'Питание', options: ['9-36V DC', '24V AC', 'Батарейное', 'Solar Ready'] }
];

export const scudReaderFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['Hikvision', 'ZKTeco', 'PERCo', 'SIGUR', 'TRASSIR', 'Dahua', 'CAME'] },
  { id: 'technology', name: 'Технология', options: ['RFID 125 кГц (EM-Marine)', 'RFID 13.56 МГц (Mifare)', 'RFID 13.56 МГц (Desfire)', 'RFID 13.56 МГц (NFC)', 'Двухчастотный (125 кГц + 13.56 МГц)'] },
  { id: 'interface', name: 'Интерфейс', options: ['Wiegand 26/34', 'RS-485', 'OSDP', 'USB'] },
  { id: 'body-material', name: 'Материал корпуса', options: ['Пластик', 'Металл', 'Антивандальный'] },
  { id: 'ip-rating', name: 'Степень защиты', options: ['IP20', 'IP65', 'IP66', 'IP67', 'IP68'] },
  { id: 'installation', name: 'Тип установки', options: ['Накладной', 'Врезной', 'Для улицы'] },
  { id: 'led-indication', name: 'LED-индикация', options: ['да', 'нет'] },
  { id: 'sound', name: 'Звуковая индикация', options: ['да', 'нет'] },
  { id: 'keyboard', name: 'Клавиатура', options: ['да', 'нет'] }
];

export const controllerFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['Hikvision', 'iFlou', 'SIGUR', 'Dahua', 'TRASSIR', 'ZKTeco', 'PERCo', 'CAME']
  },
  {
    id: 'tip-kontrollera',
    name: 'Тип контроллера',
    options: ['Сетевой', 'Автономный']
  },
  {
    id: 'interface-podklyucheniya',
    name: 'Интерфейс подключения',
    options: ['Ethernet', 'Wi-Fi', 'USB', 'RS-485', 'нет']
  },
  {
    id: 'interface-svyazi',
    name: 'Интерфейс связи',
    options: ['RS-485', 'OSDP', 'Wiegand', 'Dallas Touch Memory']
  },
  {
    id: 'ispolnenie',
    name: 'Исполнение',
    options: ['Внутреннее', 'Уличное']
  },
  {
    id: 'stepen-zashchity',
    name: 'Степень защиты (IP)',
    options: ['IP20', 'IP66', 'IP68', 'нет']
  },
  {
    id: 'kolichestvo-tochok-prokhoda',
    name: 'Количество точек прохода',
    options: ['1', '2', '4', '8', 'нет']
  },
  {
    id: 'biometriya',
    name: 'Биометрическое считывание',
    options: ['Распознавание лиц', 'Распознавание отпечатков пальцев', 'нет']
  },
  {
    id: 'vstroennaya-klaviatura',
    name: 'Встроенная клавиатура',
    options: ['да', 'нет']
  },
  {
    id: 'osobennosti',
    name: 'Особенности',
    options: ['Встроенный блок питания', 'Поддержка USB', 'Установка на DIN-рейку', 'нет']
  }
];

export const contactlessKeyFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['ATIX', 'Dahua', 'Hikvision', 'Бастион', 'AX PRO', 'Dnake']
  },
  {
    id: 'tip-identifikatora',
    name: 'Тип идентификатора',
    options: ['Карта доступа', 'Браслет', 'Брелок']
  },
  {
    id: 'format',
    name: 'Формат / Технология',
    options: ['EM-marine', 'Mifare']
  },
  {
    id: 'osobennosti',
    name: 'Особенности',
    options: ['Карта под печать', 'Тонкая карта', 'Возможна перезапись', 'Нет']
  }
];

export const lockFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['ATIX', 'Dahua', 'Hikvision', 'Бастион']
  },
  {
    id: 'tip-zamka',
    name: 'Тип замка',
    options: ['Электромагнитный', 'Электромеханический', 'Электроригельный', 'Электрозащёлка']
  },
  {
    id: 'sila-uderzhaniya',
    name: 'Сила удержания, кг',
    options: ['60', '180', '272', '280', '350', '500', '1000']
  },
  {
    id: 'osobennosti',
    name: 'Особенности',
    options: ['Датчик состояния двери', 'Светодиодная индикация', 'Для стеклянной двери', 'Для двустворчатой двери', 'Уличное исполнение', 'Вандалозащищенный', 'Возможность открытия ключом', 'Кнопка выхода на замке', 'Блокировка кнопки выхода', 'Таймер задержки', 'Перфорированный ключ']
  },
  {
    id: 'pitanie',
    name: 'Питание',
    options: ['DC 12В', 'DC 24В']
  },
  {
    id: 'rezhim-raboty',
    name: 'Режим работы',
    options: ['NO (без питания открыт)', 'NC (без питания закрыт)']
  },
  {
    id: 'tip-ustanovki',
    name: 'Тип установки',
    options: ['Накладной', 'Врезной']
  },
  {
    id: 'tip-montazhnogo-ugolka',
    name: 'Тип монтажного уголка',
    options: ['L-образный', 'U-образный', 'ZL-образный']
  }
];

// ДОВОДЧИКИ
export const closerFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['Нора-М', 'Dahua', 'Бастион']
  },
  {
    id: 'ves-dveri',
    name: 'Вес двери, кг',
    options: ['15-60', '25-50', '25-70', '25-80', '25-120', '40-60', '40-70', '40-90', '40-100', '40-150', '50-80', '50-90', '50-110', '50-120', '60-110', '70-110', '70-130', '80-120', '80-140', '120-160', '120-170', 'до 20', 'до 30', 'до 35', 'до 50', 'до 70', 'до 90', 'до 120']
  },
  {
    id: 'klass-dovodchika',
    name: 'Класс доводчика (EN)',
    options: ['EN-2', 'EN-3', 'EN-4', 'EN1-3', 'EN2-3', 'EN2-4', 'EN2-5', 'EN2-6', 'EN3-4', 'EN3-5', 'EN4-5', 'EN4-6', 'EN5-6', 'EN6-7']
  },
  {
    id: 'tip-ustanovki',
    name: 'Тип установки',
    options: ['Накладной']
  },
  {
    id: 'protivopozharnye-dveri',
    name: 'Противопожарные двери',
    options: ['Да', 'Нет']
  },
  {
    id: 'morozostoykost',
    name: 'Морозостойкость',
    options: ['Да', 'Нет']
  },
  {
    id: 'tip-tyagi',
    name: 'Тип тяги',
    options: ['Пневматический', 'Пружинный', 'Рычажная', 'Скользящая']
  },
  {
    id: 'tsvet',
    name: 'Цвет',
    options: ['Белый', 'Графит', 'Графит (бронза)', 'Золото', 'Коричневый', 'Серебро', 'Серый', 'Черный']
  }
];