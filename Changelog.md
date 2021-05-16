# v2.5.4

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
