---
tag: G0AKKZ9MVN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29601
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A pair (of distinct) natural numbers $m$ and $n$ is called "good" if these numbers consist of the same prime factors, taken, however, in (in general) different powers (example: $90=2 \cdot 3^{2} \cdot 5$ and $150=2 \cdot 3 \cdot 5^{2}$), and "very good" if both the pair $m, n$ and the pair $m+1, n+1$ are "good" (example: $6=2 \cdot 3$ and $48=2^{4} \cdot 3$ - since $6+1=7$, and $48+1=49=7^{2}$). Is the number of "very good" pairs of natural numbers finite or infinite?
