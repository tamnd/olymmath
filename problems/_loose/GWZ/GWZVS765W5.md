---
tag: GWZVS765W5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220427
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$ with prime factorization $n = p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_k^{\alpha_k}$ let's define $\lambda(n) = (-1)^{\alpha_1 + \alpha_2 + \dots + \alpha_k}$.

Define $L(n)$ as sum of $\lambda(x)$ over all integers from $1$ to $n$.

Define $K(n)$ as sum of $\lambda(x)$ over all **composite** integers from $1$ to $n$.

For some $N>1$, we know, that for every $2\le n \le N$, $L(n)\le 0$.

Prove that for this $N$, for every $2\le n \le N$, $K(n)\ge 0$.

*Mykhailo Shtandenko*
