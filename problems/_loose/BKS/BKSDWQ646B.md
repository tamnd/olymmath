---
tag: BKSDWQ646B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117400
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
75 Let $F_{1}=F_{2}=1, F_{n}=F_{n-1}+F_{n-2}$.
(1) Prove: $F_{n}=F_{k} F_{n-k+1}+F_{k-1} F_{n-k}, n>k>1$.
(2) Prove: $F_{n} \mid F_{m}$ if and only if $n \mid m$.
(3) Prove: $F_{m} F_{n}=F_{m \cdot n-2}+F_{m \ldots n}+F_{m \cdot n-10}+\cdots+\left\{\begin{array}{l}F_{m} \ldots, 1, \text { when } n \text { is odd } \\ F_{m \cdots n}, \text { when } n \text { is even }\end{array}\right.$
$$
m \geqslant n \geqslant 2
$$
(4) Prove: $\left(F_{m}, F_{n}\right)=F_{(m, n)},(m, n)$ is the greatest common divisor of $m, n$.
