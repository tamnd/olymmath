---
tag: KVJC1ATRR3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h38401
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35716
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234229
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1998
    source: hf-ai-mo-aops
    label: 1998 China Team Selection Test
---
Let $n$ be a natural number greater than 2. $l$ is a line on a plane. There are $n$ distinct points $P_1$ , $P_2$ , …, $P_n$ on $l$ . Let the product of distances between $P_i$ and the other $n-1$ points be $d_i$ ( $i = 1, 2,$ …, $n$ ). There exists a point $Q$ , which does not lie on $l$ , on the plane. Let the distance from $Q$ to $P_i$ be $C_i$ ( $i = 1, 2,$ …, $n$ ). Find $S_n = \sum_{i = 1}^{n} (-1)^{n-i} \frac{c_i^2}{d_i}$ .
