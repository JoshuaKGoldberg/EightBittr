import { PixelDrawr } from "pixeldrawr";

import { EightBittr } from "../EightBittr";
import { IThing } from "../IEightBittr";

export const createPixelDrawer = (eightBitter: EightBittr) =>
    new PixelDrawr({
        boundingBox: eightBitter.mapScreener,
        canvas: eightBitter.canvas,
        createCanvas: (width: number, height: number): HTMLCanvasElement =>
            eightBitter.utilities.createCanvas(width, height),
        generateObjectKey: (thing: IThing): string =>
            eightBitter.graphics.generateThingKey(thing),
        pixelRender: eightBitter.pixelRender,
        spriteCacheCutoff: eightBitter.graphics.spriteCacheCutoff,
        thingArrays: eightBitter.graphics.thingArrays,
        ...eightBitter.settings.components.pixelDrawer,
    });
