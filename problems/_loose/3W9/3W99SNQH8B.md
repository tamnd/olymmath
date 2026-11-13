---
tag: 3W99SNQH8B
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265319
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Archit and Ayush are walking around on the set of points $(x,y)$ for all integers $-1\leq x,y\leq1$. Archit starts at $(1,1)$ and Ayush starts at $(1,0)$. Each second, they move to another point in the set chosen uniformly at random among the points with distance $1$ away from them. If the probability that Archit goes to the point $(0,0)$ strictly before Ayush does can be expressed as $\frac{m}{n}$ for relatively prime positive integers $m,n$, compute $m+n$.

*2020 CCA Math Bonanza Lightning Round #3.2*
