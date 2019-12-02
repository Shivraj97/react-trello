const data = {
  cards: {
    "k9atfadyp": { 
      id: "k9atfadyp", 
      number: 1, 
      description: "This is my first card...", 
      tags: ["Priority: Low", "Front-end"] 
    },
    "8wu6w8mxg": { 
      id: "8wu6w8mxg", 
      number: 2, 
      description: "This is a test", 
      tags: ["Priority: Low"] 
    },
    "c96h9478v": { 
      id: "c96h9478v", 
      number: 3, 
      description: "This is a test", 
      tags: [] 
    },
    "rtwf8u120": { 
      id: "rtwf8u120", 
      number: 4,
      description: "A card for my second list", 
      tags: ["Priority: Low", "Front-end"] 
    },
    "vt6udjrpz": { 
      id: "vt6udjrpz", 
      number: 5, 
      description: "Another one!", 
      tags: ["Priority: Medium", "API", "Database"] 
    },
    "ftrch98nt": { 
      id: "ftrch98nt", 
      number: 6, 
      description: "A card for my third list", 
      tags: ["Priority: High", "Payment", "API"] 
    },
    "bionb64f7": { 
      id: "bionb64f7", 
      number: 7, 
      description: "Another one!", 
      tags: [] 
    }
  },
  lists: {
    "f0y88ej8u": { 
      id: "f0y88ej8u",
      title: "Product Backlog",
      cardIds: ["k9atfadyp", "8wu6w8mxg", "c96h9478v"]
    },
    "1528b8oyp": {
      id: "1528b8oyp",
      title: "Work In Progress",
      cardIds: ["rtwf8u120", "vt6udjrpz"]
    },
    "yu0myoowp": {
      id: "yu0myoowp",
      title: "Done",
      cardIds: ["ftrch98nt", "bionb64f7"]
    }
  }
};

export default data;
