---
tag: 2TW5XFY5DY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213708
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(a) Let $k,n\ge 1$.Find the number of sequences $\phi=S_0,S_1,\ldots,S_k$ of subsets of $[n]=\{1,2,3,\ldots,n\}$ if for all $1\le i\le k$ we have either (i)$S_{i-1}\subset S_i$ and $|S_i-S_{i-1}|$,or (ii)$S_i\subset S_{i-1}$ and $|S_{i-1}-S_i|=1$.
(b) Suppose that we add the additional condition that $S_k=\phi$.Show that now the number $f_k(n)$ of sequences is given by$f_k(n)=\frac{1}{2^n}\sum_{i=0}^n\binom ni (n-2i)^k$.
Note that $f_k(n)=0$ if $k$ is odd.
