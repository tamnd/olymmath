---
tag: KGDCRMJ7M9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=139279
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n \geq 2, a_{1}, a_{2}, \ldots, a_{n}$ are positive integers, and satisfy $1 \leq \frac{a_{i+1}}{a_{i}} \leq 1+\frac{1}{i}, i \in\{1,2, \ldots, n-1\}$, prove: $\left(\sum_{i=1}^{n} i a_{i}\right)^{2} \geq \frac{n(n+1)^{2}}{4}\left(\sum_{i=1}^{n} a_{i}^{2}\right)$
