---
tag: 99S3KCMT4H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h1113640
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13225
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2015
    source: hf-ai-mo-aops
    label: 2015 Taiwan TST Round 3
---
Consider the permutation of $1,2,...,n$ , which we denote as $\{a_1,a_2,...,a_n\}$ . Let $f(n)$ be the number of these permutations satisfying the following conditions:
(1) $a_1=1$ (2) $|a_i-a_{i-1}|\le2, i=1,2,...,n-1$ what is the residue when we divide $f(2015)$ by $4$ ?
