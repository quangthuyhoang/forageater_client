var seed = {};
seed.foodList = [
    {
        "offset": 0,
        "group": "Branded Food Products Database",
        "name": "AUTHENTIC PHO LIQUID BROTH CONCENTRATE, UPC: 701809303964",
        "ndbno": "45089879",
        "ds": "LI",
        "manu": null
    },
    {
        "offset": 1,
        "group": "Branded Food Products Database",
        "name": "CHICKEN PHO NOODLES, UPC: 071757056947",
        "ndbno": "45256350",
        "ds": "LI",
        "manu": "Schnuck Markets, Inc."
    },
    {
        "offset": 2,
        "group": "Branded Food Products Database",
        "name": "CHICKEN PHO SOUP BASE, UPC: 052603055017",
        "ndbno": "45237448",
        "ds": "LI",
        "manu": "First Indo American Corp."
    }
]

seed.inventoryList = [
    {
        "product_id": 123,
        "upc": "11111111",
        "name": "Orange",
        "quantity": 2,
        "nutrition": {},
        "inventory_ids": [12, 13] // individual inventory as an associated expiration date and purchase date
    },
    {
        "product_id": 123,
        "upc": "11111112",
        "name": "Apple",
        "quantity": 1,
        "nutrition": {},
        "inventory_ids": [14, 15] // individual inventory as an associated expiration date and purchase date
    },
    {
        "product_id": 123,
        "upc": "11111112",
        "name": "Apple",
        "quantity": 1,
        "nutrition": {},
        "inventory_ids": [14, 15] // individual inventory as an associated expiration date and purchase date
    },

    { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
  { id: 'quantity', numeric: true, disablePadding: true, label: 'Quantity' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
]

module.exports = seed;