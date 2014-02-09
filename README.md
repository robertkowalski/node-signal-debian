# node-signal

OSX:

```
$ node index.js
got signal: SIGSEGV
Segmentation fault: 11

```

Linux (Debian, 2.6.32-5-amd64):

```
$ node index.js
Segmentation fault
got code: 139
```

Production example:

```
git clone https://github.com/npm/npm.git
cd npm && npm i
node test/tap/lifecycle-signal.js
```
