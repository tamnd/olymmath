---
tag: VASZAETRMN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_n = \{1,2,...,n\}$. Prove or disprove:
For all integers $n \ge 2$ there exist functions $f,g : A_n \to A_n$ which satisfy $f(f(k)) = g(g(k)) = k$ for $1 \le k \le n$, and $g(f(k)) = k +1$ for $1 \le k \le n -1$.
