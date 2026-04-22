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
  { id: 'proizvoditeli', name: 'Производители', options: ['Micro-drive', 'Transfer', 'Алмаз'] },
  { id: 'tip_ustroystva', name: 'Тип устройства', options: ['Наземный блок', 'Погружной блок', 'Плата измерительная', 'Плата защиты', 'Плата питания', 'Датчик температуры', 'Имитатор'] },
  { id: 'napryazhenie_pitaniya', name: 'Напряжение питания', options: ['1000В', '5000В'] },
  { id: 'temperatura', name: 'Температурный режим', options: ['HT +170°C'] },
  { id: 'naznachenie', name: 'Назначение', options: ['Диагностика', 'Измерение', 'Защита', 'Питание'] }
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

export const metalDetectorFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['ЛКД', 'HIKVISION', 'TRASSIR', 'Dahua', 'Блокпост', 'Garrett', 'СКИЗЭЛ', 'iFLOW', 'Nokta']
  },
  {
    id: 'tip',
    name: 'Тип металлодетектора',
    options: ['Арочный', 'Ручной', 'Портативный', 'Стационарный', 'Двухпанельный передвижной', 'Монопанель']
  },
  {
    id: 'ispolnenie',
    name: 'Исполнение',
    options: ['арочный портативный', 'арочный стационарный', 'двухпанельный передвижной', 'монопанель стационарный', 'стационарный']
  },
  {
    id: 'zon',
    name: 'Количество зон обнаружения',
    options: ['1', '3', '4', '6', '8', '9', '12', '15', '18', '20', '33', '40']
  },
  {
    id: 'massa',
    name: 'Масса',
    options: ['200 г', '260 г', '270 г', '342 г', '365 г', '450 г', '499 г', '500 г', '21 кг', '22 кг', '28 кг', '32 кг', '35 кг', '36 кг', '40 кг', '43 кг', '44 кг', '45 кг', '52 кг', '53.5 кг', '55 кг', '64 кг', '65 кг', '69 кг']
  },
  {
    id: 'ip',
    name: 'Класс защиты IP',
    options: ['IP31', 'IP40', 'IP44', 'IP55', 'IP65']
  },
  {
    id: 'temperatura',
    name: 'Диапазон рабочих температур',
    options: ['-40°C ... +50°C', '-37°C ... +70°C', '-37°C ... +50°C', '-25°C ... +60°C', '-25°C ... +55°C', '-20°C ... +70°C', '-20°C ... +60°C', '-20°C ... +55°C', '-20°C ... +50°C', '-10°C ... +65°C', '-10°C ... +50°C', '0°C ... +55°C', '0°C ... +50°C']
  },
  {
    id: 'chastota',
    name: 'Рабочая частота',
    options: ['20 кГц', '53 кГц', '93 кГц', '95 кГц', '5.7 ... 9.6 кГц', '6 ... 9 кГц']
  },
  {
    id: 'pitanie',
    name: 'Питание / Напряжение',
    options: ['сеть 220 В', '12 В', '100...240 В', '110...240 В', '100 ... 240 В', '110 ... 220 В', '110 ... 240 В']
  },
  {
    id: 'moshchnost',
    name: 'Потребляемая мощность / ток',
    options: ['0.06 Вт', '13 Вт', '30 Вт', 'до 18 Вт', '5 мА', '0.06 А', '0.6 А']
  },
  {
    id: 'propusk',
    name: 'Пропускная способность',
    options: ['однократный проход - 100 чел/мин', 'однократный проход - 60 чел/мин', 'однократный проход - 30 чел/мин']
  },
  {
    id: 'signal',
    name: 'Сигнал тревоги',
    options: ['вибрация', 'звуковой сигнал', 'световой сигнал']
  },
  {
    id: 'selektivnost',
    name: 'Селективность',
    options: ['цветные металлы', 'черные металлы']
  },
  {
    id: 'chuvstvitelnost',
    name: 'Чувствительность',
    options: ['автоматическая', 'ручная']
  },
  {
    id: 'osobennosti',
    name: 'Особенности',
    options: ['Настройка чувствительности к металлу', 'Подсчет людей', 'Экран', 'Аккумулятор', 'Звуковая сигнализация', 'Световая сигнализация', 'Влагозащита']
  },
  {
    id: 'tsvet',
    name: 'Цвет',
    options: ['графит', 'серый', 'черный', 'белый', 'коричневый', 'серебро']
  },
  {
    id: 'dop-oborudovanie',
    name: 'Дополнительное оборудование',
    options: ['с видеокамерой и тепловизором', 'с тепловизором', 'с термодатчиком']
  }
];

export const turnstileFilters = [
  {
    id: 'brand',
    name: 'Бренд',
    options: ['TRASSIR', '3V', 'Came', 'ControlGate', 'Hikvision', 'Oxgard', 'PERCo', 'Smartec', 'ZKTeco', 'Бастион', 'Блокпост', 'Ростов-Дон']
  },
  {
    id: 'identifikator_iu',
    name: 'Идентификатор ИУ',
    options: ['NFC', 'PayPass', 'Биометрический признак', 'Карта EM-Marin', 'Карта HID', 'Карта Mifare', 'Карта RFID']
  },
  {
    id: 'tip_mehanizma',
    name: 'Тип механизма',
    options: ['Роторный', 'Створчатый']
  },
  {
    id: 'kolichestvo_zona',
    name: 'Количество зон прохода',
    options: ['1', '2']
  },
  {
    id: 'tip_ustroystva',
    name: 'Тип устройства',
    options: ['Калитка', 'Полноростовой турникет', 'Полуростовой турникет', 'Скоростной проход', 'Тумбовый турникет', 'Тумбовый турникет-трипод', 'Турникет-калитка', 'Турникет-металлодетектор', 'Турникет-трипод', 'Электронная проходная']
  },
  {
    id: 'komplektuyushchie',
    name: 'Комплектующие турникетов',
    options: ['Картоприемник', 'Крыша', 'Модуль для РТУ', 'Модуль управления', 'Основание', 'Пульт управления', 'Тумба турникета', 'Элемент механизма', 'Элемент ограждения']
  },
  {
    id: 'tip_prehrazhdayushchego_elementa',
    name: 'Тип преграждающего элемента',
    options: ['Лопасть', 'Раздвижная створка', 'Распашная створка', 'Штанга']
  },
  {
    id: 'antipanika',
    name: 'Антипаника',
    options: ['Автоматическая', 'Механическая', 'Нет']
  }
];

export const barrierFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['ЛКД', 'CAME', 'PERCo', 'HIKVISION', 'Beward', 'COMUNELLO', 'iFLOW', 'ZKTeco']
  },
  {
    id: 'temperatura',
    name: 'Диапазон рабочих температур',
    options: ['-45°C ... 60°C']
  },
  {
    id: 'ip',
    name: 'Класс защиты IP',
    options: ['IP54']
  },
  {
    id: 'moshchnost',
    name: 'Мощность',
    options: ['530 Вт']
  },
  {
    id: 'napryazhenie',
    name: 'Напряжение питания',
    options: ['220 В']
  },
  {
    id: 'proezd',
    name: 'Перекрываемый проезд',
    options: ['до 3.2 м', 'до 4.7 м']
  },
  {
    id: 'tip_pitaniya',
    name: 'Тип питания',
    options: ['AC']
  },
  {
    id: 'tip_shlagbauma',
    name: 'Тип шлагбаума',
    options: ['Автоматический', 'Промышленный', 'Стандартный']
  }
];

export const smartPanelFilters = [
  {
    id: 'diagonal',
    name: 'Диагональ экрана',
    options: ['7 дюймов', '10 дюймов']
  },
  {
    id: 'tip_linii',
    name: 'Тип линии',
    options: ['2-проводная', '4-проводная']
  },
  {
    id: 'os',
    name: 'Операционная система',
    options: ['Android 14']
  },
  {
    id: 'datchiki',
    name: 'Датчики',
    options: ['Датчик приближения', 'Датчик температуры и влажности', 'Датчик света']
  },
  {
    id: 'trevozhnye_vhody',
    name: 'Тревожные входы/выходы',
    options: ['8/1']
  },
  {
    id: 'interfeysy',
    name: 'Интерфейсы',
    options: ['USB', 'RS485', 'LAN', 'Wi-Fi 2.4 ГГц', 'Bluetooth']
  },
  {
    id: 'micro_sd',
    name: 'Поддержка Micro SD',
    options: ['до 512 Гб']
  },
  {
    id: 'protokoly',
    name: 'Протоколы',
    options: ['IPv4', 'RTSP', 'UDP', 'DNS', 'FTP', 'RTP', 'TCP', 'SIP']
  },
  {
    id: 'ustanovka',
    name: 'Тип установки',
    options: ['на стену']
  },
  {
    id: 'pitanie',
    name: 'Питание',
    options: ['48В 0.5А/PoE', '12В 2A/PoE']
  },
  {
    id: 'vyhod_pitaniya',
    name: 'Выход питания',
    options: ['12В 0.2A']
  },
  {
    id: 'temperatura',
    name: 'Рабочая температура',
    options: ['-10°C до +55°C']
  },
  {
    id: 'osobennosti',
    name: 'Особенности',
    options: ['Съемные настраиваемые механические кнопки', 'Поддержка беспроводных датчиков (Wireless 868 MHz)', 'Просмотр IP камер в мультиэкране', 'Управление PTZ']
  }
];

export const callingPanelFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['LPA', 'ЛКД', 'Болид', 'CAME', 'HIKVISION', 'EKF', 'HiWatch', 'Beward', 'Dahua', 'QTECH', 'AccordTec', 'BPT', 'ALARMICO', 'Legrand', 'Тромбон', 'BAS-IP', 'STEMAX', 'Мираж', 'Eltis', 'HostCall', 'iFLOW', 'ATIX', 'Dnake']
  },
  {
    id: 'temperatura',
    name: 'Диапазон рабочих температур',
    options: ['-50°C ... 60°C', '-50°C ... 50°C', '-45°C ... 50°C', '-40°C ... 70°C', '-40°C ... 65°C', '-40°C ... 60°C', '-40°C ... 55°C', '-40°C ... 53°C', '-40°C ... 50°C', '-40°C ... 40°C', '-35°C ... 50°C', '-30°C ... 70°C', '-30°C ... 60°C', '-30°C ... 55°C', '-30°C ... 50°C', '-20°C ... 70°C', '-20°C ... 60°C', '-20°C ... 55°C', '-10°C ... 65°C', '-10°C ... 55°C', '-10°C ... 50°C', '-10°C ... 40°C', '0°C ... 45°C', '5°C ... 40°C']
  },
  {
    id: 'ik',
    name: 'Защита от механических воздействий IK',
    options: ['IK06', 'IK07', 'IK08', 'IK09', 'IK10']
  },
  {
    id: 'ip',
    name: 'Класс защиты IP / Пылевлагозащита',
    options: ['IP32', 'IP40', 'IP54', 'IP55', 'IP56', 'IP65', 'IP66']
  },
  {
    id: 'abonenty',
    name: 'Количество абонентов',
    options: ['1', '2', '3', '4', '5', '8', '12', '20', '100', '200', '300', '500', 'Многоабонентская']
  },
  {
    id: 'massa',
    name: 'Масса',
    options: ['0.1 кг', '0.15 кг', '0.19 кг', '0.2 кг', '0.25 кг', '0.26 кг', '0.3 кг', '0.38 кг', '0.4 кг', '0.5 кг', '0.56 кг', '0.57 кг', '0.6 кг', '0.65 кг', '0.69 кг', '0.7 кг', '0.75 кг', '0.8 кг', '0.9 кг', '0.95 кг', '0.96 кг', '1 кг', '1.05 кг', '1.1 кг', '1.19 кг', '1.25 кг', '1.26 кг', '795 г', '570 г', '1100 г', '180 г']
  },
  {
    id: 'material',
    name: 'Материал корпуса',
    options: ['алюминий', 'металл', 'металл: алюминий', 'металл: нержавеющая сталь', 'металл: нержавеющая сталь AISI 304', 'металл: сталь', 'пластик', 'пластик: ABS', 'сталь', 'алюминиевый сплав']
  },
  {
    id: 'wifi',
    name: 'Wi-Fi',
    options: ['Да', 'Нет']
  },
  {
    id: 'osobennosti',
    name: 'Особенности',
    options: ['антиспуфинг', 'бокс экстренной помощи', 'датчик приближения', 'подогрев дисплея', 'с датчиком приближения', 'слот для карт microSD', 'функция распознавания лиц', 'Встроенный БУЗ', 'Дисплей сенсорный', 'Камера fisheye', 'Считыватель отпечатка пальца', 'Панель экстренного вызова', 'Модульная система', 'Регулировка громкости']
  },
  {
    id: 'peredacha',
    name: 'Передача сообщений',
    options: ['2-х проводной, 200 м', '4-х проводной, 400 м', 'проводной IP']
  },
  {
    id: 'protokoly',
    name: 'Сетевые протоколы',
    options: ['RTSP', 'SIP', 'TCP/IP', 'ONVIF', 'CGI', 'P2P', 'RTP', 'RTMP', 'SSH', 'HTTP/HTTPS']
  },
  {
    id: 'audio',
    name: 'Сжатие аудио',
    options: ['G.711a', 'G.711u', 'G.726', 'Opus', 'AAC-LD', 'AAC-LC', 'G.722.1']
  },
  {
    id: 'identifikatsiya',
    name: 'Способ идентификации',
    options: ['BLE', 'DESFire', 'Em-marine', 'Mifare', 'NFC', 'Touch Memory', 'распознавание лица', 'интерфейс RS-485', 'интерфейс Wiegand', 'интерфейс RJ45', 'интерфейс USB']
  },
  {
    id: 'montazh',
    name: 'Способ монтажа / Тип установки',
    options: ['врезной', 'встраиваемый', 'накладной', 'напольный', 'настенный', 'универсальный']
  },
  {
    id: 'tip',
    name: 'Тип вызывной панели',
    options: ['IP', 'Аналоговая', 'Гибридная']
  },
  {
    id: 'razreshenie_kamery',
    name: 'Разрешение камеры',
    options: ['1 Мп', '1.3 Мп', '2 Мп', 'CVBS', 'Без камеры']
  },
  {
    id: 'schityvatel',
    name: 'Встроенный считыватель',
    options: ['Em-Marine, Mifare', 'Mifare', 'Нет']
  },
  {
    id: 'klaviatura',
    name: 'Встроенная клавиатура',
    options: ['Без клавиатуры', 'Механическая', 'Сенсорная']
  },
  {
    id: 'rele',
    name: 'Количество реле',
    options: ['1', '2', '3', 'Нет']
  },
  {
    id: 'trevozhnye_vhody',
    name: 'Количество тревожных входов',
    options: ['1', '2', '4', 'Нет']
  },
  {
    id: 'ik_podsvetka',
    name: 'ИК-подсветка',
    options: ['Да', 'Нет']
  },
  {
    id: 'interfeysy',
    name: 'Интерфейсы',
    options: ['Bluetooth (BLE)', 'Ethernet', 'RS-485', 'USB', 'Wi-Fi', 'Wiegand']
  },
  {
    id: 'pitanie',
    name: 'Питание',
    options: ['DC 12В', 'DC 30В', 'DC 48В', 'PoE (802.3af)', 'PoE (802.3at)', 'PoE passive', 'DC 12В (от монитора)']
  }
];

export const videoMonitorFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['ЛКД', 'HIKVISION', 'EKF', 'HiWatch', 'Beward', 'Dahua', 'AccordTec', 'iFLOW', 'ATIX', 'Dnake']
  },
  {
    id: 'tip',
    name: 'Тип монитора домофона',
    options: ['IP', 'Аналоговый', 'Гибридный']
  },
  {
    id: 'diagonal',
    name: 'Диагональ экрана',
    options: ['4.3"', '7"', '8"', '10"', '10.1"']
  },
  {
    id: 'matritsa',
    name: 'Матрица экрана',
    options: ['IPS', 'TFT']
  },
  {
    id: 'razreshenie',
    name: 'Разрешение экрана',
    options: ['480×272', '1024×600', '1280x800', '2 Мп', '720p', 'CVBS']
  },
  {
    id: 'trevozhnyy_vhod',
    name: 'Тревожный вход',
    options: ['Да', 'Нет']
  },
  {
    id: 'trevozhnyy_vyhod',
    name: 'Тревожный выход',
    options: ['Да', 'Нет']
  },
  {
    id: 'interfeysy',
    name: 'Интерфейсы',
    options: ['RJ-45', 'RS-485', 'Wi-Fi']
  },
  {
    id: 'pitanie',
    name: 'Питание',
    options: ['DC 12В', 'DC 24В', 'PoE', 'PoE Passive', 'AC 100-240В']
  },
  {
    id: 'moshchnost',
    name: 'Потребляемая мощность',
    options: ['4 Вт', '6 Вт']
  },
  {
    id: 'temperatura',
    name: 'Рабочая температура',
    options: ['-10°C ... +50°C', '-10°C ... +55°C']
  },
  {
    id: 'osobennosti',
    name: 'Особенности',
    options: ['Сенсорный экран', 'Слот для SD карты', 'Встроенное реле', 'Интерком', 'Есть трубка', 'Wi-Fi', 'Блок сопряжения координатный', 'Модуль HOOK']
  }
];

export const accessoriesFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['Dahua', 'Dnake', 'Hikvision', 'ATIX', 'Beward', 'TRASSIR']
  },
  {
    id: 'tip_elementa',
    name: 'Тип элемента',
    options: ['Козырек', 'Коробка', 'Кронштейн', 'Рамка', 'Монтажная коробка', 'Панель', 'Адаптер', 'Блок питания']
  },
  {
    id: 'tip_ustanovki',
    name: 'Тип установки',
    options: ['Накладной', 'Врезной', 'Универсальный', 'Настенный']
  },
  {
    id: 'material',
    name: 'Материал',
    options: ['Пластик', 'Металл', 'Алюминий', 'Нержавеющая сталь']
  },
  {
    id: 'tsvet',
    name: 'Цвет',
    options: ['Белый', 'Черный', 'Серый', 'Серебристый', 'Коричневый']
  },
  {
    id: 'sovmestimost',
    name: 'Совместимость',
    options: ['Dahua', 'Hikvision', 'ATIX', 'Beward', 'Универсальная']
  }
];

export const securityControllerFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['Hikvision', 'Dahua', 'Axis', 'Bosch', 'Pyronix', 'Risco', 'Paradox', 'Satel', 'Jablotron', 'Ajax', 'Bolid']
  },
  {
    id: 'svyaz',
    name: 'Связь / Интерфейсы',
    options: ['Ethernet', 'Wi-Fi 2.4 ГГц', 'GPRS', '3G/4G']
  },
  {
    id: 'ustroystv_max',
    name: 'Макс. количество периферийных устройств',
    options: ['до 150', 'до 200']
  },
  {
    id: 'videokamer',
    name: 'Поддержка видеокамер',
    options: ['до 4', 'до 8', 'до 16']
  },
  {
    id: 'shifrovanie',
    name: 'Шифрование',
    options: ['AES128', 'AES256']
  },
  {
    id: 'dalnost',
    name: 'Дальность связи',
    options: ['до 2000 м (прямая видимость)', 'до 1500 м', 'до 1000 м']
  },
  {
    id: 'protokoly',
    name: 'Протоколы',
    options: ['TCP/IP', 'PPTP', 'L2TP', 'DHCP', 'UPNP', 'NTP', 'MQTT']
  },
  {
    id: 'prilozheniya',
    name: 'Поддержка приложений',
    options: ['DMSS', 'COS Pro', 'Ajax PRO', 'Hik-Connect', 'Secure']
  },
  {
    id: 'zony',
    name: 'Количество зон',
    options: ['до 32', 'до 64', 'до 128']
  },
  {
    id: 'pitanie',
    name: 'Питание',
    options: ['12 V DC, 1.5 A', '12 V DC, 2 A', '220 V AC']
  },
  {
    id: 'akb',
    name: 'Резервный аккумулятор',
    options: ['12 часов', '24 часа', '8 часов']
  },
  {
    id: 'temperatura',
    name: 'Рабочая температура',
    options: ['-10°C ~ +55°C (внутри помещения)', '-20°C ~ +50°C', '-30°C ~ +60°C (уличное исполнение)']
  },
  {
    id: 'osobennosti',
    name: 'Особенности',
    options: ['Двусторонняя связь', 'Встроенный динамик', 'Аудиовыход', 'Поддержка звонка и СМС (до 5 номеров)', 'Поддержка беспроводных устройств', 'Поддержка проводных устройств', 'Модуль расширения']
  }
];

export const alarmPowerSupplyFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['AX PRO', 'Hikvision', 'Dahua', 'Ajax', 'Bolid', 'Risco', 'Bosch']
  },
  {
    id: 'tip_ustroystva',
    name: 'Тип устройства',
    options: ['Модуль питания', 'Блок питания', 'Сменный источник питания']
  },
  {
    id: 'pitanie_vhod',
    name: 'Питание (вход)',
    options: ['4-16 VDC', '8-24 VDC', '9-15 VDC', '12 VDC', '24 VDC', '100-240 VAC', '220 VAC']
  },
  {
    id: 'pitanie_vyhod',
    name: 'Питание (выход)',
    options: ['5 VDC', '5.5 VDC', '9-15 VDC', '12 VDC', '24 VDC']
  },
  {
    id: 'tok_nagruzki',
    name: 'Ток нагрузки (выходной)',
    options: ['до 1 A', 'до 2 A', 'до 3 A', 'до 5 A', 'до 10 A']
  },
  {
    id: 'kolichestvo_vyhodov',
    name: 'Количество выходов',
    options: ['1 выход', '2 выхода', '4 выхода']
  },
  {
    id: 'zashchita',
    name: 'Защита',
    options: ['От КЗ', 'От перегрузки', 'От перегрева', 'От перенапряжения', 'От обратной полярности']
  },
  {
    id: 'korpus',
    name: 'Тип корпуса / монтаж',
    options: ['На DIN-рейку', 'В закрытый корпус', 'Открытый (плата)']
  },
  {
    id: 'temperatura',
    name: 'Рабочая температура',
    options: ['-10°C до +55°C', '-20°C до +60°C', '-30°C до +70°C']
  },
  {
    id: 'sovmestimost',
    name: 'Совместимость',
    options: ['AX PRO', 'ARC3800H', 'Hikvision', 'Dahua', 'Универсальный']
  }
];

export const detectorFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['CAME', 'PERCo', 'HIKVISION', 'HiWatch', 'TRASSIR', 'Dahua']
  },
  {
    id: 'tip',
    name: 'Тип извещателя',
    options: ['Объемный ИК', 'Объемный ИК+СВЧ', 'Точечный магнитный (геркон)', 'Вибрационный', 'Акустический (разбитие стекла)', 'Фотоэлектрический дымовой', 'Тепловой (пожарный)', 'Ручной (пожарный)', 'Охранный звуковой', 'Охранный светозвуковой']
  },
  {
    id: 'napryazhenie',
    name: 'Напряжение питания',
    options: ['9-15 В DC', '10-30 В DC', '12 В DC', '24 В DC']
  },
  {
    id: 'potreblenie',
    name: 'Потребляемый ток (дежурный)',
    options: ['до 10 мА', 'до 15 мА', 'до 20 мА', 'до 30 мА']
  },
  {
    id: 'dalnost',
    name: 'Дальность обнаружения',
    options: ['10 м', '12 м', '15 м', '20 м', '25 м']
  },
  {
    id: 'ugol',
    name: 'Угол обнаружения',
    options: ['90°', '180°', '360°']
  },
  {
    id: 'zashchita_zhivotnyh',
    name: 'Защита от животных',
    options: ['до 10 кг', 'до 20 кг', 'до 40 кг', 'Нет']
  },
  {
    id: 'temperatura',
    name: 'Рабочая температура',
    options: ['-10°C ... +55°C', '-20°C ... +55°C', '-30°C ... +55°C']
  },
  {
    id: 'ip',
    name: 'Класс защиты IP',
    options: ['IP30', 'IP40', 'IP54', 'IP65']
  },
  {
    id: 'ispolnenie',
    name: 'Исполнение',
    options: ['Внутреннее', 'Уличное', 'Взрывозащищенное']
  },
  {
    id: 'montazh',
    name: 'Тип монтажа',
    options: ['Накладной', 'Врезной', 'Потолочный', 'Настенный']
  },
  {
    id: 'tsvet',
    name: 'Цвет',
    options: ['Белый', 'Черный', 'Серый', 'Коричневый']
  },
  {
    id: 'osobennosti',
    name: 'Особенности',
    options: ['Антисаботаж (тампер)', 'Защита от вскрытия', 'Контроль отрыва от стены', 'Светодиодная индикация', 'Регулировка чувствительности', 'Память тревоги']
  }
];

export const remoteControlFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['CAME', 'PERCo', 'HIKVISION', 'HiWatch', 'TRASSIR', 'Dahua', 'AX PRO', 'AirShield', 'C.Nord', 'Livicom']
  },
  {
    id: 'chastota',
    name: 'Рабочая частота',
    options: ['433 МГц', '868 МГц']
  },
  {
    id: 'knopki',
    name: 'Количество кнопок',
    options: ['3', '4', '15', '20']
  },
  {
    id: 'dalnost',
    name: 'Дальность передачи (открытое пространство)',
    options: ['900 м', '1000 м']
  },
  {
    id: 'rfid',
    name: 'RFID-метки (считыватель карт)',
    options: ['Да', 'Нет']
  },
  {
    id: 'perestroyka',
    name: 'Перестройка рабочей частоты',
    options: ['Да', 'Нет']
  },
  {
    id: 'update',
    name: 'Удаленное обновление',
    options: ['Да', 'Нет']
  },
  {
    id: 'pitanie',
    name: 'Питание',
    options: ['4 батарейки AA', 'DC 12В', 'батарейки CR123A', 'встроенная батарея CR123A']
  },
  {
    id: 'srok',
    name: 'Срок службы батареи',
    options: ['до 3 лет', 'до 5 лет']
  },
  {
    id: 'ekran',
    name: 'Экран',
    options: ['Да', 'Нет']
  },
  {
    id: 'polzovateli',
    name: 'Количество пользователей',
    options: ['до 30']
  },
  {
    id: 'temperatura',
    name: 'Рабочая температура',
    options: ['-10°C ... +55°C (внутри помещения)']
  },
  {
    id: 'osobennosti',
    name: 'Особенности',
    options: ['Постановка/снятие с охраны', 'Домашний режим', 'Пароль', 'IC-карта', 'DESFire-карта', 'Мониторинг температуры', 'Шифрование AES128', 'Тревога низкого заряда батареи', 'Двусторонняя связь', 'SOS кнопка']
  }
];

export const repeaterFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['Hikvision', 'C.Nord', 'Dahua']
  },
  {
    id: 'protokoly',
    name: 'Протоколы',
    options: ['Tri-X', 'Cam-X']
  },
  {
    id: 'chastota',
    name: 'Рабочая частота',
    options: ['868 МГц', '433.05-434.79 МГц']
  },
  {
    id: 'pitanie',
    name: 'Питание',
    options: ['AC 100-240 V', '230 В']
  },
  {
    id: 'rezerv_pitanie',
    name: 'Резервное питание',
    options: ['АКБ LIR14500 – 3.7 В, 750 мА·ч', 'Нет']
  },
  {
    id: 'moshchnost',
    name: 'Потребляемая мощность',
    options: ['1.5 ВА']
  },
  {
    id: 'srok',
    name: 'Срок службы',
    options: ['не менее 10 лет']
  },
  {
    id: 'ip',
    name: 'Стандарт защиты IP',
    options: ['IP20']
  },
  {
    id: 'temperatura',
    name: 'Рабочая температура',
    options: ['-10°C ... +55°C', '-20°C ... +45°C']
  },
  {
    id: 'razmer',
    name: 'Размер',
    options: ['150×150×25 мм', '66×66×35 мм']
  },
  {
    id: 'ves',
    name: 'Вес',
    options: ['200 г']
  },
  {
    id: 'naznachenie',
    name: 'Назначение',
    options: ['увеличение радиуса действия беспроводных устройств']
  },
  {
    id: 'klimat',
    name: 'Климатическое исполнение',
    options: ['УХЛ4']
  },
  {
    id: 'moshchnost_peredatchika',
    name: 'Мощность передатчика',
    options: ['10 мВт']
  }
];

export const sensorFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['AX PRO', 'Dahua', 'ATIX', 'C.Nord', 'Livicom', 'HIKVISION', 'TRASSIR', 'CAME', 'PERCo']
  },
  {
    id: 'tip_datchika',
    name: 'Тип датчика',
    options: ['Движения (ИК)', 'Движения (ИК + СВЧ)', 'Движения (с камерой)', 'Открытия (магнитоконтактный)', 'Разбития стекла', 'Дыма', 'Протечки воды', 'Температуры', 'Газа', 'Уличный']
  },
  {
    id: 'podklyuchenie',
    name: 'Тип подключения',
    options: ['Беспроводной', 'Проводной']
  },
  {
    id: 'dalnost',
    name: 'Дальность обнаружения',
    options: ['10 м', '12 м', '15 м', '18 м', '20 м', '25 м']
  },
  {
    id: 'svch',
    name: 'СВЧ (микроволновый канал)',
    options: ['Есть', 'Нет']
  },
  {
    id: 'kamera',
    name: 'Встроенная камера',
    options: ['Есть', 'Нет']
  },
  {
    id: 'zhivotnye',
    name: 'Иммунитет к животным',
    options: ['До 10 кг', 'До 18 кг', 'До 20 кг', 'До 30 кг', 'До 40 кг', 'Нет']
  },
  {
    id: 'montazh',
    name: 'Тип установки',
    options: ['Накладной', 'Врезной', 'Настенный', 'Потолочный']
  },
  {
    id: 'zazor',
    name: 'Рабочий зазор (для магнитоконтактных)',
    options: ['до 10 мм', 'до 18 мм', 'до 20 мм', 'до 40 мм', 'до 52 мм', 'до 76 мм']
  },
  {
    id: 'pitanie',
    name: 'Питание',
    options: ['От аккумулятора', '12 В', 'Требуется', 'Не требуется']
  },
  {
    id: 'ip',
    name: 'Класс защиты IP',
    options: ['IP30', 'IP41', 'IP54', 'IP55', 'IP65', 'IP66', 'IP67', 'IP68']
  },
  {
    id: 'temperatura',
    name: 'Рабочая температура',
    options: ['-10°C ... +50°C', '-20°C ... +50°C', '-25°C ... +55°C', '-30°C ... +50°C', '-30°C ... +55°C']
  },
  {
    id: 'tsvet',
    name: 'Цвет',
    options: ['Белый', 'Черный', 'Серый', 'Коричневый']
  },
  {
    id: 'osobennosti',
    name: 'Особенности',
    options: ['Тампер (защита от вскрытия)', 'Антисаботаж', 'Контроль отрыва от стены', 'Светодиодная индикация', 'Регулировка чувствительности', 'Память тревоги']
  }
];

export const moduleFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['C.Nord', 'AirShield', 'Hikvision', 'Dahua', 'AX PRO']
  },
  {
    id: 'tip_modulya',
    name: 'Тип модуля',
    options: ['Модуль интеграции', 'Адаптер Ethernet', 'Модуль расширения', 'Модуль ввода/вывода', 'Радиомодуль']
  },
  {
    id: 'trevozhnye_vhody',
    name: 'Тревожные входы',
    options: ['2 (1 для сигнализации, 1 для защиты от взлома)']
  },
  {
    id: 'vyhodnaya_moshchnost',
    name: 'Выходная мощность',
    options: ['3.3 В, до 10 мА']
  },
  {
    id: 'pitanie',
    name: 'Питание',
    options: ['3 батареи CR123A']
  },
  {
    id: 'srok_sluzhby',
    name: 'Срок службы батарей',
    options: ['5 лет', '4 года (при импульсном типе)']
  },
  {
    id: 'zashchita',
    name: 'Защита',
    options: ['Тампер (вскрытие)', 'От перегрева', 'От перемещения (3-осевой акселерометр)']
  },
  {
    id: 'temperatura_izmerenie',
    name: 'Измерение температуры',
    options: ['-15°C ... +65°C']
  },
  {
    id: 'shifrovanie',
    name: 'Шифрование',
    options: ['AES128']
  },
  {
    id: 'svyaz',
    name: 'Связь',
    options: ['Двусторонняя']
  },
  {
    id: 'temperatura',
    name: 'Рабочая температура',
    options: ['-10°C ... +55°C (внутри помещения)']
  },
  {
    id: 'osobennosti',
    name: 'Особенности',
    options: ['Тревога при вскрытии', 'Тревога при перегреве', 'Тревога при перемещении', 'Мониторинг температуры', 'Двусторонняя связь', 'Шифрование AES128']
  }
];

export const relayFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['C.Nord', 'Hikvision', 'Dahua', 'AX PRO', 'AirShield']
  },
  {
    id: 'tip_rele',
    name: 'Тип реле',
    options: ['Слаботочное', 'Силовое']
  },
  {
    id: 'trevozhnye_vhody',
    name: 'Тревожные входы',
    options: ['1 (НО/НЗ, для противокражной сигнализации)']
  },
  {
    id: 'trevozhnye_vyhody',
    name: 'Тревожные выходы',
    options: ['1 (НО/НЗ, 0-36 В DC, ≤5 А)', '1 (НО/НЗ, 100-240 В AC, ≤13 А)']
  },
  {
    id: 'pitanie',
    name: 'Питание',
    options: ['7-24 В DC', '100-240 В AC']
  },
  {
    id: 'zashchita',
    name: 'Защита',
    options: ['От перегрева']
  },
  {
    id: 'svyaz',
    name: 'Связь',
    options: ['Двусторонняя']
  },
  {
    id: 'shifrovanie',
    name: 'Шифрование',
    options: ['AES128']
  },
  {
    id: 'temperatura',
    name: 'Рабочая температура',
    options: ['-10°C ... +55°C (внутри помещения)']
  },
  {
    id: 'razmer',
    name: 'Размер',
    options: ['39×33×19 мм']
  },
  {
    id: 'osobennosti',
    name: 'Особенности',
    options: ['Обнаружение напряжения', 'Защита от перегрева', 'Двусторонняя связь', 'Шифрование AES128']
  }
];

export const socketFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['C.Nord', 'AirShield', 'Dahua', 'LIVI', 'Hikvision']
  },
  {
    id: 'tok_max',
    name: 'Максимальный ток',
    options: ['7A', '16A']
  },
  {
    id: 'napryazhenie',
    name: 'Напряжение',
    options: ['230 В AC', '100-240 В AC']
  },
  {
    id: 'chastota',
    name: 'Рабочая частота',
    options: ['868 МГц']
  },
  {
    id: 'dalnost',
    name: 'Дальность передачи (открытое пространство)',
    options: ['до 1600 м']
  },
  {
    id: 'monitoring',
    name: 'Мониторинг',
    options: ['Напряжение', 'Ток', 'Температура', 'Мощность']
  },
  {
    id: 'zashchita',
    name: 'Защита',
    options: ['От перегрева', 'От перегрузки по току', 'От перенапряжения']
  },
  {
    id: 'rezhim',
    name: 'Режимы работы',
    options: ['Бистабильный', 'Импульсный', 'Термостат']
  },
  {
    id: 'upravlenie',
    name: 'Управление',
    options: ['Кнопка на корпусе', 'Удалённое (по радиоканалу)']
  },
  {
    id: 'indikatsiya',
    name: 'Индикация',
    options: ['Светодиодная']
  },
  {
    id: 'obnovlenie',
    name: 'Обновление ПО',
    options: ['Удалённое (через интернет)']
  },
  {
    id: 'shifrovanie',
    name: 'Шифрование',
    options: ['AES128']
  },
  {
    id: 'pprch',
    name: 'Псевдослучайная перестройка частоты (ППРЧ)',
    options: ['Есть']
  },
  {
    id: 'poterya_svyazi',
    name: 'Информирование о потере связи',
    options: ['Да']
  },
  {
    id: 'razmer',
    name: 'Размер',
    options: ['115×66×30 мм', '52×52×82 мм']
  },
  {
    id: 'ves',
    name: 'Вес',
    options: ['83 г']
  },
  {
    id: 'material',
    name: 'Материал корпуса',
    options: ['Поликарбонат']
  },
  {
    id: 'temperatura',
    name: 'Рабочая температура',
    options: ['-10°C ... +55°C']
  }
];

export const mountingCabinetFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['Mastermann', 'Мастер']
  },
  {
    id: 'razmer',
    name: 'Размер (Ш×В×Г)',
    options: [
      '220×270×140 мм',
      '280×330×140 мм',
      '290×340×160 мм',
      '290×390×190 мм',
      '300×300×150 мм',
      '300×300×220 мм',
      '300×400×150 мм',
      '300×400×220 мм',
      '335×417×200 мм',
      '350×400×140 мм',
      '360×560×190 мм',
      '400×500×220 мм',
      '400×500×250 мм',
      '400×600×220 мм',
      '400×600×250 мм',
      '405×587×260 мм',
      '600×600×210 мм',
      '600×600×250 мм',
      '600×800×250 мм',
      '600×800×300 мм',
      '648×630×262 мм',
      '800×1000×300 мм',
      '600×1200×300 мм'
    ]
  },
  {
    id: 'poleznaya_glubina',
    name: 'Полезная глубина',
    options: ['95 мм', '165 мм', '195 мм', '255 мм']
  },
  {
    id: 'material',
    name: 'Материал',
    options: ['Металл', 'Композит']
  },
  {
    id: 'tsvet',
    name: 'Цвет',
    options: ['RAL 7035 (серый)']
  },
  {
    id: 'zamki',
    name: 'Количество замков',
    options: ['1', '2', '3']
  },
  {
    id: 'master_kluch',
    name: 'Мастер-ключ',
    options: ['Да', 'Нет']
  },
  {
    id: 'montazhnaya_plata',
    name: 'Монтажная плата',
    options: ['Да', 'Нет']
  },
  {
    id: 'germovvody',
    name: 'Гермовводы',
    options: ['MG-25 (2 шт)', 'MG-25 (5 шт)', 'Нет']
  },
  {
    id: 'usilennye_petli',
    name: 'Усиленные петли',
    options: ['Да', 'Нет']
  },
  {
    id: 'dvernoy_uplotnitel',
    name: 'Дверной уплотнитель',
    options: ['Да', 'Нет']
  },
  {
    id: 'ik',
    name: 'Защита IK',
    options: ['IK10', 'Нет']
  },
  {
    id: 'radioprozrachny',
    name: 'Радиопрозрачный корпус',
    options: ['Да', 'Нет']
  },
  {
    id: 'korroziya',
    name: 'Не подвержен коррозии',
    options: ['Да', 'Нет']
  },
  {
    id: 'ves',
    name: 'Вес',
    options: ['2 кг', '2.5 кг', '3 кг', '3.8 кг', '4 кг', '4.5 кг', '5 кг', '5.5 кг', '6 кг', '6.3 кг', '7.4 кг', '9.5 кг', '10 кг', '10.8 кг', '11 кг', '11.5 кг', '21 кг', '23 кг', '30 кг', '33 кг', '45 кг']
  }
];

export const climateCabinetFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['Mastermann']
  },
  {
    id: 'razmer',
    name: 'Размер (Ш×В×Г)',
    options: [
      '360×560×190 мм',
      '400×500×220 мм',
      '400×500×250 мм',
      '400×600×220 мм',
      '400×600×250 мм',
      '405×587×260 мм',
      '600×600×210 мм',
      '600×600×250 мм',
      '600×800×250 мм',
      '600×800×300 мм',
      '600×1200×300 мм',
      '645×625×260 мм',
      '800×1000×300 мм'
    ]
  },
  {
    id: 'material',
    name: 'Материал',
    options: ['Металл', 'Композит']
  },
  {
    id: 'ventilyatsiya',
    name: 'Тип вентиляции',
    options: ['Активная (с вентилятором)', 'Пассивная (с решетками)']
  },
  {
    id: 'uteplitel',
    name: 'Утеплитель',
    options: ['Да', 'Нет']
  },
  {
    id: 'nagrevatel',
    name: 'Нагреватель',
    options: ['50 Вт', '75 Вт', '100 Вт', '150 Вт', '250 Вт', 'Нет']
  },
  {
    id: 'termorele',
    name: 'Термореле',
    options: ['Да', 'Нет']
  },
  {
    id: 'rele_predstarta',
    name: 'Реле предстарта',
    options: ['Да', 'Нет']
  },
  {
    id: 'rozetka',
    name: 'Розетка',
    options: ['Да', 'Нет']
  },
  {
    id: 'avtomat',
    name: 'Автоматический выключатель',
    options: ['Да', 'Нет']
  },
  {
    id: 'ventilyator',
    name: 'Вентилятор',
    options: ['Да', 'Нет']
  },
  {
    id: 'ik',
    name: 'Защита IK',
    options: ['IK10', 'Нет']
  },
  {
    id: 'ip',
    name: 'Класс защиты IP',
    options: ['IP54', 'IP66', 'Нет']
  },
  {
    id: 'tsvet',
    name: 'Цвет',
    options: ['RAL 7035 (серый)']
  },
  {
    id: 'ves',
    name: 'Вес',
    options: ['5 кг', '7 кг', '8 кг', '10.3 кг', '10.8 кг', '11.3 кг', '11.8 кг', '12.3 кг', '12.8 кг', '16.5 кг', '23 кг', '32 кг', '45.8 кг', '46.3 кг']
  }
];

export const rackCabinetFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['Mastermann', 'RackMann']
  },
  {
    id: 'montazh',
    name: 'Тип монтажа',
    options: ['Настенный', 'Напольный']
  },
  {
    id: 'vysota_u',
    name: 'Высота (U)',
    options: ['6U', '9U', '12U', '15U', '22U', '32U', '42U', '47U']
  },
  {
    id: 'razmer',
    name: 'Размер (Ш×В×Г)',
    options: [
      '600×350×600 мм',
      '600×450×600 мм',
      '600×450×450 мм',
      '600×600×600 мм',
      '600×600×800 мм',
      '600×600×1000 мм',
      '600×600×1200 мм',
      '600×800×600 мм',
      '600×800×800 мм',
      '600×800×1000 мм',
      '600×800×1200 мм',
      '600×1000×600 мм',
      '600×1000×800 мм',
      '600×1000×1000 мм',
      '600×1000×1200 мм',
      '600×1200×600 мм',
      '600×1200×800 мм',
      '600×1200×1000 мм',
      '600×1200×1200 мм',
      '800×800×800 мм',
      '800×800×1000 мм',
      '800×800×1200 мм',
      '800×1000×800 мм',
      '800×1000×1000 мм',
      '800×1000×1200 мм',
      '800×1200×800 мм',
      '800×1200×1000 мм',
      '800×1200×1200 мм'
    ]
  },
  {
    id: 'perednyaya_dver',
    name: 'Передняя дверь',
    options: ['Перфорированная', 'Перфорированная двойная', 'Стеклянная', 'Глухая']
  },
  {
    id: 'zadnyaya_stenka',
    name: 'Задняя стенка',
    options: ['Перфорированная', 'Перфорированная двойная', 'Глухая']
  },
  {
    id: 'material',
    name: 'Материал',
    options: ['Металл']
  },
  {
    id: 'tsvet',
    name: 'Цвет',
    options: ['Черный', 'RAL 7035 (серый)']
  }
];

export const cabinetAccessoriesFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['Mastermann']
  },
  {
    id: 'tip_aksessuara',
    name: 'Тип аксессуара',
    options: [
      'Вентиляторный блок',
      'L-направляющие',
      'Полка консольная',
      'Полка раздвижная',
      'Полка статическая',
      'Фальшпанель',
      'Органайзер горизонтальный',
      'Панель ВРУ',
      'Кабельный ввод'
    ]
  },
  {
    id: 'vysota_u',
    name: 'Высота (U)',
    options: ['1U', '2U', '3U']
  },
  {
    id: 'glubina_shkafa',
    name: 'Глубина шкафа',
    options: ['250 мм', '350 мм', '367 мм', '352 мм', '500 мм', '567 мм', '600 мм', '702 мм', '737 мм', '800 мм', '902 мм', '937 мм', '1000 мм', '1200 мм']
  },
  {
    id: 'nagruzka',
    name: 'Нагрузка',
    options: ['25 кг', '50 кг', '100 кг']
  },
  {
    id: 'ventilyatory',
    name: 'Количество вентиляторов',
    options: ['2', '4']
  },
  {
    id: 'termostat',
    name: 'Термостат',
    options: ['Да', 'Нет']
  },
  {
    id: 'vyklyuchatel',
    name: 'Выключатель',
    options: ['Да', 'Нет']
  },
  {
    id: 'predohranitel',
    name: 'Предохранитель',
    options: ['Да', 'Нет']
  },
  {
    id: 'material',
    name: 'Материал',
    options: ['Оцинкованная сталь', 'Перфорированный металл']
  },
  {
    id: 'tsvet',
    name: 'Цвет',
    options: ['RAL 7035 (серый)', 'Черный']
  }
];

export const enclosureMedicalFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['Mastermann']
  },
  {
    id: 'tip',
    name: 'Тип',
    options: ['Щит', 'Бокс', 'Распределительная коробка', 'Аптечный шкаф']
  },
  {
    id: 'tip_dvercy',
    name: 'Тип дверцы (для аптечных)',
    options: ['Глухая металлическая', 'Прозрачная', 'Не применимо']
  },
  {
    id: 'montazh',
    name: 'Тип монтажа',
    options: ['Настенный', 'Встраиваемый', 'На DIN-рейку']
  },
  {
    id: 'material',
    name: 'Материал',
    options: ['Металл', 'Пластик', 'Металл (холоднокатаная сталь)']
  },
  {
    id: 'stepen_zashchity',
    name: 'Степень защиты IP',
    options: ['IP20', 'IP30', 'IP40', 'IP54', 'IP55', 'IP65', 'IP66']
  },
  {
    id: 'vysota_u',
    name: 'Высота (U)',
    options: ['1U', '2U', '3U', '4U', '6U', '9U', '12U', '15U', '22U', '32U', '42U', '47U']
  },
  {
    id: 'polki',
    name: 'Полки',
    options: ['Регулируемые', 'С бортиками', 'Нет']
  },
  {
    id: 'zamok',
    name: 'Замок',
    options: ['Да', 'Нет']
  },
  {
    id: 'uplotnitel',
    name: 'Уплотнитель двери',
    options: ['Да', 'Нет']
  },
  {
    id: 'zashchita_ot_vzloma',
    name: 'Защита от взлома',
    options: ['Да', 'Нет']
  },
  {
    id: 'prozrachnaya_kryshka',
    name: 'Прозрачная крышка',
    options: ['Да', 'Нет']
  },
  {
    id: 'pokrytie',
    name: 'Покрытие',
    options: ['Порошковое (антикоррозийное)']
  },
  {
    id: 'razmer',
    name: 'Размер (Ш×В×Г)',
    options: [
      '300×400×150 мм',
      '350×450×150 мм',
      '400×500×150 мм',
      '450×550×150 мм',
      '500×600×150 мм'
    ]
  },
  {
    id: 'tsvet',
    name: 'Цвет',
    options: ['RAL 7035 (серый)', 'Белый', 'Черный']
  }
];

export const hddFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['Western Digital', 'Seagate', 'Toshiba', 'Kingston', 'Samsung', 'Crucial', 'Transcend']
  },
  {
    id: 'tip',
    name: 'Тип накопителя',
    options: ['HDD', 'SSD', 'SSHD', 'Внешний HDD', 'Внешний SSD']
  },
  {
    id: 'obem',
    name: 'Объём',
    options: ['128 ГБ', '256 ГБ', '512 ГБ', '1 ТБ', '2 ТБ', '3 ТБ', '4 ТБ', '6 ТБ', '8 ТБ', '10 ТБ', '12 ТБ', '14 ТБ', '16 ТБ', '18 ТБ', '20 ТБ']
  },
  {
    id: 'skorost',
    name: 'Скорость вращения',
    options: ['5400 об/мин', '7200 об/мин', '10000 об/мин', '15000 об/мин', 'SSD (без вращения)']
  },
  {
    id: 'kesh',
    name: 'Кэш-память',
    options: ['64 МБ', '128 МБ', '256 МБ', '512 МБ', '1 ГБ', '2 ГБ']
  },
  {
    id: 'interfeys',
    name: 'Интерфейс',
    options: ['SATA 3 Гбит/с', 'SATA 6 Гбит/с', 'SAS', 'USB 3.0', 'USB 3.1', 'USB 3.2', 'M.2 SATA', 'M.2 NVMe', 'PCIe']
  },
  {
    id: 'form_factor',
    name: 'Форм-фактор',
    options: ['2.5"', '3.5"', 'M.2 2280', 'M.2 2242', 'Внешний (портативный)']
  },
  {
    id: 'naznachenie',
    name: 'Назначение',
    options: ['Для видеонаблюдения', 'Для серверов', 'Для NAS', 'Для ПК', 'Для ноутбуков', 'Для игр', 'Для бэкапов']
  },
  {
    id: 'nagruzka',
    name: 'Рабочая нагрузка (TB/год)',
    options: ['до 180 ТБ/год', 'до 300 ТБ/год', 'до 550 ТБ/год', 'до 1000 ТБ/год']
  },
  {
    id: 'mtbf',
    name: 'Наработка на отказ (MTBF)',
    options: ['1 млн часов', '1.5 млн часов', '2 млн часов', '2.5 млн часов']
  },
  {
    id: 'garantiya',
    name: 'Гарантия',
    options: ['1 год', '2 года', '3 года', '5 лет']
  }
];

// ТЕПЛОВИЗОРЫ - Камеры тепловизионные
export const thermalCameraFilters = [
  {
    id: 'razreshenie_matritsy',
    name: 'Разрешение матрицы',
    options: ['256×192']
  },
  {
    id: 'fokus_thermal',
    name: 'Фокусное расстояние тепловизионного объектива',
    options: ['2 мм', '3.5 мм', '7 мм', '10 мм']
  },
  {
    id: 'ugol_obzora_thermal',
    name: 'Угол обзора тепловизионный',
    options: ['17.3°×13.1°', '24°×18°', '50.6°×37.8°', '87.8°×63.8°']
  },
  {
    id: 'detection_chelovek',
    name: 'Обнаружение человека',
    options: ['83 м', '146 м', '292 м', '417 м']
  },
  {
    id: 'detection_transport',
    name: 'Обнаружение транспорта',
    options: ['222 м', '389 м', '778 м', '1111 м']
  },
  {
    id: 'recognition_chelovek',
    name: 'Распознавание человека',
    options: ['21 м', '38 м', '75 м', '107 м']
  },
  {
    id: 'identification_chelovek',
    name: 'Идентификация человека',
    options: ['11 м', '19 м', '38 м', '54 м']
  },
  {
    id: 'fokus_visible',
    name: 'Фокусное расстояние видимого света',
    options: ['2 мм', '4 мм', '8 мм', '12 мм']
  },
  {
    id: 'ugol_obzora_visible',
    name: 'Угол обзора видимого света',
    options: ['22°×16.6°', '33.4°×25°', '71.2°×52°', '94°×72°']
  },
  {
    id: 'ik_dalnost',
    name: 'ИК-подсветка (видимый свет)',
    options: ['до 30 м', 'до 35 м']
  },
  {
    id: 'szhatie',
    name: 'Сжатие видео',
    options: ['H.265', 'H.264', 'MJPEG']
  },
  {
    id: 'analitika',
    name: 'Видеоаналитика',
    options: [
      'Обнаружение возгорания',
      'Автоматическое слежение за горячими и холодными объектами',
      'Обнаружение курения',
      'Обнаружение использования телефона',
      'Интеллектуальная сигнализация с прожектором и динамиком',
      'Охрана периметра',
      'Классификация человек/транспортное средство',
      'Отслеживание холодных/горячих точек'
    ]
  },
  {
    id: 'temperatura_izmerenie',
    name: 'Измерение температуры',
    options: ['-20°C ... +150°C']
  },
  {
    id: 'microsd',
    name: 'Слот для microSD',
    options: ['до 256 ГБ']
  },
  {
    id: 'audio',
    name: 'Аудио',
    options: ['Аудиовход (1)', 'Аудиовыход (1)']
  },
  {
    id: 'trevoga',
    name: 'Тревожные входы/выходы',
    options: ['1/1', '2/2']
  },
  {
    id: 'ethernet',
    name: 'Ethernet',
    options: ['RJ45 10M/100M']
  },
  {
    id: 'rs485',
    name: 'RS-485',
    options: ['1 порт']
  },
  {
    id: 'wifi',
    name: 'Wi-Fi',
    options: ['2.4 ГГц, 150 Мбит/с, до 150 м']
  },
  {
    id: '4g',
    name: '4G модуль',
    options: ['Есть']
  },
  {
    id: 'solnechnaya_batareya',
    name: 'Солнечная батарея',
    options: ['Есть']
  },
  {
    id: 'pitanie',
    name: 'Питание',
    options: ['DC12V', 'PoE']
  },
  {
    id: 'moshchnost',
    name: 'Потребляемая мощность',
    options: ['5.3 Вт', '14 Вт']
  },
  {
    id: 'temperatura',
    name: 'Рабочая температура',
    options: ['-30°C ... +60°C']
  },
  {
    id: 'ip',
    name: 'Степень защиты IP',
    options: ['IP67']
  },
  {
    id: 'zashchita',
    name: 'Защита',
    options: ['От перенапряжения до 6 кВ', 'ESD: контакт 6 кВ / воздух 8 кВ']
  },
  {
    id: 'ves',
    name: 'Вес',
    options: ['0.85 кг', '0.9 кг', '1.4 кг']
  }
];

// ТЕПЛОВИЗОРЫ - Ручные (промышленные, строительные, пожарные)
export const handheldThermalFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['Guide Sensmart']
  },
  {
    id: 'razreshenie_matritsy',
    name: 'Разрешение матрицы',
    options: ['120×90', '192×144', '256×192', '320×240', '384×288', '384×288 (12 мкм)', '480×360', '640×480', '640×512', '640×480 (12 мкм)', '1024×768', '1280×1024']
  },
  {
    id: 'chuvstvitelnost',
    name: 'Чувствительность (NETD)',
    options: ['30 мК', '40 мК', '45 мК', '50 мК', '60 мК']
  },
  {
    id: 'kadry',
    name: 'Частота кадров',
    options: ['9 Гц', '15 Гц', '25 Гц', '30 Гц']
  },
  {
    id: 'temperatura',
    name: 'Температурный диапазон',
    options: ['-20°C ... +120°C', '-20°C ... +150°C', '-20°C ... +400°C', '-20°C ... +550°C', '-20°C ... +1500°C', '-20°C ... +2000°C']
  },
  {
    id: 'ip',
    name: 'Класс защиты IP',
    options: ['IP54', 'IP67']
  },
  {
    id: 'ves',
    name: 'Вес',
    options: ['около 20 г']
  },
  {
    id: 'vremya_raboty',
    name: 'Время работы',
    options: ['>5 часов', '>8 часов', '16 часов']
  },
  {
    id: 'svyaz',
    name: 'Связь и интерфейсы',
    options: ['NFC', '5G', 'Обновление OTA']
  },
  {
    id: 'osobennosti',
    name: 'Особенности',
    options: ['5-дюймовый сенсорный экран', 'NFC передача данных', 'Обновление OTA', '128 ГБ хранилища', 'Автофокус', 'Угол обзора 56°', 'Угол обзора 25°']
  }
];

// ТЕПЛОВИЗОРЫ - Мобильные (для смартфона)
export const mobileThermalFilters = [
  {
    id: 'proizvoditeli',
    name: 'Производители',
    options: ['Guide Sensmart']
  },
  {
    id: 'razreshenie_matritsy',
    name: 'Разрешение матрицы',
    options: ['120×90', '256×192']
  },
  {
    id: 'temperatura',
    name: 'Температурный диапазон',
    options: ['-20°C ... +120°C']
  },
  {
    id: 'ugol_obzora',
    name: 'Угол обзора',
    options: ['25°', '56°']
  },
  {
    id: 'fokus',
    name: 'Фокусное расстояние',
    options: ['3.2 мм', '7 мм']
  },
  {
    id: 'avtofokus',
    name: 'Автофокус',
    options: ['Да']
  },
  {
    id: 'moshchnost',
    name: 'Потребляемая мощность',
    options: ['<150 мВт']
  },
  {
    id: 'ves',
    name: 'Вес',
    options: ['около 20 г']
  }
  ];