# **Kongou**

<a href="https://i.imgur.com/6geUHqy.png">
<img align=center title="1st battlecruiser, Kongō class" src="https://i.imgur.com/6geUHqy.png"/>
</a>

[<p align=center> Original Artwork](https://www.pixiv.net/en/artworks/83860230)

```;
The ShipGirl Project, feat Kongou; ⓒ Kancolle
```

**A node.js battleship that directly uses nhentai's API.**<br>



## Features

✅ Simple

✅ Stable

✅ 100% API coverage

✅ Cutest shipgirl ❤ (Very Important)

## Installation

```bash
npm i kongou
```


## [Documentation](https://github.com/cCurmudgeon/Kongou/wiki)
<br>


## Examples

```js
const kongou = require("kongou");
const nhentai = new kongou();

async function Q() {
  const data = await nhentai.query("艦隊これくしょん");
  console.log(data);
}
Q();
```

or

```js
const kongou = require("kongou");
const nhentai = new kongou();
async function Q() {
  await nhentai.query("艦隊これくしょん").then((data) => console.log(data));
}
Q();
```

For more information check the [wiki](https://github.com/cCurmudgeon/Kongou/wiki).

[![Discord](https://img.shields.io/discord/698062395263942686?color=%235A71C3&label=Discord&logo=discord&logoColor=white)](https://discord.gg/ymuR2htTfy)