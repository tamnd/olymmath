---
tag: AX1NAH0QD2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38697
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number, $a_{0}$ be the remainder of the division of $n$ by 2. Let $n_{1}=\left(n-a_{0}\right) / 2$, $a_{1}$ be the remainder of the division of $n_{1}$ by 2, and so on until we get $n_{m}=1$ and $a_{m}=1$. Prove that $a_{m} 2^{m}+a_{m-1} 2^{n-1}+\ldots+a_{1} \cdot 2+a_{0}-$ is the binary representation of the number $n$.
