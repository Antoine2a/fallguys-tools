import { Duration, DurationObjectUnits } from 'luxon';

// =========
// ENUMS

enum LevelTypeEnum {
    Race,
    Survival,
    Hunt,
    Logic,
    Team,
    Final,
    Invisibeans,
}

// LevelStats(string levelName, LevelType type, bool isFinal, int season) {

enum NbPlayerCategoryEnum { // could rename the enum, not fan of this; not fan of 'numberOfPlayerEnum' too.
    Solo,
    Duo,
    Squad,
}
enum SpeedrunCategoryEnum {
    AnyPercent, // just finish the map the fatest way you can
    Glitchless, // glitchs allowed
    OutDated, // mecanics of the game/maps have changed,
    PointsScored,
    PointsDifference,
    SoloPoints,
    EvenTeam,
}

enum NationalityCategoryEnum {
    WR, // World Record
    FR, // French Record
}

enum RecordTypeEnum {
    ScoreBased,
    TimeBased,
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
    levelType: LevelTypeEnum;
    season: number;
    speedrun?: Tspeedrun[];
};

type Tspeedrun = {
    variantMap: 'default' | 'timeattack' | string; // ou alors variant? dans TSpeedrunDetails TSpeedrun[]
    speedrunDetails: TspeedrunDetails[];
};

type TspeedrunDetails = {
    category: SpeedrunCategoryEnum;
    nbPlayerCategory?: NbPlayerCategoryEnum;
    recordType: RecordTypeEnum;
    records?: TspeedrunRecord[] | 'N/A';
};

type TspeedrunRecord = {
    nationalityType: NationalityCategoryEnum;
    nametags: string | string[];
    recordTypeValue: DurationObjectUnits | number; // time based OU point based, should be based on recordType
    url: string;
    mediaType: MediaEnum;
    date?: Date;
};

// =========
// DATA

// url: regex sur url?

const races: Tround[] = [
    {
        idName: 'round_biggestfan',
        levelName: 'Big Fans',
        levelType: LevelTypeEnum.Race,
        season: 2,
        speedrun: [
            {
                variantMap: 'default',
                speedrunDetails: [
                    {
                        category: SpeedrunCategoryEnum.AnyPercent,
                        nbPlayerCategory: NbPlayerCategoryEnum.Solo,
                        recordType: RecordTypeEnum.TimeBased,
                        records: [
                            {
                                nationalityType: NationalityCategoryEnum.WR,
                                nametags: '海神星球',
                                recordTypeValue: Duration.fromObject({ seconds: 47, milliseconds: 89 }),
                                url: 'https://www.bilibili.com/video/BV1RG411g7mW',
                                mediaType: MediaEnum.Bilibili,
                                // date: ''
                            },
                            {
                                nationalityType: NationalityCategoryEnum.FR,
                                nametags: 'edouardo75_015',
                                recordTypeValue: Duration.fromObject({ seconds: 47, milliseconds: 96 }),
                                url: 'https://youtu.be/X9_RCYrahs0',
                                mediaType: MediaEnum.Youtube,
                            },
                        ],
                    },
                    {
                        category: SpeedrunCategoryEnum.OutDated,
                        nbPlayerCategory: NbPlayerCategoryEnum.Solo,
                        recordType: RecordTypeEnum.TimeBased,
                        records: [
                            {
                                nationalityType: NationalityCategoryEnum.WR,
                                nametags: 'sxyd',
                                recordTypeValue: Duration.fromObject({ seconds: 44, milliseconds: 81 }),
                                url: 'https://youtu.be/KY_QdbFl52Q',
                                mediaType: MediaEnum.Youtube,
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

const survivals: Tround[] = []; // no records in this category

const hunts: Tround[] = [
    {
        idName: 'round_hoops_blockade_solo',
        levelName: 'Hoopsie Legends',
        levelType: LevelTypeEnum.Hunt,
        season: 2,
        speedrun: [
            {
                variantMap: 'default',
                speedrunDetails: [
                    {
                        category: SpeedrunCategoryEnum.AnyPercent,
                        nbPlayerCategory: NbPlayerCategoryEnum.Solo,
                        recordType: RecordTypeEnum.TimeBased,
                        records: [
                            {
                                nationalityType: NationalityCategoryEnum.WR,
                                nametags: 'Ferry_oxid',
                                recordTypeValue: Duration.fromObject({ seconds: 4, milliseconds: 24 }),
                                url: 'https://streamable.com/4yrhb0',
                                mediaType: MediaEnum.Streamable,
                            },
                        ],
                    },
                    {
                        category: SpeedrunCategoryEnum.AnyPercent,
                        nbPlayerCategory: NbPlayerCategoryEnum.Duo,
                        recordType: RecordTypeEnum.TimeBased,
                        records: [
                            {
                                nationalityType: NationalityCategoryEnum.WR,
                                nametags: ['Cryptic_19', 'x2_legacy123'],
                                recordTypeValue: Duration.fromObject({ seconds: 15, milliseconds: 7 }),
                                // unrecorded WR might be 14.49 by 123JLaney123 / Bingus
                                url: 'https://youtu.be/9xQIHeIOFsk',
                                mediaType: MediaEnum.Youtube,
                            },
                        ],
                    },
                    {
                        category: SpeedrunCategoryEnum.AnyPercent,
                        nbPlayerCategory: NbPlayerCategoryEnum.Squad,
                        recordType: RecordTypeEnum.TimeBased,
                        records: [
                            {
                                nationalityType: NationalityCategoryEnum.WR,
                                nametags: ['TheTruePringle', 'Jimbo_Slice77', 'Johnny Flawless', '???'],
                                recordTypeValue: Duration.fromObject({ seconds: 24, milliseconds: 45 }),
                                url: 'https://youtu.be/hZPz0maJj0g ',
                                mediaType: MediaEnum.Youtube,
                            },
                        ],
                    },
                ],
            },
            {
                variantMap: 'Hoopsie Legends Final',
                speedrunDetails: [
                    {
                        category: SpeedrunCategoryEnum.AnyPercent,
                        nbPlayerCategory: NbPlayerCategoryEnum.Solo,
                        recordType: RecordTypeEnum.TimeBased,
                        records: [
                            {
                                nationalityType: NationalityCategoryEnum.WR,
                                nametags: '123JLaney123',
                                recordTypeValue: Duration.fromObject({ seconds: 9, milliseconds: 78 }),
                                url: 'https://youtu.be/viU2x6weupg',
                                mediaType: MediaEnum.Youtube,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        idName: 'round_follow-the-leader_s6_launch',
        levelName: 'Leading Light',
        levelType: LevelTypeEnum.Hunt,
        season: 6,
        speedrun: [
            {
                variantMap: 'default',
                speedrunDetails: [
                    {
                        category: SpeedrunCategoryEnum.AnyPercent,
                        nbPlayerCategory: NbPlayerCategoryEnum.Solo,
                        recordType: RecordTypeEnum.TimeBased,
                        records: [
                            {
                                nationalityType: NationalityCategoryEnum.WR,
                                nametags: '123JLaney123',
                                recordTypeValue: Duration.fromObject({ seconds: 24, milliseconds: 40 }),
                                // unrecorded WR is 24.39 by Bushy9k
                                url: 'https://youtu.be/aVZy5eSXpSU',
                                mediaType: MediaEnum.Streamable,
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

// ==================
// https://www.tiktok.com/@scout2015/video/6718335390845095173
// TWITTER, hoopsie Legends 10.21s FR xFantsu : https://twitter.com/xFantsu/status/1593905159855382528
// Youtube 1, xFantsu, Bounce Party 36.26s, url : https://www.youtube.com/watch?v=34LsNLeBhxY
// TikTok , pixelPainters Sayyto, MissMusti, KennyShield_, Fougereシ,  https://www.tiktok.com/@fougere____/video/7157338215681199365?
// Youtube 2 , eouardo75_015, big fans : https://youtu.be/X9_RCYrahs0 47.96
// streamable : 123JLaney123 PartyPromenade(Glitchless) https://streamable.com/3f4v0j 52.49
// reddit : fruit chute : 7.47s, https://reddit.com/r/FallGuysGame/comments/ilsinx/how_to_win_fruit_chute/
// Bilibili : Bigs Fans Glitchless: 47.89 https://www.bilibili.com/video/BV1RG411g7mW by "海神星球"
// Twitch clip : L7L7, Slime Climb (Glitchless): 27.95 https://www.twitch.tv/l7l7/clip/StrangeBlindingWitchHeyGuys-BuPDHJU-p_edlnPX

// blob:https://player.twitch.tv/b8109be6-43cd-4639-89d1-bf4d107d8e65
// ==================

const logics: Tround[] = []; // no records in this category

const teams: Tround[] = [
    {
        idName: 'round_jinxed',
        levelName: 'Jinxed',
        levelType: LevelTypeEnum.Team,
        season: 1,
        speedrun: [
            {
                variantMap: 'default',
                speedrunDetails: [
                    {
                        category: SpeedrunCategoryEnum.AnyPercent,
                        recordType: RecordTypeEnum.TimeBased,
                        records: [
                            {
                                nationalityType: NationalityCategoryEnum.WR,
                                nametags: ['Juicebox190', 'Kjp415', 'basketballkid10', 'iNemoBee'],
                                recordTypeValue: Duration.fromObject({ seconds: 2, milliseconds: 50 }),
                                url: 'https://youtu.be/1EsD6urIpt8',
                                mediaType: MediaEnum.Youtube,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        idName: 'round_basketfall_s4_show',
        levelName: 'Basketfall',
        levelType: LevelTypeEnum.Team,
        season: 4,
        speedrun: [
            {
                variantMap: 'default',
                speedrunDetails: [
                    {
                        category: SpeedrunCategoryEnum.PointsScored,
                        recordType: RecordTypeEnum.ScoreBased,
                        records: [
                            {
                                nationalityType: NationalityCategoryEnum.WR,
                                nametags: ['123JLaney123', 'BeMoreRoyal', 'basketballkid10', 'kiwi_goober', '??? (x7)'],
                                recordTypeValue: 37,
                                url: 'https://streamable.com/55bn6g',
                                mediaType: MediaEnum.Streamable,
                            },
                        ],
                    },
                    {
                        category: SpeedrunCategoryEnum.PointsDifference,
                        recordType: RecordTypeEnum.ScoreBased,
                        records: [
                            {
                                nationalityType: NationalityCategoryEnum.WR,
                                nametags: ['123JLaney123', 'BeMoreRoyal', 'basketballkid10', 'kiwi_goober', '??? (x7)'],
                                recordTypeValue: 28,
                                url: 'https://streamable.com/55bn6g',
                                mediaType: MediaEnum.Streamable,
                            },
                        ],
                    },
                    {
                        category: SpeedrunCategoryEnum.SoloPoints,
                        recordType: RecordTypeEnum.ScoreBased,
                        records: 'N/A',
                    },
                ],
            },
        ],
    },
    {
        idName: 'round_chicken_chase',
        levelName: 'Pegwin Pursuit',
        levelType: LevelTypeEnum.Team,
        season: 3,
        speedrun: [
            {
                variantMap: 'default',
                speedrunDetails: [
                    {
                        category: SpeedrunCategoryEnum.PointsScored,
                        recordType: RecordTypeEnum.ScoreBased,
                        records: [
                            {
                                nationalityType: NationalityCategoryEnum.WR,
                                nametags: ['Big Good Lad', 'T1R0N-_-', 'K4_Cynical', 'F_Esprecto_P'],
                                recordTypeValue: 434,
                                url: 'https://youtu.be/5yICxxIdzDc',
                                mediaType: MediaEnum.Youtube,
                            },
                        ],
                    },
                    {
                        category: SpeedrunCategoryEnum.PointsDifference,
                        recordType: RecordTypeEnum.ScoreBased,
                        records: [
                            {
                                nationalityType: NationalityCategoryEnum.WR,
                                nametags: ['Big Good Lad', 'T1R0N-_-', 'K4_Cynical', 'F_Esprecto_P'],
                                recordTypeValue: 434,
                                url: 'https://youtu.be/5yICxxIdzDc',
                                mediaType: MediaEnum.Youtube,
                            },
                        ],
                    },
                    {
                        category: SpeedrunCategoryEnum.PointsScored,
                        nbPlayerCategory: NbPlayerCategoryEnum.Duo,
                        recordType: RecordTypeEnum.ScoreBased,
                        records: [
                            {
                                nationalityType: NationalityCategoryEnum.WR,
                                nametags: ['Celius007 ', 'RealBam'],
                                recordTypeValue: 411,
                                url: 'https://www.reddit.com/r/FallGuysGame/comments/ya4cuv/a_very_competitive_close_match_i_thought_i_was',
                                mediaType: MediaEnum.Reddit,
                            },
                        ],
                    },
                    {
                        category: SpeedrunCategoryEnum.PointsDifference,
                        nbPlayerCategory: NbPlayerCategoryEnum.Duo,
                        recordType: RecordTypeEnum.ScoreBased,
                        records: [
                            {
                                nationalityType: NationalityCategoryEnum.WR,
                                nametags: ['Celius007 ', 'RealBam'],
                                recordTypeValue: 381,
                                url: 'https://www.reddit.com/r/FallGuysGame/comments/ya4cuv/a_very_competitive_close_match_i_thought_i_was',
                                mediaType: MediaEnum.Reddit,
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

const finals: Tround[] = [
    {
        idName: 'round_fall_mountain_hub_complete',
        levelName: 'Fall Mountain',
        levelType: LevelTypeEnum.Final,
        season: 1,
        speedrun: [
            {
                variantMap: 'default',
                speedrunDetails: [
                    {
                        category: SpeedrunCategoryEnum.AnyPercent,
                        recordType: RecordTypeEnum.TimeBased,
                        records: [
                            {
                                nationalityType: NationalityCategoryEnum.WR,
                                nametags: 'Bingus',
                                recordTypeValue: Duration.fromObject({ seconds: 28, milliseconds: 40 }),
                                url: 'https://youtu.be/vwRmGmhhVa0',
                                mediaType: MediaEnum.Youtube,
                            },
                        ],
                    },
                ],
            },
            {
                variantMap: 'Warped',
                speedrunDetails: [
                    {
                        category: SpeedrunCategoryEnum.AnyPercent,
                        recordType: RecordTypeEnum.TimeBased,
                        records: [
                            {
                                nationalityType: NationalityCategoryEnum.WR,
                                nametags: 'Poloars65',
                                recordTypeValue: Duration.fromObject({ seconds: 29, milliseconds: 58 }),
                                url: 'https://clips.twitch.tv/NurturingBluePidgeonWow-wpIUJHE_Fw6gri3B',
                                mediaType: MediaEnum.Twitch,
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

const invisibeans: Tround[] = []; // no records in this category

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
