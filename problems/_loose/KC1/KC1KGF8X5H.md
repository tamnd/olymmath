---
tag: KC1KGF8X5H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205843
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integer $ n > 1$ and define
$$ S = \{1,2,\dots,n\}.
$$
Suppose
$$ T = \{t \in S: \gcd(t,n) = 1\}.
$$
Let $ A$ be arbitrary non-empty subset of $ A$ such thar for all $ x,y \in A$, we have $ (xy\mod n) \in A$. Prove that the number of elements of $ A$ divides $ \phi(n)$. ($ \phi(n)$ is Euler-Phi function)
