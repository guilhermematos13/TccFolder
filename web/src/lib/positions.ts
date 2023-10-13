interface IPositions {
  name: string;
  id: number;
  linkedin: string;
  nameInitials: string;
  position: string;
}

export const positions: IPositions[] = [
  {
    id: 1,
    linkedin: "guilhermematos13",
    name: "Guilherme Matos",
    nameInitials: "GO",
    position: "Dev Front",
  },

  {
    id: 2,
    linkedin: "guilherme-sampaio",
    name: "Guilherme Sampaio",
    nameInitials: "GS",
    position: "Doc. Geral",
  },
  {
    id: 3,
    linkedin: "guilherme-dionisio",
    name: "Guilherme Dionisio",
    nameInitials: "GD",
    position: "Tester",
  },
  {
    id: 4,
    linkedin: "jose-hugo-candido",
    name: "Hugo Candido",
    nameInitials: "HC",
    position: "Dev Back",
  },
  {
    id: 5,
    linkedin: "matheus-araujo-bianchini",
    name: "Matheus Bianchini",
    nameInitials: "MB",
    position: "Modelagem",
  },
  {
    id: 6,
    linkedin: "felipe-araujo-bianchini",
    name: "Felipe Bianchini",
    nameInitials: "FB",
    position: "Pesquisas",
  },
];
