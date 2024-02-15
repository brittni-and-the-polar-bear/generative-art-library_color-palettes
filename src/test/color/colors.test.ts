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

import {paletteColors} from 'color';

describe('colors tests', (): void => {
    test('successful addition of colors', (): void => {
        const keys: Set<string> = new Set<string>(paletteColors.keys);
        expect(keys).toContain('#006F57'); // green
        expect(keys).toContain('#CD1624'); // red
        expect(keys).toContain('#FAF8F8'); // white
    });
});
