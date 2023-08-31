export default function healthInfo(count) {
  let health = '';
  if (count.health > 50) {
    health = 'healthy';
  } if (count.health <= 50 && count.health >= 15) {
    health = 'wounded';
  } if (count.health < 15) {
    health = 'critical';
  }
  return health;
}
