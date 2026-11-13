---
tag: 4ADK6FWNXX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h527621
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9279
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211312
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2013
    source: hf-ai-mo-aops
    label: 2013 China Team Selection Test
---
For a positive integer $k\ge 2$ define $\mathcal{T}_k=\{(x,y)\mid x,y=0,1,\ldots, k-1\}$ to be a collection of $k^2$ lattice points on the cartesian coordinate plane. Let $d_1(k)>d_2(k)>\cdots$ be the decreasing sequence of the distinct distances between any two points in $T_k$ . Suppose $S_i(k)$ be the number of distances equal to $d_i(k)$ .
Prove that for any three positive integers $m>n>i$ we have $S_i(m)=S_i(n)$ .
