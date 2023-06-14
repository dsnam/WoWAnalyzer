import ITEMS from 'common/ITEMS';
import SPELLS from 'common/SPELLS';
import Spell from 'common/SPELLS/Spell';
import TALENTS from 'common/TALENTS/shaman';

export const STORMSTRIKE_CAST_SPELLS = [TALENTS.STORMSTRIKE_TALENT, SPELLS.WINDSTRIKE_CAST];

export const STORMSTRIKE_DAMAGE_SPELLS = [
  SPELLS.STORMSTRIKE_DAMAGE,
  SPELLS.STORMSTRIKE_DAMAGE_OFFHAND,
  SPELLS.WINDSTRIKE_DAMAGE,
  SPELLS.WINDSTRIKE_DAMAGE_OFFHAND,
];

export const MOLTEN_ASSAULT_SCALING = [0, 3, 6];

export const ESSENTIAL_EXTRACTION_EFFECT_BY_RANK = [
  0, -25, -26, -27, -28, -29, -30, -31, -33, -34, -35, -36, -37, -38, -39, -40,
];

export const MERGE_SPELLS = [
  {
    SpellIds: [SPELLS.MELEE.id, SPELLS.WINDLASH.id, SPELLS.WINDLASH_OFFHAND.id],
    NewSpell: SPELLS.MELEE.id,
  },
  {
    SpellIds: [SPELLS.STORMSTRIKE_DAMAGE.id, SPELLS.STORMSTRIKE_DAMAGE_OFFHAND.id],
    NewSpell: TALENTS.STORMSTRIKE_TALENT.id,
  },
  {
    SpellIds: [SPELLS.WINDSTRIKE_DAMAGE.id, SPELLS.WINDSTRIKE_DAMAGE_OFFHAND.id],
    NewSpell: SPELLS.WINDSTRIKE_CAST.id,
  },
];

/** Ignore damage events from items and enchants */
export const IGNORED_DAMAGE_EVENTS = [
  ITEMS.FANG_ADORNMENTS.id,
  ITEMS.ROILING_SHADOWFLAME.id,
  ITEMS.BROODKEEPERS_BLAZE.id,
];

export const MAELSTROM_WEAPON_ELIGIBLE_SPELLS: Spell[] = [
  SPELLS.ELEMENTAL_BLAST,
  SPELLS.LIGHTNING_BOLT,
  TALENTS.CHAIN_LIGHTNING_TALENT,
  TALENTS.ELEMENTAL_BLAST_TALENT,
  TALENTS.CHAIN_HEAL_TALENT,
  SPELLS.HEALING_SURGE,
];

//* maximum difference found so far is 45ms, so setting to 50 for a little wiggle room */
export const MAELSTROM_WEAPON_MS = 50;
