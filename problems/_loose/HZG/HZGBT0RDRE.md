---
tag: HZGBT0RDRE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h2878420
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61120
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253133
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Taiwan TST Round 1
---
Let $a_1, a_2, a_3, \ldots$ be a sequence of reals such that there exists $N\in\mathbb{N}$ so that $a_n=1$ for all $n\geq N$ , and for all $n\geq 2$ we have
$$a_{n}\leq a_{n-1}+2^{-n}a_{2n}.$$
Show that $a_k>1-2^{-k}$ for all $k\in\mathbb{N}$ .
*Proposed by usjl*
