---
tag: YEQMYHHZ10
kind: problem
type: answer
answer: \sum_{m \in M} (-1)^m \binom{n}{m}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number and $n, k$ and $q$ natural numbers, where $q\le \frac{n -1}{p-1}$ should be. Let $M$ be the set of all integers $m$ from $0$ to $n$, for which $m-k$ is divisible by $p$. Show that $$\sum_{m \in M} (-1) ^m {n \choose m}$$ is divisible by $p^q$.
