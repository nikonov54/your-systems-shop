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
  { id: 'mimo-tech', name: 'Технология MIMO', options: ['2x2 MIMO', '3x3 MIMO', '4x4 MIMO'] },
  { id: 'network-ports', name: 'Сетевые порты', options: ['1 x 1G Ethernet', '1 x 2.5G Ethernet', '1 x 10G Ethernet', 'SFP+ порт'] },
  { id: 'poe-power', name: 'Питание PoE', options: ['PoE (802.3af)', 'PoE+ (802.3at)', 'PoE++ (802.3bt)', 'DC адаптер'] },
  { id: 'max-clients', name: 'Макс. количество клиентов', options: ['до 100', 'до 256', 'до 512', 'свыше 1000'] },
  { id: 'special-features', name: 'Особенности', options: ['MLO (Multi-Link Operation)', '4096-QAM', 'Ширина канала 320 МГц', 'Облачное управление', 'Бесшовная Mesh-сеть'] }
];

export const sfpFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['Hikvision', 'Dahua', 'TP-Link', 'MikroTik', 'Modultech', 'SNR'] },
  { id: 'form-factor', name: 'Форм-фактор', options: ['SFP', 'SFP+', 'SFP28', 'QSFP+', 'QSFP28', 'QSFP-DD'] },
  { id: 'data-rate-sfp', name: 'Скорость передачи', options: ['100 Мбит/с', '1.25 Гбит/с', '10 Гбит/с', '25 Гбит/с', '40 Гбит/с', '100 Гбит/с'] },
  { id: 'transmission-distance', name: 'Дальность передачи', options: ['до 550 м', 'до 2 км', 'до 10 км', 'до 20 км', 'до 40 км', 'до 80 км', 'свыше 100 км'] },
  { id: 'fiber-type', name: 'Тип волокна', options: ['Многомодовое (MMF)', 'Одномодовое (SMF)', 'Медный кабель (RJ-45)'] },
  { id: 'connectors-sfp', name: 'Разъемы', options: ['LC (Duplex)', 'LC (Simplex/WDM)', 'SC', 'RJ-45'] },
  { id: 'wavelength', name: 'Длина волны', options: ['850 нм', '1310 нм', '1550 нм', 'WDM (1310/1550)', 'CWDM', 'DWDM'] },
  { id: 'special-sfp', name: 'Особенности', options: ['DDM (Цифровая диагностика)', 'Индустриальный (-40...+85°C)', 'Горячая замена'] }
];

export const poeInjectorFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['Hikvision', 'Dahua', 'Osnovo', 'Amatek', 'Zyxel', 'SNR', 'Tenda', 'Ubiquiti', 'QTECH', 'ComOnyx'] },
  { id: 'poe-standard', name: 'Стандарт PoE', options: ['Passive PoE', 'IEEE 802.3af (15.4 Вт)', 'IEEE 802.3at (30 Вт)', 'IEEE 802.3bt (60-90 Вт)', 'Ultra PoE (до 95 Вт)'] },
  { id: 'data-rate-poe', name: 'Скорость портов', options: ['10/100 Мбит/с', '10/100/1000 Мбит/с (Gigabit)', '2.5 Гбит/с', '5 Гбит/с', '10 Гбит/с'] },
  { id: 'ports-count-poe', name: 'Количество портов PoE', options: ['1', '2', '4'] },
  { id: 'input-voltage', name: 'Входное напряжение', options: ['AC 100-240В', 'DC 12-24В', 'DC 48-56В'] },
  { id: 'execution-poe', name: 'Исполнение', options: ['Внутреннее', 'Уличное (IP66/67)', 'Индустриальное (DIN-рейка)', 'Сплиттер'] },
  { id: 'special-poe', name: 'Особенности', options: ['Встроенный БП', 'Грозозащита', 'Защита от КЗ', 'LED индикация питания/PoE', 'Крепление на стену'] }
];

export const antennaFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['Micro-Drive', 'Антэкс', 'Крокс', 'Laird', 'Pulse'] },
  { id: 'antenna-type', name: 'Тип антенны', options: ['Встраиваемая (OEM)', 'Направленная (Панельная)', 'Всенаправленная', 'Магнитная', 'Автомобильная'] },
  { id: 'frequency-range', name: 'Диапазон частот', options: ['4G/LTE (790-2700 МГц)', 'Wi-Fi (2.4/5 ГГц)', '3G/UMTS', 'GSM', 'GNSS (GPS/ГЛОНАСС)'] },
  { id: 'gain-db', name: 'Усиление, dBi', options: ['до 5 dBi', '5 - 10 dBi', '10 - 15 dBi', '15 - 20 dBi', 'свыше 20 dBi'] },
  { id: 'connector-type', name: 'Тип разъема', options: ['U.FL (IPEX)', 'SMA-male', 'SMA-female', 'N-type', 'CRC9/TS9', 'Без разъема (под пайку)'] },
  { id: 'mimo-support', name: 'Поддержка MIMO', options: ['да (2x2)', 'да (4x4)', 'нет'] },
  { id: 'installation', name: 'Способ установки', options: ['На печатную плату', 'Клеевая основа', 'На кронштейн', 'На мачту'] }
];

export const telemetryFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['Micro-Drive', 'Сибнефтеавтоматика', 'Борец', 'Новомет', 'Ижевскнефтемаш'] },
  { id: 'module-type', name: 'Тип модуля', options: ['Погружной блок (ПБ)', 'Наземный блок (НБ)', 'Комплект ТМС', 'Скважинный контроллер'] },
  { id: 'parameters-monitoring', name: 'Контролируемые параметры', options: ['Давление в скважине', 'Температура обмоток ЭЦН', 'Вибрация ЭЦН', 'Ток утечки', 'Расход жидкости'] },
  { id: 'data-interface', name: 'Интерфейс передачи', options: ['RS-485 (Modbus RTU)', 'Power Line Communication (PLC)', 'GPRS/LTE', 'Спутниковая связь'] },
  { id: 'protection-class', name: 'Класс защиты', options: ['IP68 (Погружное)', 'Взрывозащищенное (Ex)', 'Коррозионностойкое'] },
  { id: 'operating-temp', name: 'Рабочая температура', options: ['до +120°C', 'до +150°C', 'до +175°C'] },
  { id: 'max-pressure', name: 'Макс. давление', options: ['до 25 МПа', 'до 40 МПа', 'до 60 МПа'] }
];

export const scudReaderFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['Hikvision', 'Dahua', 'Iron Logic', 'Proxway', 'Parsec', 'Sigur', 'Tantalos', 'Pironix', 'ZKTeco'] }, // ДОБАВЛЕНО ZKTeco
  { id: 'card-standard', name: 'Стандарт карт', options: ['Em-Marine (125 кГц)', 'Mifare (13.56 МГц)', 'HID', 'Indala', 'NFC', 'BLE (Bluetooth)'] },
  { id: 'reading-type', name: 'Тип чтения', options: ['Бесконтактный', 'Кодовая панель', 'Биометрия (Отпечаток)', 'Распознавание лиц', 'QR-код'] },
  { id: 'interface-reader', name: 'Интерфейс подключения', options: ['Wiegand (26/34)', 'RS-485', 'OSDP', 'USB'] },
  { id: 'execution-reader', name: 'Исполнение', options: ['Внутреннее', 'Уличное (IP65+)', 'Вандалозащищенное (IK10)', 'Врезное', 'Накладное'] },
  { id: 'reading-distance', name: 'Дальность считывания', options: ['до 5 см', '5-10 см', 'Дальнего действия (до 10м)', 'Активные метки'] },
  { id: 'special-reader', name: 'Особенности', options: ['Со встроенным контроллером', 'Световая индикация', 'Звуковой зуммер', 'Антитемпер'] }
];
