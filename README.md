# Site

Source code behind [`defekt.nl/~jelle`](http://defekt.nl/~jelle/).

Livereloading browserified ReactJS static website

After running `gulp` you see

```
[16:52:47] Using gulpfile ~/r/site-2015/gulpfile.js
[16:52:47] Starting 'markdown'...
[16:52:47] Starting 'html'...
[16:52:47] Starting 'images'...
[16:52:47] Starting 'style'...
[16:52:47] all files 1.33 kB
[16:52:47] Finished 'style' after 12 ms
[16:52:47] all files 392 B
[16:52:47] Finished 'html' after 17 ms
[16:52:47] all files 33.07 kB
[16:52:47] Finished 'images' after 15 ms
[16:52:47] Finished 'markdown' after 45 ms
[16:52:47] Starting 'scripts'...
[16:52:52] all files 253.22 kB
[16:52:52] Finished 'scripts' after 5.4 s
[16:52:52] Starting 'build'...
[16:52:52] Finished 'build' after 5.73 μs
[16:52:52] Starting 'default'...
[16:52:52] Finished 'default' after 14 ms
App server started at http://localhost:5005
	~> LR server http://localhost:36804
```

Every change to a markdown/css/etc will reprocess the page and livereload.

Static page contents are placed in `dist/`, simply `scp` to update your site.

	
	
