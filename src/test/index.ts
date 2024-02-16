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

import {StringMap} from '@batpb/genart-base';

import {Palette, PaletteColor} from '../main';

export function checkForValidStringMap(map: StringMap<Palette|PaletteColor>): void {
    expect(map).toBeTruthy();
    const keys: string[] = Array.from(map.keys);
    const values: (Palette|PaletteColor)[] = Array.from(map.values);
    expect(keys.length).toBeGreaterThan(0);
    expect(values.length).toBeGreaterThan(0);
    expect(values.length).toBe(keys.length);
}
