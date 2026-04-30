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
import { dahuaSensors } from './data/signalizatsiya/sensors-dahua';
import { dahuaModules } from './data/signalizatsiya/modules-dahua';
import { dahuaRelays } from './data/signalizatsiya/relays-dahua';
import { dahuaSockets } from './data/signalizatsiya/sockets-dahua';
import { dahuaSmartPanels } from './data/domofoniya/smart-panels-dahua';
import { dahuaVideoMonitors } from './data/domofoniya/video-monitors-dahua';
import { dahuaCallingPanels } from './data/domofoniya/calling-panels-dahua';
import { domofoniyaAccessories } from './data/domofoniya/accessories-dahua';
import { dahuaKits } from './data/domofoniya/kits-dahua';
import { dahuaTurnstiles } from './data/skud/turnstiles';
import { dahuaTerminals } from './data/skud/terminals-dahua';
import { dahuaAccessControllers } from './data/skud/controllers-dahua';
import { dahuaReaders } from './data/skud/readers-dahua';
import { dahuaLocks } from './data/skud/locks-dahua';
import { dahuaDoorClosers } from './data/skud/door-closers-dahua';
import { dahuaExitButtons } from './data/skud/exit-buttons-dahua';
import { dahuaContactlessKeys } from './data/skud/contactless-keys-dahua'; // <-- импорт

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
  ...dahuaAccessories,            // ← сетевые аксессуары (оставить)
  ...dahuaWirelessBridges,
  ...dahuaControllers,
  ...dahuaPowerSupplies,
  ...dahuaDetectors,
  ...dahuaRemoteControls,
  ...dahuaRepeaters,
  ...dahuaSensors,
  ...dahuaModules,
  ...dahuaRelays,
  ...dahuaSockets,
  ...dahuaSmartPanels,
  ...dahuaVideoMonitors,
  ...dahuaCallingPanels,
  ...domofoniyaAccessories,
  ...dahuaKits,
  ...dahuaTurnstiles,
  ...dahuaTerminals,
  ...dahuaAccessControllers,
  ...dahuaReaders,
  ...dahuaLocks,
  ...dahuaDoorClosers,
  ...dahuaExitButtons,
  ...dahuaContactlessKeys,       // ← добавить аксессуары домофонии (вместо дубликата)
];