---
tag: W2WYX1GDKX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248292
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f:\mathbb{Z}_{\ge 1}\to \mathbb{R}_{>0}$ such that for all positive integers $n$ the following relation holds: $$\sum_{d|n} f(d)^3=\left (\sum_{d|n} f(d) \right )^2,$$
where both sums are taken over the positive divisors of $n$.

* (Vlad Robu) *
