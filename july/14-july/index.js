const number = (busStops) => busStops.map(([entr, out]) => entr - out).reduce((acc, curr) => acc + curr)
