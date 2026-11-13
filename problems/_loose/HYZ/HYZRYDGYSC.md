---
tag: HYZRYDGYSC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231766
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $v_1,v_2,\ldots,v_n$ vectors in $\mathbb{R}^2$ such that $|v_i|\leq 1$ for $1 \leq i \leq n$ and $\sum_{i=1}^n v_i=0$. Prove that there exists a permutation $\sigma$ of $(1,2,\ldots,n)$ such that $\left|\sum_{j=1}^k v_{\sigma(j)}\right| \leq\sqrt 5$ for every $k$, $1\leq k \leq n$.

*Remark*: If $v = (x,y)\in \mathbb{R}^2$, $|v| = \sqrt{x^2 + y^2}$.
