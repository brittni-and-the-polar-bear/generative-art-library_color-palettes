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
import {Color, SketchContext} from '@batpb/genart-base';
import {_0fff4f, _121212, brittni, glitter, mutedChristmas, Palette, PaletteColorSelector} from '../../main';
import {ColorComponents, colorToColorComponents, p5ColorToColorComponents} from '../index';

const p5: P5Lib = SketchContext.p5;

function paletteToColorComponents(palette: Palette): ColorComponents[] {
    const components: ColorComponents[] = [];
    for (const color of palette.colors) {
        components.push(color.rgb);
    }
    return components;
}

describe('palette color selector tests', (): void => {
    test('palette color selector: brittni palette, max colors, in order', (): void => {
        const selector: PaletteColorSelector = new PaletteColorSelector(
            brittni,
            brittni.colors.length,
            false);
        for (let i: number = 0; i < brittni.colors.length; i++) {
            const c: Color = selector.getColor();
            const cComponents: ColorComponents = colorToColorComponents(c);
            const expected: P5Lib.Color = p5.color(brittni.colors[i].hexString);
            const expectedComponents: ColorComponents = p5ColorToColorComponents(expected);
            expect(cComponents).toEqual(expectedComponents);
        }

        const last: Color = selector.getColor();
        const lastComponents: ColorComponents = colorToColorComponents(last);
        const lastExpected: P5Lib.Color = p5.color(brittni.colors[0].hexString);
        const leComponents: ColorComponents = p5ColorToColorComponents(lastExpected);
        expect(lastComponents).toEqual(leComponents);
    });

    test('palette color selector: glitter, 3 colors, in order', (): void => {
        const numColors: number = 3;
        const palette: Palette = glitter;
        const selector: PaletteColorSelector = new PaletteColorSelector(
            palette,
            numColors,
            false);
        const validColors: ColorComponents[] = paletteToColorComponents(palette);
        const inOrderColors: Color[] = [];

        for (let i: number = 0; i < numColors; i++) {
            const c: Color = selector.getColor();
            const cComponents: ColorComponents = colorToColorComponents(c);
            expect(validColors).toContainEqual(cComponents);
            inOrderColors.push(c);
        }

        for (let i: number = 0; i < numColors; i++) {
            const c: Color = selector.getColor();
            const cComponents: ColorComponents = colorToColorComponents(c);
            const expected: Color = inOrderColors[i];
            const expectedComponents: ColorComponents = colorToColorComponents(expected);
            expect(cComponents).toEqual(expectedComponents);
        }
    });

    test('palette color selector: muted christmas palette, max colors, random order', (): void => {
        const palette: Palette = mutedChristmas;
        const numColors: number = palette.colors.length;
        const selector: PaletteColorSelector = new PaletteColorSelector(
            palette,
            numColors,
            true);
        const validColors: ColorComponents[] = paletteToColorComponents(palette);

        for (let i: number = 0; i < numColors * 2; i++) {
            const c: Color = selector.getColor();
            const cComponents: ColorComponents = colorToColorComponents(c);
            expect(validColors).toContainEqual(cComponents);
        }
    });

    test('palette color selector: muted christmas palette, 2 colors, random order', (): void => {
        const palette: Palette = mutedChristmas;
        const numColors: number = 2;
        const selector: PaletteColorSelector = new PaletteColorSelector(
            palette,
            numColors,
            true);
        const validColors: ColorComponents[] = paletteToColorComponents(palette);

        for (let i: number = 0; i < numColors * 2; i++) {
            const c: Color = selector.getColor();
            const cComponents: ColorComponents = colorToColorComponents(c);
            expect(validColors).toContainEqual(cComponents);
        }
    });

    test('palette color selector: glitter palette', (): void => {
        const palette: Palette = glitter;
        const selector: PaletteColorSelector = new PaletteColorSelector(palette);
        const validColors: ColorComponents[] = paletteToColorComponents(palette);

        for (let i: number = 0; i < 10; i++) {
            const c: Color = selector.getColor();
            const cComponents: ColorComponents = colorToColorComponents(c);
            expect(validColors).toContainEqual(cComponents);
        }
    });

    test('palette color selector: 2 color palette', (): void => {
        const palette: Palette = {
            name: 'test',
            source: 'test',
            colors: [
                _121212,
                _0fff4f
            ]
        }
        const selector: PaletteColorSelector = new PaletteColorSelector(palette);
        const validColors: ColorComponents[] = paletteToColorComponents(palette);

        for (let i: number = 0; i < 10; i++) {
            const c: Color = selector.getColor();
            const cComponents: ColorComponents = colorToColorComponents(c);
            expect(validColors).toContainEqual(cComponents);
        }
    });
});
