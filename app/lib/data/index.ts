// app/lib/data/index.ts
import { Product } from './types';

// Videonablyudenie (только те, где есть товары)
import { cameras } from './videonablyudenie/cameras';
import { recorders } from './videonablyudenie/recorders';
// import { microphones } from './videonablyudenie/microphones';
// import { mountingBoxes } from './videonablyudenie/mounting-boxes';
// import { brackets } from './videonablyudenie/brackets';

// Teplovizory (только те, где есть товары)
import { thermalCameras } from './teplovizory/thermal-cameras';
// import { handheldThermal } from './teplovizory/handheld-thermal';
// import { mobileThermal } from './teplovizory/mobile-thermal';

// HDD (нет товаров)
// import { hddForCctv } from './hdd/hdd-for-cctv';
// import { hddForServers } from './hdd/hdd-for-servers';
// import { ssd } from './hdd/ssd';
// import { nasHdd } from './hdd/nas-hdd';
// import { externalHdd } from './hdd/external-hdd';

// Setevoe oborudovanie (нет товаров)
// import { switches } from './setevoe-oborudovanie/switches';
// import { routers } from './setevoe-oborudovanie/routers';
// import { wifiAccessPoints } from './setevoe-oborudovanie/wi-fi-access-points';
// import { sfpModules } from './setevoe-oborudovanie/sfp-modules';
// import { poeInjectors } from './setevoe-oborudovanie/poe-injectors';
// import { antennas } from './setevoe-oborudovanie/antennas';
// import { telemetry } from './setevoe-oborudovanie/telemetry';

// SKUD (есть товары)
import { readers } from './skud/readers';
import { skudControllers } from './skud/controllers';
import { contactlessKeys } from './skud/contactless-keys';
// import { locks } from './skud/locks';
// import { doorClosers } from './skud/door-closers';
// import { metalDetectors } from './skud/metal-detectors';
// import { turnstiles } from './skud/turnstiles';
// import { barriers } from './skud/barriers';
// import { xRayScanners } from './skud/x-ray-scanners';

// Domofoniya (нет товаров)
// import { smartPanels } from './domofoniya/smart-panels';
// import { videoMonitors } from './domofoniya/video-monitors';
// import { callingPanels } from './domofoniya/calling-panels';
// import { domofoniyaAccessories } from './domofoniya/accessories';

// Signalizatsiya (нет товаров)
// import { alarmControllers } from './signalizatsiya/alarm-controllers';
// import { powerSupplies } from './signalizatsiya/power-supplies';
// import { detectors } from './signalizatsiya/detectors';
// import { remoteControls } from './signalizatsiya/remote-controls';
// import { repeaters } from './signalizatsiya/repeaters';
// import { sensors } from './signalizatsiya/sensors';
// import { alarmModules } from './signalizatsiya/modules';
// import { relays } from './signalizatsiya/relays';
// import { alarmSockets } from './signalizatsiya/sockets';

// Shkafy (есть товары)
// import { mountingEnclosures } from './shkafy/mounting-enclosures';
import { climateCabinets } from './shkafy/climate-cabinets';
// import { telecommunicationRacks } from './shkafy/telecommunication-racks';
// import { serverRacks } from './shkafy/server-racks';
// import { medicalCabinets } from './shkafy/medical-cabinets';
// import { cabinetAccessories } from './shkafy/cabinet-accessories';

export const mockProducts: Product[] = [
  ...cameras,
  ...recorders,
  // ...microphones,
  // ...mountingBoxes,
  // ...brackets,
  ...thermalCameras,
  // ...handheldThermal,
  // ...mobileThermal,
  // ...hddForCctv,
  // ...hddForServers,
  // ...ssd,
  // ...nasHdd,
  // ...externalHdd,
  // ...switches,
  // ...routers,
  // ...wifiAccessPoints,
  // ...sfpModules,
  // ...poeInjectors,
  // ...antennas,
  // ...telemetry,
  ...readers,
  ...skudControllers,
  ...contactlessKeys,
  // ...locks,
  // ...doorClosers,
  // ...metalDetectors,
  // ...turnstiles,
  // ...barriers,
  // ...xRayScanners,
  // ...smartPanels,
  // ...videoMonitors,
  // ...callingPanels,
  // ...domofoniyaAccessories,
  // ...alarmControllers,
  // ...powerSupplies,
  // ...detectors,
  // ...remoteControls,
  // ...repeaters,
  // ...sensors,
  // ...alarmModules,
  // ...relays,
  // ...alarmSockets,
  // ...mountingEnclosures,
  ...climateCabinets
  // ...telecommunicationRacks,
  // ...serverRacks,
  // ...medicalCabinets,
  // ...cabinetAccessories
];

export type { Product };