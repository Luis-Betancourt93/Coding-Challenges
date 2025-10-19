/*




<div class="inventory-list">

  <div class="product-row">
    <h3>Basic Widget</h3>
    <span class="current-price">$ 45.00 USD</span>
    <button class="increase-btn">Increase Price</button>
  </div>

  <div class="product-row">
    <h3>Premium Widget</h3>
    <span class="current-price">$ 85.00 USD</span>
    <button class="increase-btn">Increase Price</button>
  </div>

  <div class="product-row">
    <h3>Tiny Widget</h3>
    <span class="current-price">$ 10.00 USD</span>
    <button class="increase-btn">Increase Price</button>
  </div>

</div>

Grab all divs with class product-row.
Read the text inside .current-price (e.g., "$ 45.00 USD").
Clean it up so you just have the number 45.
If it is < 50, click the .increase-btn inside that specific row.
Give it a shot!
*/


test('price hike', async ({page}) => {
  const products = await page.locator('.product-row').all();


  for (const product of products) {
    const rawText = await product.locator('.current-price').innerText();
    const price =  Number(rawText.replace('$', '').replace('USD', '').trim());

    if(price < 50) {
      await product.locator('.increase-btn').click();

    }

  }
})