'use strict';

class User {
  /**
   * @param {string} name
   * @param {string} surname
   */
  constructor (name, surname) {
    this._name = name;
    this._surname = surname;
  }

  set name (value) {
    if (typeof value !== 'string') {
      throw new TypeError();
    }
    this._name = value;
  }

  get name () {
    return this._name;
  }

  set surname (value) {
    if (typeof value !== 'string') {
      throw new TypeError();
    }
    this._surname = value;
  }

  get surname () {
    return this._surname;
  }

  /**
   * @returns {string}
   */
  getFullName () {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  /**
   * @param {string} name
   * @param {string} surname
   * @param {number} year
   */
  constructor (name, surname, year) {
    super(name, surname);
    this._year = year;
  }

  set year (value) {
    if (typeof value !== 'number') {
      throw new TypeError('NaN');
    }
    this._year = value;
  }

  get year () {
    return this._year;
  }

  /**
   * @returns {number|string}
   */
  getCourse () {
    const course = new Date().getFullYear() - this.year + 1;
    if (course < 1) {
      throw new RangeError('Wrong year');
    } else if (course > 5) {
      return 'Graduated';
    }
    return course;
  }
}