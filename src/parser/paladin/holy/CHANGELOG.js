import React from 'react';

import { Zerotorescue, HolySchmidt, Abelito75, blazyb, Taleria, Torothin, Putro } from 'CONTRIBUTORS';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';
import { change, date } from 'common/changelog';

// prettier-ignore
export default [
  change(date(2020, 10, 15), <>Removed Light Of Dawn from Crusaders Might statistic box and fixed beacon uptime for glimmer players. </>, Abelito75),
  change(date(2020, 10, 14), <>Added nice graphic for DP to show how lucky or unlucky you were. </>, Abelito75),
  change(date(2020, 10, 13), <>Updated stat weight scaling. </>, Abelito75),
  change(date(2020, 8, 27), <>Updated core Holy Paladin for prepatch. </>, Abelito75),
  change(date(2020, 8, 27), <>Enabled a statistic for the minor of <SpellLink id={SPELLS.LUCID_DREAMS.id} />. </>, Putro),
  change(date(2020, 1, 18), <>Added <SpellLink id={SPELLS.VISION_OF_PERFECTION.id} /> major essence statistic to track procs, uptime and haste gained.</>, [HolySchmidt]),
  change(date(2020, 1, 18), <>Added <SpellLink id={SPELLS.STRIVE_FOR_PERFECTION.id} /> minor essence statistic to track versitility, healing, and <SpellLink id={SPELLS.AVENGING_WRATH.id} /> cooldown reduction.</>, [HolySchmidt]),
  change(date(2020, 1, 18), <>Added check to fabricate pre-pull event for <SpellLink id={SPELLS.AVENGING_WRATH.id} /> and added ability cooldown reduction for <SpellLink id={SPELLS.AVENGING_CRUSADER_TALENT.id} />.</>, [HolySchmidt]),
  change(date(2020, 1, 15), <>Removed <SpellLink id={SPELLS.GLIMMER_OF_LIGHT.id} /> 8.3 nerf prediction statistic.</>, [Zerotorescue]),
  change(date(2020, 1, 5), <>Added <SpellLink id={SPELLS.GLIMMER_OF_LIGHT.id} /> 8.3 nerf prediction statistic to see how the nerf will affect you.</>, [Zerotorescue]),
  change(date(2020, 1, 1), <>Added <SpellLink id={SPELLS.GLIMMER_OF_LIGHT.id} /> build suggestions for early overwriting of active glimmers and added support for 8.3 buff cap of 8.</>, [HolySchmidt]),
  change(date(2019, 12, 21), 'Added beacon uptime statistic and checklist rule.', [Torothin]),
  change(date(2019, 12, 14), <>Implemented a fun statistic for <SpellLink id={SPELLS.JUDGMENT_OF_LIGHT_TALENT.id} />.</>, [Abelito75]),
  change(date(2019, 12, 8), <>Fixed <SpellLink id={SPELLS.LIGHTS_DECREE.id} /> duration along with <SpellLink id={SPELLS.HOLY_SHOCK_CAST.id} /> usage, <SpellLink id={SPELLS.AVENGING_WRATH.id} /> damage, healing, and critical strike contributions.</>, [HolySchmidt]),
  change(date(2019, 12, 1), <><SpellLink id={SPELLS.CRUSADERS_MIGHT_TALENT.id} /> cooldown reduction will correctly adjust for <SpellLink id={SPELLS.SANCTIFIED_WRATH_TALENT.id} />, added <SpellLink id={SPELLS.GLIMMER_OF_LIGHT.id} /> build support and fixed spelling errors.</>, [HolySchmidt]),
  change(date(2019, 12, 1), <><SpellLink id={SPELLS.GLIMMER_OF_LIGHT.id} /> build has been added for Holy Paladin, will now link to a guild on the build and not suggest that all mana must be used during a fight.</>, [HolySchmidt]),
  change(date(2019, 11, 23), <><SpellLink id={SPELLS.LIGHTS_DECREE.id} /> statistic added showing healing, beacon healing and added duration.</>, [Taleria]),
  change(date(2019, 11, 9), <>Added suggestion in the timeline and a tooltip to prioritize <SpellLink id={SPELLS.HOLY_SHOCK_CAST.id} /> over <SpellLink id={SPELLS.CRUSADER_STRIKE.id} /> when using <SpellLink id={SPELLS.CRUSADERS_MIGHT_TALENT.id} /> talent.</>, [HolySchmidt]),
  change(date(2019, 10, 21), <>Fixed a typo in <SpellLink id={SPELLS.RULE_OF_LAW_TALENT.id} />'s suggestion. </>, [Abelito75]),
  change(date(2019, 8, 12), 'Added essence Lucid Dreams.', [blazyb]),
  change(date(2019, 6, 13), <><SpellLink id={SPELLS.GLIMMER_OF_LIGHT.id} /> statistic added showing healing, damage, beacon healing, <SpellLink id={SPELLS.HOLY_SHOCK_CAST.id} />s/min and refresh utilization.</>, [HolySchmidt]),
  change(date(2019, 6, 2), <>Enabled the QElive auto import link for stat values.</>, [Abelito75]),
  change(date(2019, 5, 19), <><SpellLink id={SPELLS.AVENGING_CRUSADER_TALENT.id} /> statistic added showing total healing, healing transfered to beacons and tracks triggers as healing abilities.</>, [HolySchmidt]),
  change(date(2019, 3, 21), <><SpellLink id={SPELLS.GRACE_OF_THE_JUSTICAR.id} /> statistic added showing total healing, players hit per cast and healing transfered to beacons.</>, [HolySchmidt]),
  change(date(2019, 3, 19), <><SpellLink id={SPELLS.RADIANT_INCANDESCENCE.id} /> statistic tracker added showing healing, crit rate, damage and healing transfered to beacons.</>, [HolySchmidt]),
  change(date(2019, 2, 24), <><SpellLink id={SPELLS.GLIMMER_OF_LIGHT.id} /> has been marked as scaling with Mastery and Haste and should now affect the stat values.</>, [Zerotorescue]),
  change(date(2019, 1, 30), <><SpellLink id={SPELLS.GLIMMER_OF_LIGHT.id} /> has been added to the list of spells that beacon transfer (50% efficiency).</>, [Zerotorescue]),
  change(date(2019, 1, 5), <><SpellLink id={SPELLS.LIGHT_OF_THE_MARTYR.id} /> that did negative healing are now highlighted in the timeline.</>, [Zerotorescue]),
  change(date(2019, 1, 5), <><SpellLink id={SPELLS.LIGHT_OF_THE_MARTYR.id} /> cast while <SpellLink id={SPELLS.HOLY_SHOCK_CAST.id} /> was available will now be highlighted in the timeline.</>, [Zerotorescue]),
  change(date(2019, 1, 5), <>Fixed a bug in the analysis of Aura of Sacrifice that caused the active damage reduction to sometimes not properly be accounted for.</>, [Zerotorescue]),
  change(date(2018, 12, 13), <>Fixed a bug in the analysis of Aura of Sacrifice that caused the passive damage reduction to not be properly accounted for.</>, [Zerotorescue]),
  change(date(2018, 11, 26), <>Improved accuracy of mastery effectiveness by using an advanced algorithm to determine if a player would actually have had an increased chance of survival from a potential increase in mastery effectiveness.</>, [Zerotorescue]),
  change(date(2018, 11, 10), <>Fixed a crash when using Aura of Sacrifice.</>, [Zerotorescue]),
  change(date(2018, 10, 10), <>Fixed a rare bug in the Aura of Sacrifice damage reduction analysis where an immunity at the exact right time could throw off the analysis.</>, [Zerotorescue]),
  change(date(2018, 9, 16), <>Added <SpellLink id={SPELLS.BEACON_OF_LIGHT_HEAL.id} /> healing lost from missing beacons as well as beacon line of sighting.</>, [Zerotorescue]),
  change(date(2018, 9, 15), <>Improved <SpellLink id={SPELLS.BEACON_OF_LIGHT_HEAL.id} /> transfer tracking accuracy when line of sighting beacon targets.</>, [Zerotorescue]),
  change(date(2018, 9, 15), <>Fixed a bug in <SpellLink id={SPELLS.BEACON_OF_LIGHT_HEAL.id} /> transfer tracking where line of sighting a beacon targets could lead to inaccurate results.</>, [Zerotorescue]),
  change(date(2018, 9, 15), <>Added a <SpellLink id={SPELLS.BEACON_OF_LIGHT_HEAL.id} /> transfer sources breakdown tab.</>, [Zerotorescue]),
  change(date(2018, 9, 15), <>Fixed a bug in the analysis of <SpellLink id={SPELLS.HOLY_AVENGER_TALENT.id} /> where beacon healing was included twice.</>, [Zerotorescue]),
  change(date(2018, 9, 11), 'Shuffled the checklist to put higher importance things higher in the list.', [Zerotorescue]),
  change(date(2018, 8, 3), <>Devotion Aura analysis will no longer crash when the combatlog is corrupt.</>, [Zerotorescue]),
  change(date(2018, 7, 24), <>Improved the accuracy of the Devotion Aura statistic by correctly scaling the passive via the new formula (<a href="https://github.com/MartijnHols/HolyPaladin/blob/master/Spells/Talents/60/DevotionAura.md#about-the-passive-effect">more info</a>).</>, [Zerotorescue]),
  change(date(2018, 7, 24), <>Improved the accuracy of the Devotion Aura statistic by excluding false positives such as <SpellLink id={SPELLS.STAGGER.id} /> from the <SpellLink id={SPELLS.AURA_MASTERY.id} /> effect. Added a link to WCL to view the details of Aura Mastery.</>, [Zerotorescue]),
  change(date(2018, 7, 22), 'Changed the "FoL/HL on beacons" statistic to "Direct beacon healing", so it now includes all beacon transfering spells.', [Zerotorescue]),
  change(date(2018, 7, 22), <>Reworked the Aura of Sacrifice analyzer to get a much more accurate result. The old method had a lot of false positive damage included due to bugs in the logs coming out of the game.</>, [Zerotorescue]),
  change(date(2018, 7, 22), <>Changed the <SpellLink id={SPELLS.DIVINE_PURPOSE_TALENT.id} /> analyzer to include back to back procs.</>, [Zerotorescue]),
  change(date(2018, 7, 21), <>Healing increases such as Ilterendi, Crown Jewel of Silvermoon now correctly include boosted healing caused by <SpellLink id={SPELLS.AVENGING_CRUSADER_TALENT.id} />.</>, [Zerotorescue]),
  change(date(2018, 7, 19), <>Added <SpellLink id={SPELLS.AVENGING_CRUSADER_TALENT.id} /> to the cooldown tracker.</>, [Zerotorescue]),
  change(date(2018, 7, 19), 'Removed Tyr\'s Deliverance.', [Zerotorescue]),
  change(date(2018, 7, 18), <>Added an accurate Aura of Sacrifice stat for the reworked version.</>, [Zerotorescue]),
  change(date(2018, 7, 3), <>Fixed a bug where the mana reduction by <SpellLink id={SPELLS.DIVINE_PURPOSE_TALENT.id} /> of <SpellLink id={SPELLS.HOLY_SHOCK_CAST.id} /> and <SpellLink id={SPELLS.LIGHT_OF_DAWN_CAST.id} /> was not correctly accounted for in the cooldowns tab.</>, [Zerotorescue]),
  change(date(2018, 6, 29), <>Updated the crit bonus for <SpellLink id={SPELLS.HOLY_SHOCK_CAST.id} /> to 30% (up from 25%).</>, [Zerotorescue]),
];
