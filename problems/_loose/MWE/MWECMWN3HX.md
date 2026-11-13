---
tag: MWECMWN3HX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2524249
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39119
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236451
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1996
    source: hf-ai-mo-aops
    label: 1996 French Mathematical Olympiad
---
Let $n$ be a positive integer. We say that a natural number $k$ has the property $C_n$ if there exist $2k$ distinct positive integers $a_1,b_1,\ldots,a_k,b_k$ such that the sums $a_1+b_1,\ldots,a_k+b_k$ are distinct and strictly smaller than $n$ .

(a) Prove that if $k$ has the property $C_n$ then $k\le \frac{2n-3}{5}$ .
(b) Prove that $5$ has the property $C_{14}$ .
(c) If $(2n-3)/5$ is an integer, prove that it has the property $C_n$ .
