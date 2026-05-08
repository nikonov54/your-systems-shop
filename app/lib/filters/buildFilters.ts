// app/lib/filters/buildFilters.ts
import type { Product } from '@/app/context/StoreContext';

export interface FilterOption {
  value: string;
  count: number;
}

export interface FilterGroup {
  id: string;
  name: string;
  options: FilterOption[];
}

export function splitSpecValue(value: string): string[] {
  return value
    .split(/\s*[,;]\s*|\s*\+\s*|\s+и\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);
}

const SYNONYM_MAP: Record<string, { pattern: RegExp; replacement: string }[]> = {
  'Матрица': [
    { pattern: /(\d+\s*мп|\(.*\)|каждый\s*канал|оба\s*модуля)/i, replacement: '' },
    { pattern: /1\/2\.8"/, replacement: '1/2.8"' },
    { pattern: /1\/1\.8"/, replacement: '1/1.8"' },
    { pattern: /1\/2\.7"/, replacement: '1/2.7"' },
    { pattern: /1\/2\.9"/, replacement: '1/2.9"' },
    { pattern: /1\/3"/, replacement: '1/3"' },
    { pattern: /1\/2\.5"/, replacement: '1/2.5"' },
  ],
  'Макс. разрешение': [
    { pattern: /^(детальный|обзорный|фикс\.|pt)\s*:?\s*/i, replacement: '' },
    { pattern: /\s*\(.*\)/, replacement: '' },
    { pattern: /1920\s*[xх×]\s*1080|1080p|full\s*hd/i, replacement: '2 Мп' },
    { pattern: /2304\s*[xх×]\s*1296|3\s*мп/i, replacement: '3 Мп' },
    { pattern: /2560\s*[xх×]\s*1440|2688\s*[xх×]\s*1520|2560\s*[xх×]\s*1920/i, replacement: '4 Мп' },
    { pattern: /2592\s*[xх×]\s*1944|2880\s*[xх×]\s*1620|2960\s*[xх×]\s*1668|5\s*мп/i, replacement: '5 Мп' },
    { pattern: /3840\s*[xх×]\s*2160|4096\s*[xх×]\s*1860|5376\s*[xх×]\s*1520|8\s*мп|4к|4k/i, replacement: '8 Мп' },
    { pattern: /4480\s*[xх×]\s*2512|12\s*мп/i, replacement: '12 Мп' },
  ],
  'Объектив': [
    { pattern: /фиксированный|фикс\./i, replacement: 'Фиксированный' },
    { pattern: /моторизованный/i, replacement: 'Моторизованный' },
    { pattern: /вариофокальный/i, replacement: 'Вариофокальный' },
    { pattern: /.*/, replacement: '' },
  ],
  'Тип подсветки': [
    { pattern: /\d+\s*м\b.*/i, replacement: '' },
    { pattern: /\(\d+\s*led\)/i, replacement: '' },
    { pattern: /ик\s*(подсветка)?/i, replacement: 'ИК-подсветка' },
    { pattern: /(тепл\S*\s*свет|led|бел\S*\s*свет)/i, replacement: 'LED-подсветка' },
    { pattern: /full\-?color|полноцвет/i, replacement: 'Full‑color' },
    { pattern: /smart\s*dual\s*light|двойная\s*подсветка/i, replacement: 'Smart Dual Light' },
    { pattern: /.*/, replacement: '' },
  ],
  // Дальность подсветки – оставляем только строки, содержащие «м», без изменений
  'Дальность подсветки': [
    { pattern: /^(?!.*\d+\s*м).*$/, replacement: '' },
  ],
  'Защита': [
    { pattern: /ip67/i, replacement: 'IP67' },
    { pattern: /ip66/i, replacement: 'IP66' },
    { pattern: /ip68/i, replacement: 'IP68' },
    { pattern: /ip65/i, replacement: 'IP65' },
    { pattern: /ip54/i, replacement: 'IP54' },
    { pattern: /ip40/i, replacement: 'IP40' },
    { pattern: /ik10/i, replacement: 'IK10' },
    { pattern: /ik08/i, replacement: 'IK08' },
    { pattern: /грозозащита|tvs\s*\d*\s*в?/i, replacement: 'Грозозащита' },
  ],
  'Материал корпуса': [
    { pattern: /крышка/i, replacement: '' },
    { pattern: /металл/, replacement: 'Металл' },
    { pattern: /пластик/, replacement: 'Пластик' },
    { pattern: /композит/, replacement: 'Композит' },
  ],
  'WDR': [
    { pattern: /120\s*дб/, replacement: '120 дБ' },
    { pattern: /dwdr/, replacement: 'DWDR' },
    { pattern: /wdr(?!\s*\d)/, replacement: 'WDR' },
  ],
  'Аналитика': [
    { pattern: /eis|электронная\s*стабилизация/i, replacement: '' },
    { pattern: /eptz/i, replacement: '' },
    { pattern: /ois/i, replacement: '' },
    { pattern: /pir-датчик/i, replacement: '' },
    { pattern: /dhop/i, replacement: '' },

    { pattern: /acupick|smart\s*search|quick\s*pick|быстрый\s*поиск|быстрый\s*выбор/i, replacement: 'Интеллектуальный поиск' },
    { pattern: /smd(\s*(plus|\d))?|обнаружение\s*движения|motion\s*detect|детектор\s*движения/i, replacement: 'Детекция движения' },
    { pattern: /обнаружение\s*(человека|людей)|human\s*detect|people\s*detect/i, replacement: 'Детекция человека' },
    { pattern: /обнаружение\s*(транспорт|тс|автомобил|vehicle|car)|\bтс\b|\btc\b/i, replacement: 'Детекция транспорта' },
    { pattern: /охрана\s*периметр|perimeter\s*protection|вторжение|пересечение\s*линии|контроль\s*(зоны|огражден)|интрузия/i, replacement: 'Охрана периметра' },
    { pattern: /автослежение|auto\s*tracking|smart\s*tracking|lite\s*tracking|tracking/i, replacement: 'Автослежение' },
    { pattern: /активное\s*сдерживание|active\s*deterrence|deterrence/i, replacement: 'Активное сдерживание' },
    { pattern: /(?:детектор|детекция|распознавание|захват)\s*лиц.*|face\s*detect.*|facial.*/i, replacement: 'Детектор лиц' },
    { pattern: /подсчёт\s*людей|people\s*count|^люди$/i, replacement: 'Подсчёт людей' },
    { pattern: /тепловая\s*карта|heat\s*map/i, replacement: 'Тепловая карта' },
    { pattern: /классификац/i, replacement: 'Классификация объектов' },
    { pattern: /оставлен|abandoned|пропавш/i, replacement: 'Оставленные / пропавшие предметы' },
    { pattern: /патрулирование|auto\s*patrol/i, replacement: 'Патрулирование' },
    { pattern: /приватные\s*(зоны|маски)/i, replacement: 'Приватные зоны' },
    { pattern: /roi/i, replacement: 'Область интереса (ROI)' },
    { pattern: /видео\s*метаданные|video\s*metadata/i, replacement: 'Видео метаданные' },
    { pattern: /smart\s*(illumination|подсветка)|смарт\s*подсветка/i, replacement: 'Умная подсветка' },
    { pattern: /контроль\s*времени\s*пребывания/i, replacement: 'Контроль времени пребывания' },
    { pattern: /ai\s*ssa/i, replacement: 'Адаптивная сцена (AI SSA)' },
    { pattern: /ai\s*xinghan/i, replacement: 'Технология Xinghan (AI)' },
  ],
  'Аудио': [
    { pattern: /^g\.\d+.*/, replacement: '' },
    { pattern: /^pcm.*/, replacement: '' },
    { pattern: /aac/, replacement: '' },
    { pattern: /mp3/, replacement: '' },

    { pattern: /встроен(?:ный|ные)\s*микрофон.*|сдвоенный\s*микрофон.*/, replacement: 'Встроенный микрофон' },
    { pattern: /встроенный\s*динамик|громкоговоритель|сирена|динамик/i, replacement: 'Встроенный динамик' },
    { pattern: /двусторонняя\s*связь|two-way\s*audio/i, replacement: 'Двусторонняя связь' },

    { pattern: /аудиовход\s*\/\s*аудиовыход|1\s*(вход|вх)\s*\(line\s*in\)|1\s*(выход|вых)\s*\(line\s*out\)|1\s*(вход|вх)\s*\/\s*1\s*(выход|вых).*/i, replacement: 'Аудиовход/Аудиовыход' },
    { pattern: /^1\/1$/, replacement: 'Аудиовход/Аудиовыход' },
    { pattern: /аудиовход|аудиовыход|^1\s*выход$|^1\s*вход$/i, replacement: 'Аудиовход/Аудиовыход' },

    { pattern: /нет|отсутствует/i, replacement: 'Нет' },
  ],
  'Влажность': [
    { pattern: /≤95%/i, replacement: '≤95%' },
  ],
  'Диапазон PTZ': [
    { pattern: /\d+°\s*\(автопереворот\s*180°\)/i, replacement: 'Наклон с автопереворотом' },
    { pattern: /^\d+°$/, replacement: '' },
    { pattern: /панорама\s*0°\s*[-–]\s*360°\s*(\(непрерывно\)|endless)/i, replacement: 'Панорама непрерывная (360°)' },
    { pattern: /панорама\s*0°\s*[-–]\s*(345|355|285|326)°/i, replacement: 'Панорама ограниченная (до 355°)' },
    { pattern: /панорама\s*0°\s*[-–]\s*360°\s*\(не\s*endless\)/i, replacement: 'Панорама ограниченная (360° фикс.)' },
    { pattern: /фикс\.\s*ручная\s*:?\s*панорама\s*0°\s*[-–]\s*\d+°/i, replacement: 'Панорама ручная' },
    { pattern: /фикс\.\с*:?\s*панорама\s*0°\s*[-–]\s*\d+°/i, replacement: 'Панорама ручная' },
    { pattern: /(?:рт|pt)\s*(?:эл\.?)?\s*:?\s*панорама\s*0°\s*[-–]\s*\d+°/i, replacement: 'Панорама электрическая (PTZ)' },
    { pattern: /наклон\s*[-–]?\s*\d+°?\s*[-–]\s*\d+°\s*\(автопереворот\s*180°\)/i, replacement: 'Наклон с автопереворотом' },
    { pattern: /наклон\s*[-–]?\s*\d+°?.*/i, replacement: 'Наклон стандартный' },
    { pattern: /детальный.*панорама\s*0°\s*[-–]\s*360°\s*(\(непрерывно\)|endless)/i, replacement: 'Панорама непрерывная (PTZ)' },
  ],
  'Питание': [
    { pattern: /\b\d+\s*A\b.*/i, replacement: '' },
    { pattern: /адаптер\s*в\с*комплекте/i, replacement: '' },
    { pattern: /зарядка\s*usb.*/i, replacement: '' },
    { pattern: /usb\s*type-c.*/i, replacement: '' },
    { pattern: /lifepo4.*/i, replacement: '' },
    { pattern: /li-ion.*/i, replacement: '' },
    { pattern: /солнечная\s*панель.*/i, replacement: '' },
    { pattern: /встроенный\s*(li-ion|lifepo4).*/i, replacement: '' },
    { pattern: /вт·ч.*/i, replacement: '' },
    { pattern: /802\.3at/i, replacement: '' },
    { pattern: /12\s*в\s*dc/i, replacement: '12 В DC' },
    { pattern: /24\s*в\s*(dc|ac)/i, replacement: '24 В DC/AC' },
    { pattern: /poe\+?\s*\(?802\.3at\)?/i, replacement: 'PoE+' },
    { pattern: /poe\s*\(?802\.3af\)?/i, replacement: 'PoE' },
    { pattern: /epoe/i, replacement: 'ePoE' },
    { pattern: /.*/, replacement: '' },
  ],
  'Сжатие видео': [
    { pattern: /h\.265\+/, replacement: 'H.265+' },
    { pattern: /h\.265/, replacement: 'H.265' },
    { pattern: /h\.264\+/, replacement: 'H.264+' },
    { pattern: /h\.264/, replacement: 'H.264' },
    { pattern: /mjpeg/, replacement: 'MJPEG' },
  ],
  'Wi-Fi': [
    { pattern: /да|есть|поддержка|wi-fi/, replacement: 'Да' },
    { pattern: /нет|отсутствует/, replacement: 'Нет' },
  ],
  'Сеть': [
    { pattern: /rj-45|ethernet/, replacement: 'Ethernet RJ-45' },
    { pattern: /wi-fi/, replacement: 'Wi-Fi' },
    { pattern: /bluetooth/, replacement: 'Bluetooth' },
  ],
  'Мин. освещение': [
    { pattern: /^(детальный|обзорный|канал)\s*:?\s*/i, replacement: '' },
    { pattern: /\s*\(.*\)/, replacement: '' },
    { pattern: /^(н\/д|—|нет|отсутствует)$/i, replacement: '' },
    { pattern: /^0\s*лк.*/i, replacement: '' },
    { pattern: /@f\d+\.?\d*/i, replacement: '' },
  ],
};

export function normalizeFragment(key: string, fragment: string): string[] {
  const lowerFragment = fragment.toLowerCase().trim();
  if (/^\s*[\(\)\[\]]*\s*$/.test(lowerFragment) || lowerFragment.length < 2) return [];

  const rules = SYNONYM_MAP[key];
  if (!rules) {
    const cleaned = fragment
      .replace(/^[\(\)\[\].,;]+/, '')
      .replace(/[\(\)\[\].,;]+$/, '')
      .trim();
    return cleaned ? [cleaned.charAt(0).toUpperCase() + cleaned.slice(1)] : [];
  }

  const results: string[] = [];
  let matched = false;
  for (const rule of rules) {
    if (rule.pattern.test(lowerFragment)) {
      if (rule.replacement) {
        results.push(rule.replacement);
      }
      matched = true;
      break;
    }
  }

  if (!matched) {
    const cleaned = fragment
      .replace(/^[\(\)\[\].,;]+/, '')
      .replace(/[\(\)\[\].,;]+$/, '')
      .trim();
    if (cleaned) results.push(cleaned.charAt(0).toUpperCase() + cleaned.slice(1));
  }

  return results;
}

function extractTechnicalFeatures(products: Product[]): FilterGroup | null {
  const techMap = new Map<string, number>();

  products.forEach(p => {
    const raw = p.specs?.['Аналитика'];
    if (!raw) return;
    const fragments = splitSpecValue(raw);

    if (fragments.some(frag => /eis|электронная\s*стабилизация/i.test(frag))) {
      techMap.set('Электронная стабилизация', (techMap.get('Электронная стабилизация') || 0) + 1);
    }
    if (fragments.some(frag => /eptz/i.test(frag))) {
      techMap.set('Электронное PTZ', (techMap.get('Электронное PTZ') || 0) + 1);
    }
    if (fragments.some(frag => /ois/i.test(frag))) {
      techMap.set('Оптическая стабилизация', (techMap.get('Оптическая стабилизация') || 0) + 1);
    }
    if (fragments.some(frag => /pir-датчик/i.test(frag))) {
      techMap.set('PIR-датчик', (techMap.get('PIR-датчик') || 0) + 1);
    }
  });

  if (techMap.size === 0) return null;

  return {
    id: 'tech_features',
    name: 'Технические особенности',
    options: Array.from(techMap.entries())
      .map(([value, count]) => ({ value, count }))
      .sort((a, b) => a.value.localeCompare(b.value, 'ru')),
  };
}

export function buildFilters(products: Product[]): FilterGroup[] {
  if (!products.length) return [];

  // Подготавливаем товары: объединяем аудио, освещение, разделяем подсветку
  const mergedProducts = products.map(p => {
    const newSpecs = { ...p.specs };

    // Аудио
    if (newSpecs['Аудио входы/выходы']) {
      const audioIO = newSpecs['Аудио входы/выходы'];
      const existingAudio = newSpecs['Аудио'] || '';
      newSpecs['Аудио'] = existingAudio ? `${existingAudio}, ${audioIO}` : audioIO;
    }

    // Мин. освещение
    const colorLow = newSpecs['Мин. освещение (цвет)'] || '';
    const bwLow = newSpecs['Мин. освещение (ч/б)'] || '';
    const combinedLow = [colorLow, bwLow].filter(Boolean).join(', ');
    if (combinedLow) {
      newSpecs['Мин. освещение'] = combinedLow;
    }

    // Подсветка → Тип подсветки + Дальность подсветки
    const rawIllumination = newSpecs['Подсветка'];
    if (rawIllumination) {
      const fragments = splitSpecValue(rawIllumination);
      const typeSet = new Set<string>();
      const distSet = new Set<string>();

      fragments.forEach(frag => {
        // Тип подсветки
        const typeNorms = normalizeFragment('Тип подсветки', frag);
        typeNorms.forEach(t => typeSet.add(t));
        // Дальность подсветки – оставляем как есть (потом сгруппируем)
        const lower = frag.toLowerCase().trim();
        if (/\d+\s*м/.test(lower)) {
          distSet.add(frag.trim()); // сохраняем оригинальный фрагмент
        }
      });

      if (typeSet.size > 0) newSpecs['Тип подсветки'] = Array.from(typeSet).join(', ');
      if (distSet.size > 0) newSpecs['Дальность подсветки'] = Array.from(distSet).join(', ');
    }

    // Удаляем старые ключи
    delete newSpecs['Аудио входы/выходы'];
    delete newSpecs['Мин. освещение (цвет)'];
    delete newSpecs['Мин. освещение (ч/б)'];
    delete newSpecs['Подсветка'];

    // Дополнительная нормализация для типа подсветки
    if (newSpecs['Тип подсветки']) {
      const typeFrags = splitSpecValue(newSpecs['Тип подсветки']);
      const typeSet = new Set<string>();
      typeFrags.forEach(f => {
        normalizeFragment('Тип подсветки', f).forEach(t => typeSet.add(t));
      });
      newSpecs['Тип подсветки'] = Array.from(typeSet).join(', ');
    }

    return { ...p, specs: newSpecs };
  });

  const groups: FilterGroup[] = [];

  // Производители
  const brandCounts = new Map<string, number>();
  mergedProducts.forEach(p => {
    if (p.brand) {
      const b = p.brand.trim();
      brandCounts.set(b, (brandCounts.get(b) || 0) + 1);
    }
  });
  if (brandCounts.size > 0) {
    groups.push({
      id: 'brand',
      name: 'Производители',
      options: Array.from(brandCounts.entries())
        .map(([value, count]) => ({ value, count }))
        .sort((a, b) => a.value.localeCompare(b.value, 'ru')),
    });
  }

  // Спецификации (исключаем ненужные)
  const specKeys = new Set<string>();
  mergedProducts.forEach(p => {
    if (p.specs) {
      Object.keys(p.specs).forEach(k => {
        if (
          k !== 'Аудио входы/выходы' &&
          k !== 'Мин. освещение (цвет)' &&
          k !== 'Мин. освещение (ч/б)' &&
          k !== 'Подсветка' &&
          k !== 'Гарантия' &&
          k !== 'Масса нетто'
        ) {
          specKeys.add(k);
        }
      });
    }
  });

  for (const key of Array.from(specKeys).sort()) {
    const normCounts = new Map<string, number>();

    if (key === 'Дальность подсветки') {
      // Специальная обработка: извлекаем числа, группируем по диапазонам
      mergedProducts.forEach(p => {
        const raw = p.specs?.[key];
        if (!raw) return;
        const fragments = splitSpecValue(raw);
        const ranges = new Set<string>();
        fragments.forEach(frag => {
          const match = frag.match(/(\d+(?:\.\d+)?)\s*м/);
          if (match) {
            const num = parseFloat(match[1]);
            let range = '';
            if (num <= 20) range = 'до 20 м';
            else if (num <= 30) range = 'до 30 м';
            else if (num <= 40) range = 'до 40 м';
            else if (num <= 50) range = 'до 50 м';
            else if (num <= 60) range = 'до 60 м';
            else if (num <= 80) range = 'до 80 м';
            else if (num <= 100) range = 'до 100 м';
            else range = 'свыше 100 м';
            ranges.add(range);
          }
        });
        ranges.forEach(r => normCounts.set(r, (normCounts.get(r) || 0) + 1));
      });
    } else {
      // Обычная нормализация
      mergedProducts.forEach(p => {
        const raw = p.specs?.[key];
        if (!raw) return;
        const fragments = splitSpecValue(raw);
        const productNormSet = new Set<string>();
        fragments.forEach(frag => {
          const norms = normalizeFragment(key, frag);
          norms.forEach(norm => productNormSet.add(norm));
        });
        productNormSet.forEach(norm => {
          normCounts.set(norm, (normCounts.get(norm) || 0) + 1);
        });
      });
    }

    if (normCounts.size === 0) continue;

    const sortedOptions = Array.from(normCounts.entries())
      .map(([value, count]) => ({ value, count }))
      .sort((a, b) => {
        const numA = parseFloat(a.value.match(/(\d+(?:\.\d+)?)/)?.[1] || '0');
        const numB = parseFloat(b.value.match(/(\d+(?:\.\d+)?)/)?.[1] || '0');
        if (numA !== numB) return numA - numB;
        return a.value.localeCompare(b.value, 'ru');
      });

    groups.push({
      id: key,
      name: key,
      options: sortedOptions,
    });
  }

  const techGroup = extractTechnicalFeatures(mergedProducts);
  if (techGroup) {
    const analyticsIndex = groups.findIndex(g => g.id === 'Аналитика');
    if (analyticsIndex >= 0) {
      groups.splice(analyticsIndex, 0, techGroup);
    } else {
      groups.push(techGroup);
    }
  }

  return groups;
}