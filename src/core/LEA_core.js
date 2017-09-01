//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Implementation of LEA Block Cipher on 8-bit AVR Processors for JavaScript(Balanced Optimization)                           //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

'use strict'

class LEA
{
    constructor(UserKey, RoundKey) {
        this.UserKey = UserKey;
        this.RoundKey = RoundKey;
    }

    static LEA_key() {
        var delta = [0xc3efe9db, 0x44626b02, 0x79e27c8a, 0x78df30ec];
        var T = [0x0, ];

        T[0] = DWORD_in(this.UserKey);
        T[1] = DWORD_in(this.UserKey + 4);
        
    }

    DWORD_in() {

    }
}

module.exports = LEA;