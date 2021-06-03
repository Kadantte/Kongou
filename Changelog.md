# Changelog

## v2.5.7

Small updates to Docs and error handling.

- Added inteli docs for better understanding of what it does
  ![image](https://i.imgur.com/wELvt3e.png)
- Fixed the ID error handling bug.

## v2.5.6

This update features @sinkaroid's random function.

- Better comments?
- `random()` function.

## v2.5.5

This update "fixes" the module problem.

- Moved back to `module.exports`.
- All previous features are still in pact.

## v2.5.4

These new updates somewhat break v2.5.3, look at the updated wiki for more information.

- Updated the package file.

- Added thumbnails and moved images to `images.full`

- Moved to ECMA6+ script. (import and export)  
  This might have problems with regular/ES5 people...?

- Added new class function inside the index module so direct import and usage is enough.

```js
import kongou from "kongou";
await kongou.get(231193).then();
```

- Removed [moment](https://momentjs.com/) support for upload date.  
   I removed this because moment is used almost everywhere and the chance of you having that package is very high...  
  import moment on your side and format it, this is how I used to do this.

```js
import moment from 'moment'
moment(new Date(data.details.upload_date * 1000)).format(
        "MMMM Do YYYY, h:mm:ss a"
      ),
```
