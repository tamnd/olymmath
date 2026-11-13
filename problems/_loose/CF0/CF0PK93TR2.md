---
tag: CF0PK93TR2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187244
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence $S_{1}$ of $n+1$ non-negative integers, $a_{0}, a_{1}, \ldots, a_{n}$ we derive another sequence $S_{2}$ with terms $b_{0}$, $b_{1}, \ldots, b_{n}$, where $b_{i}$ is the number of terms preceding $a_{i}$ in $S_{1}$ which are different from $a_{i}$ (so $\left.b_{0}=0\right)$. Similarly, we derive $S_{2}$ from $S_{1}$ and so on. Show that if $a_{i} \leq i$ for each $i$, then $S_{n}=S_{n+1}$.
