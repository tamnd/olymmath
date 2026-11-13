---
tag: GW4NV0FY0K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129203
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequences $\left\{a_{n}\right\}$ and $\left\{b_{n}\right\}$ satisfy
$$
\begin{array}{l}
a_{0}=b_{0}=1, a_{n+1}=5 a_{n}+7 b_{n}, \\
b_{n+1}=7 a_{n}+10 b_{n} .
\end{array}
$$

Prove: For any $m, n \in \mathbf{N}$, we have
$$
a_{m+n}+b_{m+n}=a_{m} a_{n}+b_{m} b_{n} .
$$
