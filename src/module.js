console.log('module is working')

async function start() {
    return await Promise.resolve('asinc working')
}

start().then(console.log)