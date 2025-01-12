import puppeteer from "puppeteer";
import { fork } from "child_process";

jest.setTimeout(60000);

describe("popover form", () => {
  let server, browser, page;
  let url = "http://localhost:8080";

  // запускаем браузер с набором опций
  beforeAll(async () => {
    // запускаем сервер для тестирования
    server = fork(`${__dirname}/server.js`);

    browser = await puppeteer.launch({
      // headless: false, // режим отладки
      slowMo: 100, // скорость выполнения тестов
      // devtools: true, // инструменты разработки (DevTools)
    });
    page = await browser.newPage();
  });

  test("clicking on the button should show a popover", async () => {
    await page.goto(url);

    await page.waitForSelector(".form"); // ожидаем появление формы

    // находим элементы и кликаем по кнопке
    const form = await page.$(".form");
    const button = await form.$(".btn");
    await button.click();

    // ожидаем появление элемента
    await page.waitForSelector(".popover");
    const popover = await page.$(".popover");

    expect(popover).toBeTruthy();

  });

  test("сlicking the button again should hide the popover", async () => {
    await page.goto(url);

    await page.waitForSelector(".form");
    await page.click(".form button");
    await page.click(".form button");

    // проверяем наличие элемента
    const popover = await page.$(".popover");
    expect(popover).toBeFalsy();
  });

  afterAll(async () => {
    await browser.close();
    server.kill(); // закрываем сервер
  });
});