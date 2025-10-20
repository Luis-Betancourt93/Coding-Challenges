/*

Your Mission:
Loop through all .request-row elements.
Get the text from .status.
Clean & Check: The text might have spaces (e.g., " Pending "). You need to clean it and check if it equals "Pending".
Action: If it is pending, click the .approve-btn.
One crucial hint: When checking strict equality (strings), use ===. if (cleanText === 'Pending')
Write the full test block!


<div class="request-row">
  <span class="status">  Pending  </span> <button class="approve-btn">Approve</button>
</div>

<div class="request-row">
  <span class="status">Approved</span>
  <button class="approve-btn">Approve</button>
</div>
*/

test('Status Check', async ({page}) => {
  const requestRow = await page.locator('.request-row').all();

  for(const request of requestRow) {
    const status = await request.locator('.status').innerText();
    const rawText = status.trim()

    if(rawText === 'Pending'){
      await request.locator('.approve-btn').click();
    }


  }

})