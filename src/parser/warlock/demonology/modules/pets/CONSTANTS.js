import SPELLS from 'common/SPELLS';
import PETS from './PETS';

// ability guids from 'summon' events - sometimes different from 'cast' ids
export const PERMANENT_PET_SUMMON_ABILITY_IDS = [
  SPELLS.SUMMON_IMP.id,
  SPELLS.SUMMON_VOIDWALKER.id,
  SPELLS.SUMMON_FELHUNTER.id,
  SPELLS.SUMMON_SUCCUBUS.id,
  SPELLS.SUMMON_FELGUARD.id,
  // Glyphed versions
  SPELLS.FEL_IMP_SUMMON.id,
  SPELLS.VOIDLORD_SUMMON.id,
  SPELLS.OBSERVER_SUMMON.id,
  SPELLS.SHADOW_SUCCUBUS_SUMMON.id,
  SPELLS.SHIVARRA_PERMANENT_SUMMON.id,
  SPELLS.WRATHGUARD_PERMANENT_SUMMON.id,
];

export const TEMPORARY_PET_SUMMON_ABILITY_IDS = [
  SPELLS.WILD_IMP_HOG_SUMMON.id,
  SPELLS.DREADSTALKER_SUMMON_1.id,
  SPELLS.DREADSTALKER_SUMMON_2.id,
  SPELLS.SUMMON_VILEFIEND_TALENT.id,
  SPELLS.GRIMOIRE_FELGUARD_TALENT.id,
  SPELLS.SUMMON_DEMONIC_TYRANT.id,
  SPELLS.WILD_IMP_ID_SUMMON.id,
  SPELLS.BILESCOURGE_SUMMON.id,
  SPELLS.VICIOUS_HELLHOUND_SUMMON.id,
  SPELLS.SHIVARRA_SUMMON.id,
  SPELLS.DARKHOUND_SUMMON.id,
  SPELLS.ILLIDARI_SATYR_SUMMON.id,
  SPELLS.VOID_TERROR_SUMMON.id,
  SPELLS.URZUL_SUMMON.id,
  SPELLS.WRATHGUARD_SUMMON.id,
  SPELLS.EYE_OF_GULDAN_SUMMON.id,
  SPELLS.PRINCE_MALCHEZAAR_SUMMON.id,
];

export const PET_SUMMON_ABILITY_IDS = [
  ...PERMANENT_PET_SUMMON_ABILITY_IDS,
  ...TEMPORARY_PET_SUMMON_ABILITY_IDS,
];

// used to map begincast, cast and damage from pre-pull summoned pets to their summon event abilities
export const PET_GUID_TO_SUMMON_ABILITY_MAP = {
  [PETS.WILD_IMP_HOG.guid]: SPELLS.WILD_IMP_HOG_SUMMON.id,
  [PETS.DREADSTALKER.guid]: SPELLS.DREADSTALKER_SUMMON_1.id, // technically there are 2 summon abilities but they get mapped to same spell anyway
  [PETS.VILEFIEND.guid]: SPELLS.SUMMON_VILEFIEND_TALENT.id,
  [PETS.GRIMOIRE_FELGUARD.guid]: SPELLS.GRIMOIRE_FELGUARD_TALENT.id,
  [PETS.DEMONIC_TYRANT.guid]: SPELLS.SUMMON_DEMONIC_TYRANT.id,
  [PETS.WILD_IMP_INNER_DEMONS.guid]: SPELLS.WILD_IMP_ID_SUMMON.id,
  [PETS.BILESCOURGE.guid]: SPELLS.BILESCOURGE_SUMMON.id,
  [PETS.VICIOUS_HELLHOUND.guid]: SPELLS.VICIOUS_HELLHOUND_SUMMON.id,
  [PETS.SHIVARRA.guid]: SPELLS.SHIVARRA_SUMMON.id,
  [PETS.DARKHOUND.guid]: SPELLS.DARKHOUND_SUMMON.id,
  [PETS.ILLIDARI_SATYR.guid]: SPELLS.ILLIDARI_SATYR_SUMMON.id,
  [PETS.VOID_TERROR.guid]: SPELLS.VOID_TERROR_SUMMON.id,
  [PETS.URZUL.guid]: SPELLS.URZUL_SUMMON.id,
  [PETS.WRATHGUARD.guid]: SPELLS.WRATHGUARD_SUMMON.id,
  [PETS.EYE_OF_GULDAN.guid]: SPELLS.EYE_OF_GULDAN_SUMMON.id,
  [PETS.PRINCE_MALCHEZAAR.guid]: SPELLS.PRINCE_MALCHEZAAR_SUMMON.id,
};

export const WILD_IMP_GUIDS = [
  PETS.WILD_IMP_HOG.guid,
  PETS.WILD_IMP_INNER_DEMONS.guid,
];

export const PETS_AFFECTED_BY_DEMONIC_TYRANT_GUIDS = [
  ...WILD_IMP_GUIDS,
  PETS.DREADSTALKER.guid,
  PETS.VILEFIEND.guid,
  PETS.GRIMOIRE_FELGUARD.guid,
];

// used to map summon ability id to summon spell ID (either spell that player casts or a talent)
export const SUMMON_TO_SPELL_MAP = {
  [SPELLS.SUMMON_IMP.id]: SPELLS.SUMMON_IMP.id,
  [SPELLS.FEL_IMP_SUMMON.id]: SPELLS.SUMMON_IMP.id,
  [SPELLS.SUMMON_VOIDWALKER.id]: SPELLS.SUMMON_VOIDWALKER.id,
  [SPELLS.VOIDLORD_SUMMON.id]: SPELLS.SUMMON_VOIDWALKER.id,
  [SPELLS.SUMMON_FELHUNTER.id]: SPELLS.SUMMON_FELHUNTER.id,
  [SPELLS.OBSERVER_SUMMON.id]: SPELLS.SUMMON_FELHUNTER.id,
  [SPELLS.SUMMON_SUCCUBUS.id]: SPELLS.SUMMON_SUCCUBUS.id,
  [SPELLS.SHADOW_SUCCUBUS_SUMMON.id]: SPELLS.SUMMON_SUCCUBUS.id,
  [SPELLS.SHIVARRA_PERMANENT_SUMMON.id]: SPELLS.SUMMON_SUCCUBUS.id,
  [SPELLS.SUMMON_FELGUARD.id]: SPELLS.SUMMON_FELGUARD.id,
  [SPELLS.WRATHGUARD_PERMANENT_SUMMON.id]: SPELLS.SUMMON_FELGUARD.id,
  [SPELLS.WILD_IMP_HOG_SUMMON.id]: SPELLS.HAND_OF_GULDAN_CAST.id,
  [SPELLS.DREADSTALKER_SUMMON_1.id]: SPELLS.CALL_DREADSTALKERS.id,
  [SPELLS.DREADSTALKER_SUMMON_2.id]: SPELLS.CALL_DREADSTALKERS.id,
  [SPELLS.SUMMON_VILEFIEND_TALENT.id]: SPELLS.SUMMON_VILEFIEND_TALENT.id,
  [SPELLS.GRIMOIRE_FELGUARD_TALENT.id]: SPELLS.GRIMOIRE_FELGUARD_TALENT.id,
  [SPELLS.SUMMON_DEMONIC_TYRANT.id]: SPELLS.SUMMON_DEMONIC_TYRANT.id,
  [SPELLS.WILD_IMP_ID_SUMMON.id]: SPELLS.INNER_DEMONS_TALENT.id,
  // the rest is from Inner Demons / Nether Portal and assigned in DemoPets._getSummonSpell()
};

// used for mapping pre-pull permanent pets to summon abilities
export const PERMANENT_PET_ABILITIES_TO_SUMMON_MAP = {
  // melee is ignored (can be 4 different pets)
  [SPELLS.IMP_FIREBOLT.id]: SPELLS.SUMMON_IMP.id,
  [SPELLS.VOIDWALKER_CONSUMING_SHADOWS.id]: SPELLS.SUMMON_VOIDWALKER.id,
  [SPELLS.FELHUNTER_SHADOW_BITE.id]: SPELLS.SUMMON_FELHUNTER.id,
  [SPELLS.SUCCUBUS_LASH_OF_PAIN.id]: SPELLS.SUMMON_SUCCUBUS.id,
  [SPELLS.FELGUARD_PURSUIT.id]: SPELLS.SUMMON_FELGUARD.id,
  [SPELLS.FELSTORM_DAMAGE.id]: SPELLS.SUMMON_FELGUARD.id,
  [SPELLS.FELGUARD_LEGION_STRIKE.id]: SPELLS.SUMMON_FELGUARD.id,
  [SPELLS.FELSTORM_BUFF.id]: SPELLS.SUMMON_FELGUARD.id,
};

// random pets that can be summoned from Inner Demons/Nether Portal. Does NOT include Wild Imps summoned by Inner Demons, those are not random
export const RANDOM_PET_GUIDS = [
  PETS.BILESCOURGE.guid,
  PETS.VICIOUS_HELLHOUND.guid,
  PETS.SHIVARRA.guid,
  PETS.DARKHOUND.guid,
  PETS.ILLIDARI_SATYR.guid,
  PETS.VOID_TERROR.guid,
  PETS.URZUL.guid,
  PETS.WRATHGUARD.guid,
  PETS.EYE_OF_GULDAN.guid,
  PETS.PRINCE_MALCHEZAAR.guid,
];
