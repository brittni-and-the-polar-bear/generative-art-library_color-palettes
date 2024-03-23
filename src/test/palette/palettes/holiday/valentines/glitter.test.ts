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

import {buildPaletteColorTestArray, checkForValidPalette} from "../../index";

import {_ec407a, _f06090, _f48fb1, _f8bacf, _fce4ec, glitter} from "../../../../../main";

describe('glitter palette tests', (): void => {
    test('glitter palette exists', (): void => {
        checkForValidPalette(glitter);
    })

    test.each(
        buildPaletteColorTestArray(
            [
                _fce4ec,
                _f8bacf,
                _f48fb1,
                _f06090,
                _ec407a
            ]
        )
    )('$# color $hexString present in glitter palette',
        ({color}): void => {
            expect(glitter.colors).toContain(color);
        }
    );
});
