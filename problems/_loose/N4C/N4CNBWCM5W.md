---
tag: N4CNBWCM5W
kind: problem
type: answer
answer: (n+1)!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85359
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Given are circular discs with radii $1, 2, \ldots, n$. For each size, we have two discs: one transparent and one opaque. Each disc has a hole in the middle, allowing us to stack the discs on a vertical rod. We want to create stacks that meet the following conditions:

- For each size, there is exactly one disc on the stack.
- When viewed from directly above, the outer edges of all $n$ discs on the stack can be seen. (This means that if there is an opaque disc on the stack, then no smaller discs may lie below it.)

Determine the number of different stacks that can be made under these conditions. (Two stacks are different if they do not use exactly the same set of discs, but also if they use exactly the same set of discs but not in the same order.)
