export function greet(name, { loud = false } = {}) {
  const text = `Hello, ${name}!`;
  return loud ? text.toUpperCase() : text;
}
