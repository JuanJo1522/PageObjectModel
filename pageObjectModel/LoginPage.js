const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  async open() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.page.getByLabel('Username').fill(username);
    await this.page.locator('#password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}

module.exports = LoginPage;
