---
tag: YDMY21N3RB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190829
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $q$ be a real number different from 1. If

$$
\begin{aligned}
& A_{n}=1+q+q^{2}+\ldots+q^{n} \\
& B_{n}=1+\frac{1+q}{2}+\left(\frac{1+q}{2}\right)^{2}+\ldots+\left(\frac{1+q}{2}\right)^{n}
\end{aligned}
$$

prove that

$$
\binom{n+1}{1}+\binom{n+1}{2} A_{1}+\binom{n+1}{3} A_{2}+\ldots+\binom{n+1}{n+1} A_{n}=2^{n} B_{n}
$$
