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

import P5Lib from 'p5';
import {Color,SketchContext} from '@batpb/genart-base';

import {PaletteColor, paletteColors} from '../../main';

import {checkForValidStringMap} from '../index';

const p5: P5Lib = SketchContext.p5;

interface ColorComponents {
    readonly r: number,
    readonly g: number,
    readonly b: number
}

function p5ColorToColorComponents(color: P5Lib.Color): ColorComponents {
    return {
        r: Math.floor(p5.red(color)),
        g: Math.floor(p5.green(color)),
        b: Math.floor(p5.blue(color)),
    };
}

function withinAmount(value: number, expected: number, range: number): void {
    expect(value).toBeGreaterThanOrEqual(expected - range);
    expect(value).toBeLessThanOrEqual(expected + range);
}

function checkComponents(actual: ColorComponents, expected: PaletteColor): void {
    withinAmount(actual.r, expected.rgb.r, 1);
    withinAmount(actual.g, expected.rgb.g, 1);
    withinAmount(actual.b, expected.rgb.b, 1);
}

function buildTestColorsArray(): {c: PaletteColor}[] {
    const colors: {c: PaletteColor}[] = [];
    for (const col of paletteColors.values) {
        colors.push({c: col});
    }

    return colors;
}

describe('colors tests', (): void => {
    test('palette colors map exists', (): void => {
        checkForValidStringMap(paletteColors);
    });

    test.each(
       buildTestColorsArray()
    )('$# consistent color: $c.hexString',
        ({c}): void => {
            const hsl: P5Lib.Color = Color.getHSLColor(c.hsl.h, c.hsl.s, c.hsl.l);
            const hslComponents: ColorComponents = p5ColorToColorComponents(hsl);
            checkComponents(hslComponents, c);

            const hex: P5Lib.Color = p5.color(c.hexString);
            const hexComponents: ColorComponents = p5ColorToColorComponents(hex);
            checkComponents(hexComponents, c);
        }
    );

    test.each([
        {hexString: '#006F57'},
        {hexString: '#23856D'}
    ])('$# successful addition of green color: $hexString',
        ({hexString}): void => {
            expect(paletteColors).toBeTruthy();
            expect(new Set<string>(paletteColors.keys)).toContain(hexString);
        }
    );

    test.each([
        {hexString: '#BB010B'},
        {hexString: '#D01625'}
    ])('$# successful addition of red color: $hexString',
        ({hexString}): void => {
            expect(paletteColors).toBeTruthy();
            expect(new Set<string>(paletteColors.keys)).toContain(hexString);
        }
    );

    test.each([
        {hexString: '#EC407A'},
        {hexString: '#F06090'},
        {hexString: '#F48FB1'},
        {hexString: '#F8BACF'}
    ])('$# successful addition of pink color: $hexString',
        ({hexString}): void => {
            expect(paletteColors).toBeTruthy();
            expect(new Set<string>(paletteColors.keys)).toContain(hexString);
        }
    );

    test.each([
        {hexString: '#FAF8F8'},
        {hexString: '#FCE4EC'}
    ])('$# successful addition of white color: $hexString',
        ({hexString}): void => {
            expect(paletteColors).toBeTruthy();
            expect(new Set<string>(paletteColors.keys)).toContain(hexString);
        }
    );
});
