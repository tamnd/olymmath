---
tag: 6FVRVBJWGJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261919
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a given $n$, consider the points $(x,y)\in \mathbb{N}^2$ such that $x\leq y\leq n$. An ant starts from $(0,1)$ and, every move, it goes from $(a,b)$ to point $(c,d)$ if $bc-ad=1$ and $d$ is maximized over all such points. Let $g_n$ be the number of moves made by the ant until no more moves can be made. Find $g_{2023} - g_{2022}$.

*Proposed by David Tang*
