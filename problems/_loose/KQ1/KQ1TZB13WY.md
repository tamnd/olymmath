---
tag: KQ1TZB13WY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229424
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $2n$ positive reals $a_1, a_2, \cdots, a_n, b_1, b_2, \cdots, b_n$ satisfy $a_{i+1}\ge 2a_i$ and $b_{i+1} \le b_i$ for $1\le i\le n-1$. Find the least constant $C$ that satisfy: $$ \sum^{n}_{i=1}{\frac{a_i}{b_i}} \ge \frac{C(a_1+a_2+\cdots+a_n)}{b_1+b_2+\cdots+b_n}$$ and determine all equality case with that constant $C$.
