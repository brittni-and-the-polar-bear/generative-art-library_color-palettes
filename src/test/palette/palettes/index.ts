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

import {christmasPalettes, Palette} from '../../../main';

export function checkForValidPalette(palette: Palette): void {
    expect(palette).toBeTruthy();
    expect(palette.name).toBeTruthy();
    expect(palette.colors).toBeTruthy();
    expect(palette.source).toBeTruthy();
}

export function checkForPaletteInMap(palette: Palette, palettes: StringMap<Palette>): void {
    expect(palettes).toBeTruthy();
    checkForValidPalette(palette);
    expect(new Set<string>(christmasPalettes.keys)).toContain(palette.name);
}
