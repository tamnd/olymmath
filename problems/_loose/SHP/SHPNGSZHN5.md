---
tag: SHPNGSZHN5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237704
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $f$ is defined on positive integers : if $n$ has prime factorization $p^{k_1}_{1} p^{k_2}_{2} ...p^{k_t}_{t}$ then $f(n) = (p_1-1)^{k_1+1}(p_2-1)^{k_2+1}...(p_t-1)^{k_t+1}$. If we keep using this function repeatedly, starting from any positive integer $n$, we will always get to $1$ after some number of steps. What is the smallest integer $n$ for which we need exactly $6$ steps to get to $1$?
