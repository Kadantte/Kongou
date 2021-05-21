# [**Kongou**](https://www.npmjs.com/package/kongou)

[![image](https://i.imgur.com/6geUHqy.png)](https://www.pixiv.net/en/artworks/83860230)

```;
The ShipGirl Project, feat Kongou; ⓒ Kancolle
```

**A nodejs battleship that wraps around nhentai's API.**

## Features

✅ Simple & Stable

✅ 100% API coverage

✅ Cute shipgirl ❤

## Installation

```sh
npm i kongou
```

## [Documentation](https://github.com/Curstantine/Kongou/wiki)

### Functions

1. [get()](https://github.com/Curstantine/Kongou/wiki/Functions#get)
2. [query()](https://github.com/Curstantine/Kongou/wiki/Functions#query)
3. [random()](https://github.com/Curstantine/Kongou/wiki/Functions#random)

### Options

1. [Sort](https://github.com/Curstantine/Kongou/wiki/Options#sort)
2. [Keyword](https://github.com/Curstantine/Kongou/wiki/Options#keyword)
3. [Page](https://github.com/Curstantine/Kongou/wiki/Options#page)

## Examples

```js
const kongou = require("kongou");
await kongou
  .get(223435)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

or

```js
const kongou = require("kongou");
await kongou
  .query("艦隊これくしょん")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

For more information check the [wiki](https://github.com/Curstantine/Kongou/wiki).

[![Discord](https://img.shields.io/discord/698062395263942686?color=%235A71C3&label=Discord&logo=discord&logoColor=white)](https://discord.gg/ymuR2htTfy)
