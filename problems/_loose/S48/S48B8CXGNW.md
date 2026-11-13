---
tag: S48B8CXGNW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160082
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $f(n)$ is defined for all positive integer $n$ and take on non-negative integer values such that $f(2)=0, f(3)>0$ and $f(9999)=3333$. Also, for all $m, n$,
$$
f(m+n)-f(m)-f(n)=0 \text { or } 1 .
$$

Determine $f(2005)$.
