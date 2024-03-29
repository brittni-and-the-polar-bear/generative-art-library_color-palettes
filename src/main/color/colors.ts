/*
 * Copyright (C) 2023-2024 brittni and the polar bear LLC.
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

const paletteColors: StringMap<PaletteColor> = new StringMap<PaletteColor>();

function addColor(color: PaletteColor): void {
    const key: string = color.hexString;
    paletteColors.setUndefinedKey(key, color, `color ${key} already exists in palette colors.`);
}

import {_006f57} from './colors/006f57';
addColor(_006f57);
export {_006f57};

import {_0437f2} from './colors/0437f2';
addColor(_0437f2);
export {_0437f2};

import {_0fff4f} from './colors/0fff4f';
addColor(_0fff4f);
export {_0fff4f};

import {_121212} from './colors/121212';
addColor(_121212);
export {_121212};

import {_1d90af} from './colors/1d90af';
addColor(_1d90af);
export {_1d90af};

import {_23856d} from './colors/23856d';
addColor(_23856d);
export {_23856d};

import {_3a2112} from './colors/3a2112';
addColor(_3a2112);
export {_3a2112};

import {_7a00f5} from './colors/7a00f5';
addColor(_7a00f5);
export {_7a00f5};

import {_7dced8} from './colors/7dced8';
addColor(_7dced8);
export {_7dced8};

import {_bb010b} from './colors/bb010b';
addColor(_bb010b);
export {_bb010b};

import {_d01625} from './colors/d01625';
addColor(_d01625);
export {_d01625};

import {_ec407a} from './colors/ec407a';
addColor(_ec407a);
export {_ec407a};

import {_f06090} from './colors/f06090';
addColor(_f06090);
export {_f06090};

import {_f0f3f4} from './colors/f0f3f4';
addColor(_f0f3f4);
export {_f0f3f4};

import {_f48fb1} from './colors/f48fb1';
addColor(_f48fb1);
export {_f48fb1};

import {_f8bacf} from './colors/f8bacf';
addColor(_f8bacf);
export {_f8bacf};

import {_faf8f8} from './colors/faf8f8';
addColor(_faf8f8);
export {_faf8f8};

import {_fafeff} from './colors/fafeff';
addColor(_fafeff);
export {_fafeff};

import {_fce4ec} from './colors/fce4ec';
addColor(_fce4ec);
export {_fce4ec};

import {_ff6bb5} from './colors/ff6bb5';
addColor(_ff6bb5);
export {_ff6bb5};

export {paletteColors};
