# v2.5.4

- Updated the package file.

- Added thumbnails and moved images to `images.full`

- Removed [moment](https://momentjs.com/) support for upload date.  
   I removed this because moment is used almost everywhere and the chance of you having that package is very high...
  import moment on your side and format it, this is how I used to do this.

```js
import moment from 'moment'
moment(new Date(data.details.upload_date * 1000)).format(
        "MMMM Do YYYY, h:mm:ss a"
      ),
```
