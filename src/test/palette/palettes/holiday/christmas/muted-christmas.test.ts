/*
 * Copyright (C) 2024 Brittni Watkins.
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

import {_006f57, _23856d, _bb010b, _cd1624, _faf8f8, mutedChristmas} from "../../../../../main";
import {checkForValidPalette} from "../../index";

describe('muted christmas palette tests', (): void => {
    test('muted christmas palette exists', (): void => {
        checkForValidPalette(mutedChristmas);
    })

    test.each([
        {color: _006f57, hexString: _006f57.hexString},
        {color: _23856d, hexString: _23856d.hexString},
        {color: _bb010b, hexString: _bb010b.hexString},
        {color: _cd1624, hexString: _cd1624.hexString},
        {color: _faf8f8, hexString: _faf8f8.hexString}
    ])('$# color $hexString present in palette',
        ({color}): void => {
            expect(mutedChristmas.colors).toContain(color);
        }
    );
});
