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
import {Color, ColorSelector, Random, SketchContext} from '@batpb/genart-base';
import {PaletteColor} from '../color';
import {Palette} from './palette';

const p5: P5Lib = SketchContext.p5;

class PaletteColorSelector extends ColorSelector {
    private _colors: PaletteColor[] = [];

    constructor(private readonly _palette: Palette,
                colorCount?: number,
                randomOrder?: boolean) {
        super(randomOrder);

        if (!colorCount) {
            colorCount = Random.randomInt(2, this._palette.colors.length + 1);
        }

        colorCount = p5.constrain(colorCount, 2, this._palette.colors.length);
        this.chooseColors(colorCount);
    }

    public override get hasPalette(): boolean {
        return true;
    }

    public override get name(): string {
        let paletteName: string = this._palette.name;

        if (!paletteName.toLowerCase().endsWith(' palette')) {
            paletteName += ' palette';
        }

        return paletteName;
    }

    public override get colorNames(): string[] {
        return this._colors.map((c: PaletteColor) => c.name);
    }

    public override getColor(): Color {
        return this.selectColorFromChoices();
    }

    private chooseColors(count: number): void {
        if (count === this._palette.colors.length) {
            this._colors = Array.from(this._palette.colors);
            this._palette.colors.forEach((paletteColor): void => {
                const color: Color = new Color(p5.color(paletteColor.hexString));
                this.addColorChoice(color);
            })
        } else {
            const colorIndices: number[] = [];
            for (let i: number = 0; i < this._palette.colors.length; i++) {
                colorIndices.push(i);
            }

            for (let i: number = 0; i < count; i++) {
                const index: number = Random.randomInt(0, colorIndices.length);
                const colorIndex: number = colorIndices[index];
                const paletteColor: PaletteColor = this._palette.colors[colorIndex];
                this._colors.push(paletteColor);
                const color: Color = new Color(p5.color(paletteColor.hexString));
                this.addColorChoice(color);
                colorIndices.splice(index, 1);
            }
        }
    }
}

export {PaletteColorSelector};
