---
tag: V0A2FN25ME
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111020
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
N44 (38-6, Lithuania) For each positive integer $n$, represent $n$ as a sum of non-negative integer powers of 2. Let $f(n)$ be the number of different representations of the positive integer $n$.

If the only difference between two representations is the order in which the numbers are added, these two representations are considered the same. For example, $f(4)=4$, because 4 has exactly the following four representations: $4 ; 2+2 ; 2+1+1 ; 1+1+1+1$.
Prove that for any integer $n \geqslant 3,2^{\frac{n^{2}}{4}}<f\left(2^{n}\right)<2^{\frac{n^{2}}{2}}$.
