---
tag: 4ZC79TJT0F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132460
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$\left\{x_{n} \mid n \in N\right\}$ is a sequence of real numbers, for each positive integer $n \geqslant 2$, we have
$$
x_{1}-C_{n}^{1} x_{2}+C_{n}^{2} x_{3}-\cdots+(-1)^{n} C_{n}^{n} x_{n+1}=0 \text {. }
$$

Prove that for each positive integer $k, n, 1 \leqslant k \leqslant n-1$, we have
$$
\sum_{p=0}^{n}(-1)^{p} C_{n}^{p} \cdot x_{p+1}^{k}=0 .
$$
