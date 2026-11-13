---
tag: 3K8CZB81SX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83608
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Try to prove two of the following equalities:

$-n!=\binom{n}{k} k!(n-k)!$

$-\binom{n}{k}=\binom{n-1}{k}+\binom{n-1}{k-1}$

$-\left(\begin{array}{l}n \\ k \\ k\end{array}\right)=\binom{n}{n-k}$

$-k\binom{n}{k}=n\binom{n-1}{k-1}$

$-\sum_{k=0}^{n}\binom{n}{k}=2^{n}$
