import { AudioPlayr } from "audioplayr";

import { GameStartr } from "../GameStartr";

export const createAudioPlayer = (gameStarter: GameStartr) =>
    new AudioPlayr({
        storage: gameStarter.itemsHolder,
        ...gameStarter.settings.components.audio,
    });