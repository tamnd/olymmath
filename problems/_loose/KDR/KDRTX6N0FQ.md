---
tag: KDRTX6N0FQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204582
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\ge 3$, $d$ be positive integers. For an integer $x$, denote $r(x)$ be the remainder of $x$ when divided by $n$ such that $0\le r(x)\le n-1$. Let $c$ be a positive integer with $1<c<n$ and $\gcd(c,n)=1$, and suppose $a_1, \cdots, a_d$ are positive integers with $a_1+\cdots+a_d\le n-1$. \\
(a) Prove that if $n<2d$, then $ \sum_{i=1}^d r(ca_i)\ge n.$ \\
(b) For each $n$, find the smallest $d$ such that $ \sum_{i=1}^d r(ca_i)\ge n$ always holds.

*Proposed by Yeoh Zi Song and Anzo Teh*
