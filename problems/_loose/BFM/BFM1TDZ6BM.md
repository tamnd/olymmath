---
tag: BFM1TDZ6BM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208839
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ students each having $r$ positive integers. Their $nr$ positive integers are all different. Prove that we can divide the students into $k$ classes satisfying the following conditions.

(a) $ k \le 4r $

(b) If a student $A$ has the number $m$, then the student $B$ in the same class can't have a number $l$ such that
$$ (m-1)! < l < (m+1)!+1 $$
