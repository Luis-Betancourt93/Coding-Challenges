/*
The HTML Structure: Imagine a list of 10 users. Each user is in a row.

The Row: .user-card
Inside the row, there is an email: .email-text
Inside the row, there is a delete button: .delete-btn

Your Mission:
Get all the user cards.
Loop through them.
Check the text of the email.
Logic: If the email includes the word "spam" (e.g., buycrypto@spam.com), click the delete button.

*/

test('delete spam users', async ({ page }) => {
  // 1. Get all the card elements (The Boxes)
  const allCards = await page.locator('.user-card').all();
  
  // 2. Write the loop
  // ... your code here ...


for (const card of allCards) {
  const deleteBtn = card.locator('.delete-btn')
  const emailText = await card.locator('.email-text').innerText(); 
  if(emailText.includes('spam')) {
    await deleteBtn.click()
  }

}


});