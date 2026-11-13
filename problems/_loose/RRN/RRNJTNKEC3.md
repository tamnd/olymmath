---
tag: RRNJTNKEC3
kind: problem
type: answer
answer: 10,9,8,7,6,5,4,3,2,1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105711
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $D=\{1,2, \cdots, 10\}, f(x)$ be a one-to-one mapping from $D$ to $D$, and let $f_{n+1}(x)=$ $f\left(f_{n}(x)\right), n \in \mathbf{N}_{+} ; f_{1}(x)=f(x)$. Try to find a permutation $x_{1}, x_{2}, \cdots, x_{10}$ of $D$, such that $\sum_{i=1}^{10} x_{i} f_{2520}(i)=220$.
