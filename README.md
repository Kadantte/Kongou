
<a href="https://i.imgur.com/6geUHqy.png"><img src="https://i.imgur.com/6geUHqy.png" title="The goddess: 1st battlecruiser, Kongō class," /></a>
[<p align=center> Original Artwork](https://www.pixiv.net/en/artworks/83860230)<p align=center>

```
The ShipGirl Project, feat Shoukaku; ⓒ Kancolle
```

[![Discord](https://img.shields.io/discord/698062395263942686?color=%235A71C3&label=Discord&logo=discord&logoColor=white)](https://discord.gg/ymuR2htTfy)
***
# Kongou
A node.js battleship that directly uses nhentai's API.

### Features

✅ Simple

✅ Stable

✅ 100% API coverage

✅ Cutest shipgirl ❤ (Very Important)


### Installation

```
npm i kongou
```

### Documentation

> https://github.com/cCurmudgeon/Kongou/wiki

### Example
```
const kongou = require("kongou");
const nhentai = new kongou();

  async function Q() {
    const data = await nhentai.query('艦隊これくしょん');
    console.log(data);
  }
Q();

```

or

```
const kongou = require("kongou");
const nhentai = new kongou();
async function Q() {
await nhentai.query('艦隊これくしょん').then((data) => console.log(data));
}
Q();

```

For more information check the wiki.
