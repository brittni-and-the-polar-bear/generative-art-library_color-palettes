/*
 * Copyright (C) 2023-2024 Brittni Watkins.
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
import {PaletteColor} from './palette-color';

/**
 * @public
 */
const paletteColors: StringMap<PaletteColor> = new StringMap<PaletteColor>();

function addColor(color: PaletteColor): void {
    const key: string = color.hexString;
    paletteColors.setUndefinedKey(key, color, `color ${key} already exists in palette colors.`);
}

import {_006f57} from './colors/006f57';
addColor(_006f57);
export {_006f57};

import {_23856d} from './colors/23856d';
addColor(_23856d);
export {_23856d};

import {_bb010b} from './colors/bb010b';
addColor(_bb010b);
export {_bb010b};

import {_cd1624} from './colors/cd1624';
addColor(_cd1624);
export {_cd1624};

import {_faf8f8} from './colors/faf8f8';
addColor(_faf8f8);
export {_faf8f8};

import {_fce4ec} from "./colors/fce4ec";
addColor(_fce4ec);
export {_fce4ec};

export {paletteColors};
