import type { DestinationData, PackageDetail } from './types';
import { lehLadakhData } from './destinations/leh-ladakh';
import { GoaData } from './destinations/goa';
import { JaipurData } from './destinations/jaipur';
import { KeralaBackwatersData } from './destinations/kerala-backwaters';
import { RanthamboreData } from './destinations/ranthambore';
import { VaranasiData } from './destinations/varanasi';
import { DarjeelingData } from './destinations/darjeeling';
import { HampiData } from './destinations/hampi';
import { lehLadakhPackages } from './packages/leh-ladakh';
import { goaPackages } from './packages/goa';
import { jaipurPackages } from './packages/jaipur';
import { keralaBackwatersPackages } from './packages/kerala-backwaters';
import { ranthamborePackages } from './packages/ranthambore';
import { varanasiPackages } from './packages/varanasi';
import { darjeelingPackages } from './packages/darjeeling';
import { hampiPackages } from './packages/hampi';

export const packageData: Record<string, PackageDetail> = {
  ...lehLadakhPackages,
  ...goaPackages,
  ...jaipurPackages,
  ...keralaBackwatersPackages,
  ...ranthamborePackages,
  ...varanasiPackages,
  ...darjeelingPackages,
  ...hampiPackages,
};
export const dataById: Record<string, DestinationData> = {
  '1': lehLadakhData,
  '2': GoaData,
  '3': JaipurData,
  '4': KeralaBackwatersData,
  '5': RanthamboreData,
  '6': VaranasiData,
  '7': DarjeelingData,
  '8': HampiData,
};