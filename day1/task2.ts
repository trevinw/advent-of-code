import fs from 'node:fs'

const input = fs.readFileSync('day1/input.txt', { encoding: 'utf-8' })
const left: number[] = []
const right: number[] = []
let similarity = 0

input.split('\n').forEach((line) => {
  const [l, r, ..._rest] = line.split('   ').map((num) => parseInt(num))

  left.push(l)
  right.push(r)
})

left.forEach((num) => {
  similarity += num * right.filter((n) => n === num).length
})

console.log(similarity)
