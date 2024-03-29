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

import {_006f57, _23856d, _bb010b, _d01625, _faf8f8, mutedChristmas} from "../../../../../main";

import {buildPaletteColorTestArray, checkForValidPalette} from "../../index";

describe('muted christmas palette tests', (): void => {
    test('muted christmas palette exists', (): void => {
        checkForValidPalette(mutedChristmas);
    })

    test.each(
        buildPaletteColorTestArray(
            [
                _006f57,
                _23856d,
                _bb010b,
                _d01625,
                _faf8f8
            ]
        )
    )('$# color $hexString present in muted christmas palette',
        ({color}): void => {
            expect(mutedChristmas.colors).toContain(color);
        }
    );
});
