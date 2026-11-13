---
tag: GCVZSYF7EB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204584
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1, a_2, \cdots, a_n$ be a sequence of real numbers with $a_1+a_2+\cdots+a_n=0$. Define the score $S(\sigma)$ of a permutation $\sigma=(b_1, \cdots b_n)$ of $(a_1, \cdots a_n)$ to be the minima of the sum $$(x_1-b_1)^2+\cdots+(x_n-b_n)^2$$ over all real numbers $x_1\le \cdots \le x_n$.

Prove that $S(\sigma)$ attains the maxima over all permutations $\sigma$, if and only if for all $1\le k\le n$, $$b_1+b_2+\cdots+b_k\ge 0.$$

*Proposed by Anzo Teh*
