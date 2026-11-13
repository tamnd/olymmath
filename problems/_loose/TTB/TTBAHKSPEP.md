---
tag: TTBAHKSPEP
kind: problem
type: answer
answer: f(n) = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245079
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider functions $f$ from the whole numbers (non-negative integers) to the whole numbers that have the following properties:
$\bullet$ For all $x$ and $y$, $f(xy) = f(x)f(y)$,
$\bullet$ $f(30) = 1$, and
$\bullet$ for any $n$ whose last digit is $7$, $f(n) = 1$.
Obviously, the function whose value at $n$ is $ 1$ for all $n$ is one such function. Are there any others? If not, why not, and if so, what are they?
