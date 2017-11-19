import { chai } from 'meteor/practicalmeteor:chai';
import { manifest_index } from './global_helpers';
import { constraints } from './global_helpers';
import { current_lane } from './global_helpers';

describe('Global Helpers', function () {
  describe('#manifest_index', function () {
    it('should exist as a function', function () {
      manifest_index.should.be.a('function');
    });

    it('should properly handle the first index', function () {
      manifest_index(0).should.equal('1st');
    });

    it('should properly handle the second index', function () {
      manifest_index(1).should.equal('2nd');
    });

    it('should properly handle the third index', function () {
      manifest_index(2).should.equal('3rd');
    });

    it('should properly handle any given index after the third', function () {
      let random_integer = Math.round(
        Math.random() * (100000000000000000 - 4) + 4
      );

      let expected_integer = random_integer + 1;

      manifest_index(random_integer).should.equal((expected_integer++) + 'th');
    });
  });

  describe('#constraints', function () {
    it('@watch should return a string', function () {
      const STRING = '';
      // If we use this any other place, swap it for a module. -SB 29 Jun '17
      let random_string = () => {
        let result = '';
        let chars = '0123456789' +
          'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' +
          '~!@#$%^&*()-=+.{}[]|";:?><,./'
        ;
        length = Math.round(Math.random() * 32);
        for (let i = length; i > 0; --i) result += Math.floor(
          Math.random() * chars.length
        );

        return result;
      }

      constraints().should.equal(STRING);
      (typeof constraints()).should.equal(typeof random_string());
    })
  })
});
