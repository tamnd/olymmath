---
tag: JXTW26Z6D4
kind: problem
type: answer
answer: k\leqslantn(n+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91589
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
9・27 Let $k, h \in N$ and $k \geqslant 2, h \geqslant 2$, and let the set of integer points $M=\{(x, y) \mid x=0,1, \cdots, k n-1, y=0,1, \cdots, h n-1\}$ be colored with one of $n$ colors. If the 4 vertices of every rectangle with vertices in $M$ and sides parallel to the coordinate axes are not all the same color, and each color appears exactly $k$ times in each row and exactly $h$ times in each column, then the coloring is called qualified. Prove that for every qualified coloring, $k h \leqslant n(n+1)$.
