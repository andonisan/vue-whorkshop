import { Hero } from '@/models/hero';
import { BaseUrl } from '@/models/constants';
import axios from "axios";

export interface IHeroService {
    getHeroes(): Promise<Hero[]>;
    updateHero(hero: Hero): Promise<void>;
}

export class HeroService implements IHeroService {
    public async getHeroes(): Promise<Hero[]> {
        const httpClient = axios.create({
            baseURL: BaseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const rawResponse = await httpClient.get<Hero[]>(`heroes`);
        return rawResponse.data;
    }

    public async updateHero(hero: Hero): Promise<void> {
        const httpClient = axios.create({
            baseURL: BaseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        await httpClient.put(`hero/${hero.id}`, hero);
    }
}