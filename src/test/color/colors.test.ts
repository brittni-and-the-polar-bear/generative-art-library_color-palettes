/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's Generative Art Library,
 * which is released under the GNU Affero General Public License, Version 3.0.
 * You may not use this file except in compliance with the license.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. See LICENSE or go to
 * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 */

import {paletteColors} from '../../main';
import {checkForValidStringMap} from '../index';

describe('colors tests', (): void => {
    test('palette colors map exists', (): void => {
        checkForValidStringMap(paletteColors);
    });

    test.each([
        {hexString: '#006F57'},
        {hexString: '#23856D'}
    ])('$# successful addition of green color: $hexString',
        ({hexString}): void => {
            expect(paletteColors).toBeTruthy();
            expect(new Set<string>(paletteColors.keys)).toContain(hexString);
        }
    );

    test.each([
        {hexString: '#BB010B'},
        {hexString: '#CD1624'}
    ])('$# successful addition of red color: $hexString',
        ({hexString}): void => {
            expect(paletteColors).toBeTruthy();
            expect(new Set<string>(paletteColors.keys)).toContain(hexString);
        }
    );

    test.each([
        {hexString: '#EC407A'},
        {hexString: '#F06292'},
        {hexString: '#F48FB1'},
        {hexString: '#F8BBD0'}
    ])('$# successful addition of pink color: $hexString',
        ({hexString}): void => {
            expect(paletteColors).toBeTruthy();
            expect(new Set<string>(paletteColors.keys)).toContain(hexString);
        }
    );

    test.each([
        {hexString: '#FAF8F8'},
        {hexString: '#FCE4EC'}
    ])('$# successful addition of white color: $hexString',
        ({hexString}): void => {
            expect(paletteColors).toBeTruthy();
            expect(new Set<string>(paletteColors.keys)).toContain(hexString);
        }
    );
});
