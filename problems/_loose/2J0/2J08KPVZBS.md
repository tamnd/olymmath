---
tag: 2J08KPVZBS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2830
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54473
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247973
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2000
    source: hf-ai-mo-aops
    label: 2000 Romania Team Selection Test
---
Let $n\ge 1$ be a positive integer and $x_1,x_2\ldots ,x_n$ be real numbers such that $|x_{k+1}-x_k|\le 1$ for $k=1,2,\ldots ,n-1$ . Prove that
$$\sum_{k=1}^n|x_k|-\left|\sum_{k=1}^nx_k\right|\le\frac{n^2-1}{4}$$

*Gh. Eckstein*
