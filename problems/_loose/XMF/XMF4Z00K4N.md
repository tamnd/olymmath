---
tag: XMF4Z00K4N
kind: problem
type: answer
answer: 1+n+\binom{n}{2}+\binom{n}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be an $n$-element set. Let $Y_{1}, Y_{2}, \ldots, Y_{k}$ be distinct subsets of $X$ such that for all $i, j, i \neq j$, we have $\left|Y_{i} \cap Y_{j}\right| \leqslant 2$. Determine the maximum possible value of the number $k$.
