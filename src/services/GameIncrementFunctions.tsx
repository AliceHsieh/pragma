import {IGameData} from "./GameData";
import makeSound, {SoundEffect} from "./sound";

export type IIncrementFunction = (gameData: IGameData) => Promise<IGameData>;

async function randomDeath(gameData: IGameData): Promise<IGameData> {
	gameData.population -= Math.floor(Math.random() * 5 + 1);
	return gameData;
}

async function backgroundMusic(gameData: IGameData): Promise<IGameData> {
	let music: SoundEffect;
	if (gameData.time > 71) {
		console.log(gameData.time);
		music = SoundEffect.BGSLOW;
	} else if (gameData.time < 10) {
		console.log(gameData.time);
		music = SoundEffect.BGFAST;
	} else {
		console.log(gameData.time);
		music = SoundEffect.BGMEDIUM;
	}
	if (gameData.music !== music) {
		makeSound()[music]();
		gameData.music = music;
	}
	return gameData;
}

const gameIncrementFunctions: IIncrementFunction[] = [
	randomDeath,
	backgroundMusic,
];


export default gameIncrementFunctions;
