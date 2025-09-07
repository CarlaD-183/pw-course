import { test } from '@playwright/test';

test(' searching nodes', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.click("//a[contains(text(),'Bài học 4: Personal notes')]");
  const newsData = [
    { title: 'Vì sao đêm nay Mặt Trăng chuyển màu đỏ?', summary: 'Gần 6 tỷ người ở nhiều nước bao gồm Việt Nam có thể chứng kiến Mặt Trăng ..' },
    { title: 'Startup AI nổi tiếng phải trả 1,5 tỷ USD', summary: 'Anthropic, startup AI đứng sau chatbot Claude' },
    { title: 'Những thiết bị không dùng vẫn hút điện', summary: 'năng lượng lãng phí ngầm từ các thiết bị vẫn ...' },
    { title: 'Khí hậu toàn cầu thay đổi', summary: 'Nhiệt độ trái đất tăng nhanh, băng tan ở hai cực gây ra biến đổi...' },
    { title: 'Giải pháp máy chủ ảo cho chuyển đổi số của HostingViet', summary: 'Công ty Cổ phần công nghệ số Thiên Quang' },
    { title: 'Robot khám phá đại dương', summary: 'Robot lặn tự động giúp nghiên cứu sâu đại dương và môi trường biển...' },
    { title: 'Siêu máy tính mạnh nhất', summary: 'Một siêu máy tính mới lập kỷ lục với khả năng tính toán nhanh chưa từng có...' },
    { title: 'Sao chổi tiến gần Trái Đất', summary: 'Các nhà thiên văn học cảnh báo về một sao chổi đang tiến gần...' },
    { title: 'Công nghệ lượng tử đột phá', summary: 'Máy tính lượng tử mở ra khả năng xử lý dữ liệu khổng lồ...' },
    { title: 'Tìm thấy hóa thạch khủng long', summary: 'Hóa thạch khủng long quý hiếm được tìm thấy tại khu vực hẻo lánh...' },
  ];

  const titleInput = page.locator("//input[@id='note-title']");
  const contentInput = page.locator("//textarea[@id='note-content']");
  const addBtn = page.locator("//button[@id='add-note']");
  for (const news of newsData) {
    await titleInput.fill(news.title);
    await contentInput.fill(news.summary);
    await addBtn.click();
  }
  const randomIndex = Math.floor(Math.random() * newsData.length);
  const searchTitle = newsData[randomIndex].title;

  await test.step(`Search for note: ${searchTitle}`, async () => {
    const searchInput = page.locator("//input[@id='search-note']");
    await searchInput.fill(searchTitle);
    await searchInput.press('Enter');

    // Step 4: Assert that search results show the correct note
    const searchResults = await page.locator("//div[@class='note']//h3").allTextContents();
  });
});
