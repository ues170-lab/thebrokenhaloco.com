// Broken Halo Co. — Shopify storefront wiring
// Marketing site (thebrokenhaloco.com) → Shopify (bhc-1149)
//
// When you connect a custom domain to Shopify later, change baseUrl only.
// Keep password ON until launch; visitors with no password see the password page.
// Products must be Active (password can stay on) for storefront product pages to resolve.

window.SHOP_CONFIG = {
  enabled: true,
  baseUrl: "https://bhc-1149.myshopify.com",
  firstDropPath: "/collections/first-drop",
  // If First Drop collection is missing, fall back to all products
  fallbackPath: "/collections/all",
  collectionCta: "SHOP FIRST DROP",
  productCta: "SHOP THIS PIECE",
  // Handles must match Shopify product handles (from import CSV)
  products: {
    "sober-not-soft": "sober-not-soft",
    "im-still-here": "im-still-here",
    "broken-but-breathing": "broken-but-breathing",
    "dissociated": "i-came-i-saw-i-dissociated",
    "hope-dealer": "hope-dealer",
    "powered-by-spite": "powered-by-spite"
  }
};
