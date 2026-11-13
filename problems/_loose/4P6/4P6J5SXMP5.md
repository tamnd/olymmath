---
tag: 4P6J5SXMP5
kind: problem
type: answer
answer: 2^n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246415
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each pair $(x, y)$ of nonnegative integers is assigned number $f(x, y)$ according the conditions:
$f(0, 0) = 0$;
$f(2x, 2y) = f(2x + 1, 2y + 1) = f(x, y)$,
$f(2x + 1, 2y) = f(2x, 2y + 1) = f(x ,y) + 1$ for $x, y \ge 0$.
Let $n$ be a fixed nonnegative integer and let $a$, $b$ be nonnegative integers such that $f(a, b) = n$. Decide how many numbers satisfy the equation $f(a, x) + f(b, x) = n$.
