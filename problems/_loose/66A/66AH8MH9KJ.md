---
tag: 66AH8MH9KJ
kind: problem
type: answer
answer: 2^{\beta+2}\cdot3^{\beta}(\beta\in\mathbb{N}^{+})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=139304
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a composite number $n$, let $f(n)$ be the sum of its smallest three positive divisors, and $g(n)$ be the sum of its largest two positive divisors. Find all composite numbers $\mathrm{n}$ such that $g(n)$ equals some positive integer power of $\mathrm{f}(\mathrm{n})$.
