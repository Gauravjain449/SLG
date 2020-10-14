const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
}
process.nextTick(() => {
  setTimeout(bar, 0)
})

foo()

process.nextTick(() => {
  setTimeout(bar, 0)
})

