---
tag: CWJD5R6PQ7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37435
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left(F_{n}\right)$ is defined as follows: $F_{1}=1$, $F_{2}=2, F_{n+2}=F_{n+1}+F_{n}$ for any $n>0$. Prove that for any natural number $n$ the inequality

$$
\sqrt[n]{F_{n+1}}>1+\frac{1}{\sqrt[n]{F_{n}}}
$$

holds.
