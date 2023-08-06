const sampleDeliveryRequests = [
  {
    id: 1,
    address: "123 Main Street",
    phoneNumber: "555-1234",
    email: "john@example.com",
    items: [
      {
        id: 1,
        name: "Item 1",
        size: "Small",
        color: "Red",
      },
    ],
    status: "onHold",
  },
  {
    id: 2,
    address: "456 Elm Street",
    phoneNumber: "555-5678",
    email: "jane@example.com",
    items: [
      {
        id: 1,
        name: "Item 1",
        size: "Medium",
        color: "Blue",
      },
      {
        id: 2,
        name: "Item 2",
        size: "Large",
        color: "Green",
      },
    ],
    status: "fulfilled",
  },
  {
    id: 3,
    address: "789 Oak Street",
    phoneNumber: "555-9012",
    email: "mike@example.com",
    items: [
      {
        id: 1,
        name: "Item 1",
        size: "Small",
        color: "Yellow",
      },
      {
        id: 2,
        name: "Item 2",
        size: "Medium",
        color: "Orange",
      },
      {
        id: 3,
        name: "Item 3",
        size: "Large",
        color: "Pink",
      },
    ],
    status: "blocked",
  },
  {
    id: 4,
    address: "987 Pine Street",
    phoneNumber: "555-3456",
    email: "sarah@example.com",
    items: [
      {
        id: 1,
        name: "Item 1",
        size: "Medium",
        color: "Purple",
      },
      {
        id: 2,
        name: "Item 2",
        size: "Large",
        color: "Black",
      },
      {
        id: 3,
        name: "Item 3",
        size: "Small",
        color: "White",
      },
      {
        id: 4,
        name: "Item 4",
        size: "Extra Large",
        color: "Gray",
      },
    ],
    status: "onHold",
  },
  {
    id: 5,
    address: "654 Birch Street",
    phoneNumber: "555-7890",
    email: "alex@example.com",
    items: [
      {
        id: 1,
        name: "Item 1",
        size: "Small",
        color: "Brown",
      },
      {
        id: 2,
        name: "Item 2",
        size: "Medium",
        color: "Silver",
      },
      {
        id: 3,
        name: "Item 3",
        size: "Large",
        color: "Gold",
      },
      {
        id: 4,
        name: "Item 4",
        size: "Extra Large",
        color: "Copper",
      },
      {
        id: 5,
        name: "Item 5",
        size: "XXL",
        color: "Bronze",
      },
    ],
    status: "fulfilled",
  },
];

export { sampleDeliveryRequests };
