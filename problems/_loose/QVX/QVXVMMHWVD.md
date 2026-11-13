---
tag: QVXVMMHWVD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98606
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $n$, define
$$
f(n)=\sum_{d \in D_{n}} \frac{1}{1+d},
$$

where $D_{n}$ is the set of all positive divisors of $n$.
Prove that for any positive integer $m$, we have
$$
f(1)+f(2)+\cdots+f(m)<m \text {. }
$$
