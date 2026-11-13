---
tag: V680CJ5ZQH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h110416
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44298
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240571
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Iran MO (3rd Round)
---
Let $B$ be a subset of $\mathbb{Z}_{3}^{n}$ with the property that for every two distinct members $(a_{1},\ldots,a_{n})$ and $(b_{1},\ldots,b_{n})$ of $B$ there exist $1\leq i\leq n$ such that $a_{i}\equiv{b_{i}+1}\pmod{3}$ . Prove that $|B| \leq 2^{n}$ .
