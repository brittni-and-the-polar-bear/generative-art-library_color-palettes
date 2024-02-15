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
import {PaletteColor} from '../color';

/**
 * @public
 */
interface Palette {
    name: string,
    source: string,
    colors: PaletteColor[]
}

export {type Palette};

/**
 * @public
 * @param palette -
 * @param paletteMap -
 * @param paletteMapName -
 */
export function addPalette(palette: Palette, paletteMap: StringMap<Palette>, paletteMapName: string): void {
    const key: string = palette.name;
    paletteMap.setUndefinedKey(
        key,
        palette,
        `palette ${key} already exists in ${paletteMapName}.`
    );
}

/**
 * @public
 * @param palettes -
 * @param paletteMap -
 * @param paletteMapName -
 */
export function addPalettes(palettes: IterableIterator<Palette>, paletteMap: StringMap<Palette>, paletteMapName: string): void {
    for (const palette of palettes) {
        const key: string = palette.name;
        paletteMap.setUndefinedKey(
            key,
            palette,
            `palette ${key} already exists in ${paletteMapName}.`
        );
    }
}
