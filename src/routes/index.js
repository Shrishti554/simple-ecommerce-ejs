// Update cart quantities
router.post('/update-cart', (req, res) => {
  let { quantities, productIds } = req.body;

  // If only one item, convert to arrays for consistency
  if (!Array.isArray(quantities)) quantities = [quantities];
  if (!Array.isArray(productIds)) productIds = [productIds];

  if (req.session.cart) {
    // Update each item's quantity in the session cart
    req.session.cart.forEach((item, idx) => {
      const prodIdx = productIds.indexOf(item.product.id.toString());
      if (prodIdx !== -1) {
        const newQty = parseInt(quantities[prodIdx]);
        item.quantity = newQty;
      }
    });
    // Remove items with quantity 0
    req.session.cart = req.session.cart.filter(item => item.quantity > 0);
  }
  res.redirect('/cart');
});
