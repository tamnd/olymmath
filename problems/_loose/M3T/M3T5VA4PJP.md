---
tag: M3T5VA4PJP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2845193
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54661
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248166
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Romania Team Selection Test
---
Let $n\geq 2$ be an integer. Let $a_{ij}, \ i,j=1,2,\ldots,n$ be $n^2$ positive real numbers satisfying the following conditions:

- For all $i=1,\ldots,n$ we have $a_{ii}=1$ and,

- For all $j=2,\ldots,n$ the numbers $a_{ij}, \ i=1,\ldots, j-1$ form a permutation of $1/a_{ji}, \ i=1,\ldots, j-1.$

Given that $S_i=a_{i1}+\cdots+a_{in}$ , determine the maximum value of the sum $1/S_1+\cdots+1/S_n.$
