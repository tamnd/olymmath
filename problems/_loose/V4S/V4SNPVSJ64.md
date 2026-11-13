---
tag: V4SNPVSJ64
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247295
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are given the integers $1 \le m < n$. Consider the set $M = \{ (x,y);x,y \in \mathbb{Z_{+}}, 1 \le x,y \le n \}$. Determine the least value $v(m,n)$ with the property that for every subset $P \subseteq M$ with $|P| = v(m,n)$ there exist $m+1$ elements $A_{i}= (x_{i},y_{i}) \in P, i = 1,2,...,m+1$, for which the $x_{i}$ are all distinct, and $y_{i}$ are also all distinct.
