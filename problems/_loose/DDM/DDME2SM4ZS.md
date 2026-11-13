---
tag: DDME2SM4ZS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239554
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a set with $|X| = n$ , and let $X_1 , X_2 ,... X_n$ be the $n$subsets eith $|X_j| \geq 2$, for $1 \leq j \leq n$. Suppose for each $2$ element subset $Y$ of $X$, there is a unique $j$ in the set $1,2,3....,n$ such that $Y \subset X_j$ . Prove that $X_j \cap X_k \not= \Phi$ for all $1 \leq j < k \leq n$
