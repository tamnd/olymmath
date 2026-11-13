---
tag: HYWFEJSJG3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253642
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $m \geq 2$, let $p(m)$ be the smallest prime dividing $m$ and $P(m)$ be the largest prime dividing $m$. Let $C$ be a positive integer. Define sequences $\{a_n\}$ and $\{b_n\}$ by $a_0 = b_0 = C$ and, for each positive integer $k$ such that $a_{k-1}\geq 2$,
$$a_k=a_{k-1}-\frac{a_{k-1}}{p(a_{k-1})};$$
and, for each positive integer $k$ such that $b_{k-1}\geq 2$,
$$b_k=b_{k-1}-\frac{b_{k-1}}{P(b_{k-1})}$$
It is easy to see that both $\{a_n\}$ and $\{b_n\}$ are finite sequences which terminate when they reach the number $1$.
Prove that the numbers of terms in the two sequences are always equal.
