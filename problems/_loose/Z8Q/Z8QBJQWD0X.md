---
tag: Z8QBJQWD0X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186214
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For natural numbers $n, k$ with $2 \leq k \leq n$, a set $N$ of $n$ people is called $k$-familiar if in every subset $K$ of $k$ people from $N$, there is a person who knows all other people in $K$.

Determine for each natural number $n \geq 2$ all natural numbers $k$ with $2 \leq k \leq n$ for which the statement holds that every $k$-familiar set of $n$ people must also be $n$-familiar! Hints: For people $a, b$, it always holds that if $a$ knows $b$, then $b$ knows $a$.

Furthermore, it is assumed that any theoretically consistent distribution of mutual unfamiliarity or familiarity can be realized by a set of people.
