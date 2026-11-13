---
tag: F8K18X2AJJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140470
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Functions $f, g, h: N \rightarrow N$ satisfy the following three conditions:
(1) For different $n \in N, h(n)$ takes different values;
(2) The range of function $g(n)$ is $N$;
(3) $f(n) \equiv g(n)-h(n)+1, n \in N$.

Prove: $f(n) \equiv 1, n \in N$.
