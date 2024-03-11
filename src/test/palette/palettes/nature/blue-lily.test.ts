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

import {_1d90af, _3a2112, _7dced8, _f0f3f4, _fafeff, blueLily} from "../../../../main";
import {buildPaletteColorTestArray, checkForValidPalette} from "../index";

describe('blue lily palette tests', (): void => {
    test('blue lily palette exists', (): void => {
        checkForValidPalette(blueLily);
    })

    test.each(
        buildPaletteColorTestArray(
            [
                _f0f3f4,
                _fafeff,
                _7dced8,
                _1d90af,
                _3a2112
            ]
        )
    )('$# color $hexString present in blue lily palette',
        ({color}): void => {
            expect(blueLily.colors).toContain(color);
        }
    );
});
