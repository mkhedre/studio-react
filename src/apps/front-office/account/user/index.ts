import cache from "@mongez/cache";
import Is from "@mongez/supportive-is";
import {
  setCurrentUser,
  User as BaseUser,
  UserCacheDriverInterface,
  UserInterface,
} from "@mongez/user";

const accountTypeKey = "userType";

class User extends BaseUser implements UserInterface {
  /**
   * Get account type
   *
   * @returns {string}
   */
  public getAccountType() {

    return this.get(accountTypeKey, "guest");
  }

  public hasBranch() {
    return !Is.empty(this.get("branch"));
  }

  /**
   * Check if visitor is guest
   *
   * @returns {string}
   */
  public isGuest() {
    return this.getAccountType() === "guest";
  }

  /**
   * Check if visitor is logged user
   *
   * @returns {string}
   */
  public isLoggedUser() {
    return this.getAccountType() === "customer";
  }

  /**
   * {@inheritdoc}
   */
  logout() {
    super.logout();
    window.location.reload();
  }

  /**
   * Cache driver
   */
  protected cacheDriver: UserCacheDriverInterface = cache;

  /**
   * {@inheritDoc}
   */
  public getCacheKey(): string {
    return "usr";
  }
}

const user: User = new User();

// boot the class
user.boot();

// update current user instance to be used from other packages
setCurrentUser(user);

export default user;
