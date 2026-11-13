---
tag: C0ZW9VEZRM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of real numbers $\left\{a_{n}\right\}$ satisfying: for all non-negative integers $k, a_{k} \neq 0$ and $a_{k+1}=\left[a_{k}\right]\left\{a_{k}\right\}$. Here $[x]$ denotes the greatest integer not exceeding $x$, and $\{x\}$ denotes the fractional part of $x$. Prove: For sufficiently large $k$, $a_{k}=a_{k+2}$.
