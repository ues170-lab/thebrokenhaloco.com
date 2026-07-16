// Broken Halo Co. — Shopify storefront wiring
// Marketing site (thebrokenhaloco.com) → Shopify (bhc-1149)
//
// Handles MUST match live Shopify product handles.
// When password is ON, product links still work for anyone with the password;
// public visitors hit the password page (expected until launch unlock).

window.SHOP_CONFIG = {
  enabled: true,
  baseUrl: "https://shop.thebrokenhaloco.com",
  firstDropPath: "/collections/first-drop",
  fallbackPath: "/collections/all",
  collectionCta: "SHOP FIRST DROP →",
  productCta: "SHOP THIS PIECE →",
  listCta: "JOIN DROP LIST",
  // Live Shopify handles + retail prices (tees)
  products: {
    "im-still-here": {
      handle: "im-still-here-tee",
      price: "54.00",
      label: "Lead Piece"
    },
    "broken-but-breathing": {
      handle: "broken-but-breathing-tee",
      price: "54.00",
      label: "Book Tie-in"
    },
    "sober-not-soft": {
      handle: "sober-not-soft-tee",
      price: "46.00",
      label: "First Drop"
    },
    "hope-dealer": {
      handle: "hope-dealer-tee",
      price: "46.00",
      label: "Limited"
    },
    "dissociated": {
      handle: "i-came-i-saw-i-dissociated-tee",
      price: "36.00",
      label: "Dark Humor"
    },
    "powered-by-spite": {
      handle: "powered-by-spite",
      price: "36.00",
      label: "Dark Fuel"
    }
  }
};
