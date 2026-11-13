---
tag: A4DYM2SYCW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112527
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let positive integers $a, b>1$. The sequence $\left\{x_{n}\right\}$ is defined as follows:
$$
x_{0}=0, x_{1}=1, x_{2 n}=a x_{2 n-1}-x_{2 n-2}, x_{2 n+1}=b x_{2 n}-x_{2 n-1} .(n \geqslant 1)
$$

Prove: For any positive integers $m$ and $n$, the product $x_{n+m} x_{n+m-1} \cdots x_{n+1}$ is divisible by $x_{m} x_{m-1} \cdots x_{1}$.
