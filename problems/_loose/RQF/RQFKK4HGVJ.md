---
tag: RQFKK4HGVJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204670
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $k,n$ and a real number $\ell$, where $k,n \geq 1$. Given are also pairwise different positive real numbers $a_1,a_2,\ldots, a_k$. Let $S = \{a_1,a_2,\ldots,a_k, -a_1, -a_2,\ldots, -a_k\}$.
Let $A$ be the number of solutions of the equation
$$x_1 + x_2 + \ldots + x_{2n} = 0,$$
where $x_1,x_2,\ldots, x_{2n} \in S$. Let $B$ be the number of solutions of the equation
$$x_1 + x_2 + \ldots + x_{2n} = \ell,$$
where $x_1,x_2,\ldots,x_{2n} \in S$. Prove that $A \geq B$.

Solutions of an equation with only difference in the permutation are different.
