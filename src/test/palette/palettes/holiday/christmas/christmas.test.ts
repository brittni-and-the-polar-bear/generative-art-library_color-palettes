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

import {christmasPalettes, mutedChristmas} from '../../../../../main';

import {checkForValidStringMap} from '../../../../index';
import {buildPaletteTestArray, checkForPaletteInMap} from '../../index';


describe('christmas palettes test', (): void => {
    test('christmas palettes map exists', (): void => {
        checkForValidStringMap(christmasPalettes);
    });

    test.each(
        buildPaletteTestArray(
            [
                mutedChristmas
            ]
        )
    )('$# successful addition of palette: $name',
        ({palette}): void => {
            checkForPaletteInMap(palette, christmasPalettes);
        }
    );
});
