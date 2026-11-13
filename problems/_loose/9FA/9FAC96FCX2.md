---
tag: 9FAC96FCX2
kind: problem
type: answer
answer: "15"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160435
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left\{x_{n}\right\}_{n=1}^{\infty}$ be a sequence of real numbers such that $x_{1}=3, x_{2}=24$ and
$$
x_{n+2}=\frac{1}{4} x_{n+1}+\frac{3}{4} x_{n}
$$
for every positive integers $n$. Determine the value of $\lim _{n \rightarrow \infty} x_{n}$.
