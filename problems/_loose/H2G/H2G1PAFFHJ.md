---
tag: H2G1PAFFHJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n=(q + 2)q^{2021}$ where $q=10^9+7$. For every $k<=n$ and prime $p|n$, define
$f_{p,k}(n)$ =$ v_{p}$$ (\binom{n}{k}) $
($v_{p}$$(i)$ is the highest power of $p$ that divides $i$).
Let $m$ be the maximum possible (over all $k$) value of the expression
$\prod_{p\text{,prime,} p|n} f_{p,k}$.
Find the sum of the digits of $m$.
