---
tag: 7MEDXZ43HD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160842
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1} a_{2} a_{n} a_{n+1}$ be a finite sequence of real numbers satisfying
$$
\begin{array}{l}
a_{0}=a_{n+1}=0 \\
\text { and } a_{k-1}-2 a_{k}+a_{k+1} . \leq 1 \text { for } k=12 n
\end{array}
$$

Prove that for $k=01 n+1$,
$$
a_{k} \leq \frac{k(n+1-k)}{2}
$$
