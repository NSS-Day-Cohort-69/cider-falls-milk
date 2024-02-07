const database = {
  areas: [
    {
      id: 1,
      section: "Northern",
      attraction: "Lost Wolf Hiking Trail",
    },
    {
      id: 2,
      section: "Northeast",
      attraction: "Chamfort River",
    },
    {
      id: 3,
      section: "Northwest",
      attraction: "Lodge",
    },
    {
      id: 4,
      section: "Southern",
      attraction: "Campgrounds",
    },
    {
      id: 5,
      section: "Southeast",
      attraction: "Pine Bluffs Trails",
    },
    {
      id: 6,
      section: "Southwest",
      attraction: "Gander River",
    },
  ],
  guests: [
    {
      id: 1,
      firstName: "John",
      lastName: "Cena",
      areaID: 1
    },
    {
      id: 2,
      firstName: "Trixie",
      lastName: "Mattell",
      areaID: 1
    },
    {
      id: 3,
      firstName: "BeBe Zahara",
      lastName: "Benet",
      areaID: 1
    },
    {
      id: 4,
      firstName: "Tyra",
      lastName: "Sanchez",
      areaID: 1
    },
    {
      id: 5,
      firstName: "Raja",
      lastName: "Gemini",
      areaID: 2
    },
    {
      id: 6,
      firstName: "Sharon",
      lastName: "Needles",
      areaID: 2
    },
    {
      id: 7,
      firstName: "Jinkx",
      lastName: "Monsoon",
      areaID: 2
    },
    {
      id: 8,
      firstName: "Bianca",
      lastName: "Del Rio",
      areaID: 3
    },
    {
      id: 9,
      firstName: "Violet",
      lastName: "Chachki",
      areaID: 3
    },
    {
      id: 10,
      firstName: "Bob",
      lastName: "the Drag Queen",
      areaID: 4
    },
    {
      id: 11,
      firstName: "Sasha",
      lastName: "Velour",
      areaID: 5
    },
    {
      id: 12,
      firstName: "Aquaria",
      lastName: "Johnson",
      areaID: 6
    },
    {
      id: 13,
      firstName: "Yvie",
      lastName: "Oddly",
      areaID: 5
    },
    {
      id: 14,
      firstName: "Jaida Essence",
      lastName: "Hall",
      areaID: 4
    },
    {
      id: 15,
      firstName: "Symone",
      lastName: "Byles",
      areaID: 1
    },
    {
      id: 16,
      firstName: "Willow",
      lastName: "Pill",
      areaID: 2
    },
    {
      id: 17,
      firstName: "Sasha",
      lastName: "Colby",
      areaID: 3
    },
  ],
  services: [
    {
      id: 1,
      name: "hiking",
    },
    {
      id: 2,
      name: "rafting",
    },
    {
      id: 3,
      name: "canoeing",
    },
    {
      id: 4,
      name: "fishing",
    },
    {
      id: 5,
      name: "picnicking",
    },
    {
      id: 6,
      name: "lodging",
    },
    {
      id: 7,
      name: "parking",
    },
    {
      id: 8,
      name: "rock climbing",
    },
    {
      id: 9,
      name: "information",
    },
    {
      id: 10,
      name: "zip lines",
    },
  ],
  parkAreaServices: [
    {
      id: 1,
      parkID: 1,
      serviceID: 1,
    },
    {
      id: 2,
      parkID: 1,
      serviceID: 5,
    },
    {
      id: 3,
      parkID: 1,
      serviceID: 8,
    },
    {
      id: 4,
      parkID: 2,
      serviceID: 2,
    },
    {
      id: 5,
      parkID: 2,
      serviceID: 3,
    },
    {
      id: 6,
      parkID: 2,
      serviceID: 4,
    },
    {
      id: 7,
      parkID: 3,
      serviceID: 5,
    },
    {
      id: 8,
      parkID: 3,
      serviceID: 6,
    },
    {
      id: 9,
      parkID: 3,
      serviceID: 7,
    },
    {
      id: 10,
      parkID: 3,
      serviceID: 9,
    },
    {
      id: 11,
      parkID: 4,
      serviceID: 6,
    },
    {
      id: 12,
      parkID: 4,
      serviceID: 7,
    },
    {
      id: 13,
      parkID: 4,
      serviceID: 9,
    },
    {
      id: 14,
      parkID: 5,
      serviceID: 1,
    },
    {
      id: 15,
      parkID: 5,
      serviceID: 5,
    },
    {
      id: 16,
      parkID: 5,
      serviceID: 10,
    },
    {
      id: 17,
      parkID: 6,
      serviceID: 1,
    },
    {
      id: 18,
      parkID: 6,
      serviceID: 4,
    },
  ],
};

export const getArea = () => {
  return database.areas.map((area) => ({ ...area }));
};

export const getGuest = () => {
  return database.guests.map((guest) => ({ ...guest }));
};

export const getService = () => {
  return database.services.map((service) => ({ ...service }));
};

export const parkAreaService = () => {
  return database.parkAreaServices.map((parkAreaService) => ({
    ...parkAreaService,
  }));
};
