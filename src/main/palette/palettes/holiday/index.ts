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
import {Palette, addPalettes, getPaletteColorSelectors} from '../../palette';
import {PaletteColorSelector} from '../../palette-color-selector';

const holidayPalettes: StringMap<Palette> = new StringMap<Palette>();
const paletteMapName: string = 'holiday palettes';

import {christmasPalettes} from './christmas';
addPalettes(christmasPalettes.values, holidayPalettes, paletteMapName);

import {valentinesPalettes} from './valentines';
addPalettes(valentinesPalettes.values, holidayPalettes, paletteMapName);

const getHolidayColorSelectors = (): Set<PaletteColorSelector> =>
    getPaletteColorSelectors(holidayPalettes);

export {holidayPalettes, getHolidayColorSelectors};
export * from './christmas';
export * from './valentines';
