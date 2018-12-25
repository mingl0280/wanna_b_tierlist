import {Primary} from "./Primary";
import {Secondary} from "./Secondary";
import {Melee} from "./Melee";
import {Alert} from "./Alert";
import {Archwing} from "./Archwing";
import {Archgun} from "./Archgun";
import { Archmelee } from "./Archmelee";
import {Companion} from "./Companion";
import {SentinelWeapon} from "./SentinelWeapon";

export class Database {
  primaries: Primary[];
  secondaries: Secondary[];
  melees: Melee[];
  archwings: Archwing[];
  archguns: Archgun[];
  archmelees: Archmelee[];
  companions: Companion[];
  sent_weps: SentinelWeapon[];

  version: string;
  alerts: Alert[];
}
