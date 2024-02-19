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
import {addPalettes, getPaletteColorSelectors, Palette} from "./palette";

const allPalettes: StringMap<Palette> = new StringMap<Palette>();

const paletteMapName: string = 'all palettes';

import {holidayPalettes} from './palettes/holiday';
addPalettes(holidayPalettes.values, allPalettes, paletteMapName);

import {miscPalettes} from './palettes/misc';
import {PaletteColorSelector} from "./palette-color-selector";
addPalettes(miscPalettes.values, allPalettes, paletteMapName);

const getAllPaletteColorSelectors = (): Set<PaletteColorSelector> =>
    getPaletteColorSelectors(allPalettes);

export {allPalettes, getAllPaletteColorSelectors};
export * from './palettes/holiday';
export * from './palettes/misc';
