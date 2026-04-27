// app/lib/products.ts
import { climateCabinets } from './data/shkafy/climate-cabinets';
import { switches } from './data/setevoe-oborudovanie/switches';
import { ver2Cabinets } from './data/shkafy/ver2-cabinets';
import { ver3Cabinets } from './data/shkafy/ver3-cabinets';
import { mountingEnclosures } from './data/shkafy/mounting-enclosures';
import { medicalCabinets } from './data/shkafy/medical-cabinets';
import { telecommunicationRacks } from './data/shkafy/telecommunication-racks';
import { cabinetAccessories } from './data/shkafy/cabinet-accessories';
import { microdriveRouters } from './data/setevoe-oborudovanie/microdrive-routers';
import { poeInjectors } from './data/setevoe-oborudovanie/poe-injectors';
import { antennas } from './data/setevoe-oborudovanie/antennas';
import { telemetry } from './data/setevoe-oborudovanie/telemetry';
import { dahuaSwitches } from './data/setevoe-oborudovanie/switches-dahua';
import { dahuaSfpModules } from './data/setevoe-oborudovanie/sfp-modules-dahua';
import { dahuaAccessories } from './data/setevoe-oborudovanie/accessories-dahua';
import { dahuaWirelessBridges } from './data/setevoe-oborudovanie/wi-fi-access-points';
import { dahuaControllers } from './data/signalizatsiya/controllers-dahua';
import { dahuaPowerSupplies } from './data/signalizatsiya/power-supplies-dahua';
import { dahuaDetectors } from './data/signalizatsiya/detectors-dahua';
import { dahuaRemoteControls } from './data/signalizatsiya/remote-controls-dahua';
import { dahuaRepeaters } from './data/signalizatsiya/repeaters-dahua';
import { dahuaSensors } from './data/signalizatsiya/sensors-dahua';   // <-- импорт

export const mockProducts = [
  ...climateCabinets,
  ...switches,
  ...dahuaSwitches,
  ...ver2Cabinets,
  ...ver3Cabinets,
  ...mountingEnclosures,
  ...medicalCabinets,
  ...telecommunicationRacks,
  ...cabinetAccessories,
  ...microdriveRouters,
  ...poeInjectors,
  ...antennas,
  ...telemetry,
  ...dahuaSfpModules,
  ...dahuaAccessories,
  ...dahuaWirelessBridges,
  ...dahuaControllers,
  ...dahuaPowerSupplies,
  ...dahuaDetectors,
  ...dahuaRemoteControls,
  ...dahuaRepeaters,
  ...dahuaSensors,     // <-- добавлено
];

export type { Product } from '@/app/context/StoreContext';
