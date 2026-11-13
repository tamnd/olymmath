---
tag: FDDC500SCM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=259929
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P$ be the set of all subsets of ${1, 2, ... , n}$. Show that there are $1^n + 2^n + ... + m^n$ functions $f : P \longmapsto {1, 2, ... , m}$ such that $f(A \cap B) = min( f(A), f(B))$ for all $A, B.$
