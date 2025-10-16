export const mockResInfo = {
  cards: [
    {}, // cards[0]
    {}, // cards[1]
    {
      card: {
        card: {
          info: {
            id: "12345",
            name: "The Spice Villa",
            cuisines: ["North Indian", "Chinese", "Continental"],
            costForTwoMessage: "₹500 for two",
          },
        },
      },
    },
    {}, // cards[3]
    {
      groupedCard: {
        cardGroupMap: {
          REGULAR: {
            cards: [
              {}, // cards[0]
              {
                card: {
                  card: {
                    title: "Recommended",
                    itemCards: [
                      {
                        info: {
                          id: "101",
                          name: "Paneer Butter Masala",
                          category: "Main Course",
                          description: "Soft paneer cubes simmered in buttery tomato gravy.",
                          price: 25000,
                          imageId: "paneer_butter_masala_img",
                        },
                      },
                      {
                        info: {
                          id: "102",
                          name: "Veg Biryani",
                          category: "Rice",
                          description: "Fragrant basmati rice cooked with garden-fresh vegetables and spices.",
                          price: 22000,
                          imageId: "veg_biryani_img",
                        },
                      },
                      {
                        info: {
                          id: "103",
                          name: "Butter Naan",
                          category: "Breads",
                          description: "Soft leavened bread brushed with butter.",
                          price: 5000,
                          imageId: "butter_naan_img",
                        },
                      },
                      {
                        info: {
                          id: "104",
                          name: "Gulab Jamun",
                          category: "Desserts",
                          description: "Soft milk-solid balls soaked in sugar syrup.",
                          price: 12000,
                          imageId: "gulab_jamun_img",
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
    },
  ],
};