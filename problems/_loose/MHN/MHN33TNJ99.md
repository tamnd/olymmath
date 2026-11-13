---
tag: MHN33TNJ99
kind: problem
type: answer
answer: \frac{(n^{2})!(n!)^{2}}{(2n-1)!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154872
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In how many ways can $n^{2}$ distinct real numbers be arranged into an $n \times n$ array $\left(a_{i j}\right)$ such that $\max _{j} \min _{i} a_{i j}=\min _{i} \max _{j} a_{i j}$ ?
