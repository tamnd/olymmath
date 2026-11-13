---
tag: JY2D65DJEK
kind: problem
type: answer
answer: (n+1)r
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91972
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ and $r$ be given positive integers. If the set of the first $m$ natural numbers $\{1,2, \cdots, m\}$ is arbitrarily divided into $r$ pairwise disjoint subsets $A_{1}, A_{2}, \cdots, A_{r}$ whose union is the original set, there always exist two numbers $a$ and $b$ in some subset $A_{i}(1 \leqslant i \leqslant r)$ such that $1<\frac{a}{b} \leqslant 1+\frac{1}{n}$. Prove that the minimum value of $m$ is $(n+1) r$.
