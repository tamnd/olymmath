---
tag: V53GSMDD3T
kind: problem
type: answer
answer: f(x)=(x+)^{n},
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141618
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geq 2$, let the polynomial $f(x)=x^{n}+b_{n-1} x^{n-1}+\ldots+b_{0}$, where $b_{i} \in \mathbb{R}, i=0,1,2, \ldots, n-1$. If there exists a non-constant infinite positive integer geometric sequence $\left\{a_{k}\right\}$ such that for any positive integer $k$, there exists a positive integer $x_{k}$ such that $a_{k}=f\left(x_{k}\right)$, find all possible $f(x)$.
