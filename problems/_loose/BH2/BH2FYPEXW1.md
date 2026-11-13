---
tag: BH2FYPEXW1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85264
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. We consider sequences of numbers $a_{0}, a_{1}, \ldots, a_{k}$ and $b_{0}, b_{1}, \ldots, b_{k}$ that satisfy $a_{0}=b_{0}=1$ and $a_{k}=b_{k}=n$ and for every $i$ with $1 \leq i \leq k$ it holds that $\left(a_{i}, b_{i}\right)$ is either $\left(1+a_{i-1}, b_{i-1}\right)$ or $\left(a_{i-1}, 1+b_{i-1}\right)$. Define for $1 \leq i \leq k$ the number

$$
c_{i}= \begin{cases}a_{i} & \text { if } a_{i}=a_{i-1} \\ b_{i} & \text { if } b_{i}=b_{i-1}\end{cases}
$$

Prove that $c_{1}+c_{2}+\cdots+c_{k}=n^{2}-1$.
