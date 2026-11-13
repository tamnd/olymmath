---
tag: GHR3BKGVFQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223931
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are given $100$ strictly increasing sequences of positive integers: $A_{i}= (a_{1}^{(i)}, a_{2}^{(i)},...), i = 1, 2,..., 100$. For $1 \leq r, s \leq 100$ we deﬁne the following quantities: $f_{r}(u)=$ the number of elements of $A_{r}$ not exceeding $n$; $f_{r,s}(u) =$ the number of elements of $A_{r}\cap A_{s}$ not exceeding $n$. Suppose that $f_{r}(n) \geq\frac{1}{2}n$ for all $r$ and $n$. Prove that there exists a pair of indices $(r, s)$ with $r \not = s$ such that $f_{r,s}(n) \geq\frac{8n}{33}$ for at least ﬁve distinct $n-s$ with $1 \leq n < 19920.$
