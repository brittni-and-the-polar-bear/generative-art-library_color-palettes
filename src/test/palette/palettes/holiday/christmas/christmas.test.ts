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

import {christmasPalettes, Palette} from "../../../../../main";

describe('christmas palettes test', (): void => {
    test('christmas palettes map exists', (): void => {
        expect(christmasPalettes).toBeTruthy();
        const keys: string[] = Array.from(christmasPalettes.keys);
        const values: Palette[] = Array.from(christmasPalettes.values);
        expect(keys.length).toBeGreaterThan(0);
        expect(values.length).toBeGreaterThan(0);
        expect(values.length).toBe(keys.length);
    });

    test.each([
        {name: 'muted christmas'}
    ])('$# successful addition of palette: $name',
        ({name}): void => {
            expect(christmasPalettes).toBeTruthy();
            expect(new Set<string>(christmasPalettes.keys)).toContain(name);
        }
    );
});
