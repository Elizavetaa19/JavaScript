const { Builder, By, Key, until } = require('selenium-webdriver');

(async function testWebForm() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Открываем страницу
        await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

        // Заполняем текстовые поля
        await driver.findElement(By.name('my-text')).sendKeys('Тестовое значение');
        await driver.findElement(By.name('my-password')).sendKeys('Пароль123');

        // Прокликиваем radio buttons
        await driver.findElement(By.css('input[type="radio"][value="option1"]')).click();
        await driver.findElement(By.css('input[type="radio"][value="option2"]')).click();

        // Прокликиваем check buttons
        await driver.findElement(By.css('input[type="checkbox"][value="check1"]')).click();
        await driver.findElement(By.css('input[type="checkbox"][value="check2"]')).click();

        // Нажимаем кнопку submit
        await driver.findElement(By.css('input[type="submit"]')).click();

        // Ждем, пока страница загрузится
        await driver.wait(until.titleIs('Web Form Submitted'), 1000);

        // Проверяем, что мы на правильной странице
        console.log('Тест пройден: форма успешно отправлена.');
    } catch (error) {
        console.error('Ошибка при выполнении теста:', error);
    } finally {
        // Закрываем браузер
        await driver.quit();
    }
})();
