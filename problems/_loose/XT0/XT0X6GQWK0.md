---
tag: XT0X6GQWK0
kind: problem
type: answer
answer: \lceil\frac{n+1}{2}\rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177324
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a permutation $a_{1}, a_{2}, \ldots a_{n}$ of the numbers $1,2 \ldots n$ it is allowed to change the places of any two consecutive blocks, i.e. from

$a_{1}, \ldots, a_{i}, \underbrace{a_{i+1}, a_{i+2} \ldots, a_{i+p}}_{A}, \underbrace{a_{i+p+1}, a_{i+p+2} \ldots, a_{i+q}}_{B}, a_{i+q+1}, \ldots, a_{n}$ by replacing $A$ and $B$ one can obtain $a_{1}, \ldots, a_{i}, \underbrace{a_{i+p+1}, a_{i+p+2} \ldots, a_{i+q}}_{B}, \underbrace{a_{i+1}, a_{i+2} \ldots, a_{i+p}}_{A}, a_{i+q+1}, \ldots, a_{n}$.

Find the least number of such changes after which from $n, n-$ $1, \ldots 1$ one can obtain $1,2, \ldots n$.
