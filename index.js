var spawn = require("child_process").spawn

var proc = spawn("sh", [ '-c', 'node -e \'process.kill(process.pid,"SIGSEGV")\'' ], {
  stdio: "inherit"
})
proc.on("close", function (code, signal) {
  if (signal) {
    console.log("got signal: " + signal)
    process.kill(process.pid, signal)
  } else if (code) {
    console.log("got code: " + code)
  }
})
