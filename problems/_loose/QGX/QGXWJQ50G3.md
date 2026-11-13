---
tag: QGXWJQ50G3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252665
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A finite sequence of integers $a_0,a_1,...,a_n$ is called quadratic if $|a_k -a_{k-1}| = k^2$
for $n\geq k\geq1$.
(a) Prove that for any two integers $b$ and $c$, there exist a natural number $n$ and a quadratic sequence
with $a_0 = b$ and $a_n =c$.
(b) Find the smallest natural number $n$ for which there exists a quadratic sequence
with $a_0 = 0$ and $a_n = 1997$
