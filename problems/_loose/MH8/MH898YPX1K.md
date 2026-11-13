---
tag: MH898YPX1K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h416104
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6577
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208700
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2011
    source: hf-ai-mo-aops
    label: 2011 India IMO Training Camp
---
A set of $n$ distinct integer weights $w_1,w_2,\ldots, w_n$ is said to be *balanced* if after removing any one of weights, the remaining $(n-1)$ weights can be split into two subcollections (not necessarily with equal size)with equal sum. $a)$ Prove that if there exist *balanced* sets of sizes $k,j$ then also a *balanced* set of size $k+j-1$ . $b)$ Prove that for all *odd* $n\geq 7$ there exist a *balanced* set of size $n$ .
