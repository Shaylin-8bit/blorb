dbclient.connect()
.then(() => console.log("connected"))
.catch(e => console.log)
.finally(() => {dbclient.end()})