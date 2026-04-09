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

// ДАННЫЕ ИЗ PDF (КРОНШТЕЙНЫ)
export const bracketFilters = [
  { id: 'proizvoditeli', name: 'Производители', options: ['KadrOn', 'BOXFORCAM', 'Hikvision', 'HiWatch', 'Dahua'] },
  { id: 'tip-kronshteyna', name: 'Тип кронштейна', options: ['Настенный', 'Потолочный', 'Угловой', 'Универсальный', 'Для столба'] }
];
