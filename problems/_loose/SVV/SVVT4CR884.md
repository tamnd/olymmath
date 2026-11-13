---
tag: SVVT4CR884
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a $2015$-tuple $(a_1,a_2,\ldots,a_{2015})$ in each step we choose two indices $1\le k,l\le 2015$ with $a_k$ even and transform the $2015$-tuple into $(a_1,\ldots,\dfrac{a_k}{2},\ldots,a_l+\dfrac{a_k}{2},\ldots,a_{2015})$. Prove that starting from $(1,2,\ldots,2015)$ in finite number of steps one can reach any permutation of $(1,2,\ldots,2015)$.
