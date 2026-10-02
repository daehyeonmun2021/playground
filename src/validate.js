// Checks a line of input and lists what is wrong with it.
export function validate(input) {
  const problems = [];
  if (input.length === 0) problems.push("empty");
  if (input.length > 80) problems.push("too long");
  if (/\s{2,}/.test(input)) problems.push("double spaces");
  if (input !== input.trim()) problems.push("untrimmed");
  return problems;
}

export const isValid = (input) => validate(input).length === 0;
