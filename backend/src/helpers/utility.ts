const bcrypt = require('bcrypt');

export class Utility {

  async hashPassword(password: string) {
    try {
      const saltRounds:number = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      throw new Error('Error hashing password');
    }
  }

  async comparePasswords(plainPassword: string, hashedPassword: string) {
    try {
      const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
      return isMatch;
    } catch (error) {
      throw new Error('Error comparing passwords');
    }
  }

}