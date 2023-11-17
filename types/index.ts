export interface ISpeicesResponse {
  base_happiness: number;
  capture_rate: number;
  color: {
    name: string;
  };
  flavor_text_entries: [
    {
      flavor_text: string;
      language: {
        name: string;
      };
    }
  ];
  genera: [
    {
      genus: string;
      language: {
        name: string;
      };
    }
  ];
  growth_rate: {
    name: string;
  };
  habitat: {
    name: string;
  };
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: [
    {
      language: {name: string};
      name: string;
    }
  ];
}
export interface IPokemon {
  abilities: [
    {
      ability: {
        name: string;
      };
      is_hidden: boolean;
      slot: number;
    }
  ];
  height: number;
  id: number;
  name: any;
  species: any;
  sprites: {
    front_default: string;
    front_female?: string | null;
  };
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
      };
    }
  ];
  types: [
    {
      slot: number;
      type: {name: string};
    }
  ];
  weight: number;
}
