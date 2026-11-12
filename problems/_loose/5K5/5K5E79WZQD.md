---
tag: 5K5E79WZQD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38692
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The periods of regular fractions with denominator 7 are obtained from each other by cyclic permutation:

$$
\begin{array}{lll}
1 / 7=0,(142857), & 3 / 7=0,(428571), & 2 / 7=0,(285714) \\
6 / 7=0,(857142), & 4 / 7=0,(571428), & 5 / 7=0,(714285)
\end{array}
$$

Prove that all prime numbers $p$ for which the period length is $p-1$ have the same property.
