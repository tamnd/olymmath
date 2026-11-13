---
tag: N8CP0VQ8RW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239258
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M>1$ be a natural number. Tom and Jerry play a game. Jerry wins if he can produce a function $f: \mathbb{N} \rightarrow \mathbb{N}$ satisfying

- $f(M) \ne M$ [/*]

- $f(k)<2k$ for all $k \in \mathbb{N}$[/*]

- $f^{f(n)}(n)=n$ for all $n \in \mathbb{N}$. For each $\ell>0$ we define $f^{\ell}(n)=f\left(f^{\ell-1}(n)\right)$ and $f^0(n)=n$[/*]

Tom wins otherwise. Prove that for infinitely many $M$, Tom wins, and for infinitely many $M$, Jerry wins.

*Proposed by Anant Mudgal*
