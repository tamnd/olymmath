---
tag: NR16H8KNQZ
kind: problem
type: answer
answer: \frac{4^n + 2}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\in \mathbb{Z}_{> 0}$. The set $S$ contains all positive integers written in decimal form that simultaneously satisfy the following conditions:

- each element of $S$ has exactly $n$ digits;

- each element of $S$ is divisible by $3$;

- each element of $S$ has all its digits from the set $\{3,5,7,9\}$

Find $\mid S\mid$
