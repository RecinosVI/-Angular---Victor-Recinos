export interface CombatStyleModel {
  id: number;
  name: string;
  img: string;
  description: string;
  combat_style_character: CombatStyleCharacter[];
}

export interface CombatStyleCharacter {
  id: number;
  name: string;
  description: string;
}