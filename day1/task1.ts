import fs from 'node:fs'

const input = fs.readFileSync('day1/input.txt', { encoding: 'utf-8' })
const left: number[] = []
const right: number[] = []
const differences: number[] = []

input.split('\n').forEach((line) => {
  const [l, r, ..._rest] = line.split('   ').map((num) => parseInt(num))
  left.push(l)
  right.push(r)
})

left.sort()
right.sort()

for (let i = 0; i < left.length; i++) {
  differences.push(Math.abs(left[i] - right[i]))
}

const totalDistance = differences.reduce((prev, curr) => prev + curr)

console.log(totalDistance)
