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

import {StringMap} from '@batpb/genart-base';

import {Palette, PaletteColor} from '../../../main';

export function checkForValidPalette(palette: Palette): void {
    expect(palette).toBeTruthy();
    expect(palette.name).toBeTruthy();
    expect(palette.colors).toBeTruthy();
    expect(palette.source).toBeTruthy();
}

export function checkForPaletteInMap(palette: Palette, palettes: StringMap<Palette>): void {
    expect(palettes).toBeTruthy();
    checkForValidPalette(palette);
    expect(new Set<string>(palettes.keys)).toContain(palette.name);
}

export function buildPaletteColorTestArray(colors: PaletteColor[]):
    ({color: PaletteColor, hexString: string})[] {
    const testArray: ({color: PaletteColor, hexString: string})[] = [];

    for (const c of colors) {
        testArray.push({color: c, hexString: c.hexString});
    }

    return testArray;
}

export function buildPaletteTestArray(palettes: Palette[]):
    ({palette: Palette, name: string})[] {
    const testArray: ({palette: Palette, name: string})[] = [];

    for (const p of palettes) {
        testArray.push({palette: p, name: p.name});
    }

    return testArray;
}
