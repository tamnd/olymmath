---
tag: WFXMZV2NA2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2011137
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54344
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1991
    source: hf-ai-mo-aops
    label: 1991 Romania Team Selection Test
---
Let $C$ be a coloring of all edges and diagonals of a convex $n$ -gon in red and blue (in Romanian, rosu and albastru). Denote by $q_r(C)$ (resp. $q_a(C)$ ) the number of quadrilaterals having all its edges and diagonals red (resp. blue).
Prove: $ \underset{C}{min} (q_r(C)+q_a(C)) \le \frac{1}{32} {n \choose 4}$
