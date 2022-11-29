import { Duration, DurationObjectUnits } from 'luxon';

// =========
// ENUMS

enum RoundEnum {
    Race,
    Survival,
    Hunt,
    Logic,
    Team,
    Final,
    Invisibeans,
}

// LevelStats(string levelName, LevelType type, bool isFinal, int season) {

enum ShowModeEnum { // could rename the enum, not fan of this; not fan of 'numberOfPlayerEnum' too.
    Solo,
    Duo,
    Squad,
}
enum SpeedrunCategoryEnum {
    AnyPercent, // just finish the map the fatest way you can
    Glitch, // glitchs allowed
    OutDated, // mecanics of the game/maps have changed
}

enum RecordEnum {
    WR, // World Record
    FR, // French Record
}
enum MediaEnum {
    Bilibili,
    Reddit,
    Streamable,
    Tiktok,
    Twitch,
    Twitter,
    Youtube,
    Others,
}

// =========
// TYPES

type Tround = {
    idName: string;
    levelName: string;
    levelType: RoundEnum;
    season: number;
    speedrun: Tspeedrun[];
};

type Tspeedrun = {
    category: SpeedrunCategoryEnum;
    type: ShowModeEnum;
    records?: TspeedrunRecord[];
};

type TspeedrunRecord = {
    recordType: RecordEnum;
    nametag: string;
    nametag2?: string;
    nametag3?: string;
    nametag4?: string;
    time: DurationObjectUnits;
    url: string;
    mediaType: MediaEnum;
    url2?: string;
    mediaType2?: string;
};

// =========
// DATA

// url: regex sur url?

const races: Tround[] = [
    {
        idName: 'round_biggestfan',
        levelName: 'Big Fans',
        levelType: RoundEnum.Race,
        season: 2,
        speedrun: [
            {
                category: SpeedrunCategoryEnum.AnyPercent,
                type: ShowModeEnum.Solo,
                records: [
                    {
                        recordType: RecordEnum.WR,
                        nametag: '海神星球',
                        time: Duration.fromObject({ seconds: 47, milliseconds: 89 }),
                        url: 'https://www.bilibili.com/video/BV1RG411g7mW',
                        mediaType: MediaEnum.Bilibili,
                    },
                    {
                        recordType: RecordEnum.FR,
                        nametag: 'edouardo75_015',
                        time: Duration.fromObject({ seconds: 47, milliseconds: 96 }),
                        url: 'https://youtu.be/X9_RCYrahs0',
                        mediaType: MediaEnum.Youtube,
                    },
                ],
            },
            {
                category: SpeedrunCategoryEnum.OutDated,
                type: ShowModeEnum.Solo,
                records: [
                    {
                        recordType: RecordEnum.WR,
                        nametag: 'sxyd',
                        time: Duration.fromObject({ seconds: 44, milliseconds: 81 }),
                        url: 'https://youtu.be/KY_QdbFl52Q',
                        mediaType: MediaEnum.Youtube,
                    },
                ],
            },
        ],
    },
];

const hunts: Tround[] = [
    {
        idName: 'round_hoops_blockade_solo',
        levelName: 'Hoopsie Legends',
        levelType: RoundEnum.Hunt,
        season: 2,
        speedrun: [],
    },
];

// ==================
// TWITTER, hoopsie Legends 10.21s FR xFantsu : https://twitter.com/xFantsu/status/159305159855382528
// Youtube 1, xFantsu, Bounce Party 36.26s, url : https://www.youtube.com/watch?v=34LsNLeBhxY
// TikTok , pixelPainters Sayyto, MissMusti, KennyShield_, Fougereシ,  https://www.tiktok.com/@fougere____/video/7157338215681199365?
// Youtube 2 , eouardo75_015, big fans : https://youtu.be/X9_RCYrahs0 47.96
// streamable : 123JLaney123 PartyPromenade(Glitchless) https://streamable.com/3f4v0j 52.49
// reddit : fruit chute : 7.47s, https://reddit.com/r/FallGuysGame/comments/ilsinx/how_to_win_fruit_chute/
// Bilibili : Bigs Fans Glitchless: 47.89 https://www.bilibili.com/video/BV1RG411mW by "海神星球"
// Twitch clip : L7L7, Slime Climb (Glitchless): 27.95 https://www.twitch.tv/l7l7/clip/StrangeBlindingWitchHeyGuys-BuPDHJU-p_edlnPX
// ==================

const survivals: Tround[] = [];
const logics: Tround[] = [];
const teams: Tround[] = [];
const finals: Tround[] = [];
const invisibeans: Tround[] = [];

const speedrun = {
    races,
    survivals,
    hunts,
    logics,
    teams,
    finals,
    invisibeans,
};

export default speedrun;
