---
tag: GYWYWJEJ65
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1986 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h37418
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35633
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234155
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1986
    source: hf-ai-mo-aops
    label: 1986 China Team Selection Test
---
Given a triangle $ABC$ for which $C=90$ degrees, prove that given $n$ points inside it, we can name them $P_1, P_2 , \ldots , P_n$ in some way such that:

$\sum^{n-1}_{k=1} \left( P_K P_{k+1} \right)^2 \leq AB^2$ (the sum is over the consecutive square of the segments from $1$ up to $n-1$ ).

*Edited by orl.*
