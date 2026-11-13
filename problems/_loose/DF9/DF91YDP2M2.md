---
tag: DF91YDP2M2
kind: problem
type: answer
answer: \frac{341}{1024}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265653
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, let $v(n)$ denote the largest integer $j$ such that $n$ is divisible by $2^j$. Let $a$ and $b$ be chosen uniformly and independently at random from among the integers between 1 and 32, inclusive. What is the probability that $v(a) > v(b)$?
