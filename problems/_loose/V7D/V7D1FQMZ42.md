---
tag: V7D1FQMZ42
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h1822246
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18504
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220059
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/2019
    source: hf-ai-mo-aops
    label: 2019 Vietnam National Olympiad
---
Let $ABC$ be triangle with $H$ is the orthocenter and $I$ is incenter. Denote $A_{1}, A_{2}, B_{1}, B_{2}, C_{1}, C_{2}$ be the points on the rays $AB, AC, BC, CA, CB$ , respectively such that $$ AA_{1} = AA_{2} = BC, BB_{1} = BB_{2} = CA, CC_{1} = CC_{2} = AB. $$ Suppose that $B_{1}B_{2}$ cuts $C_{1}C_{2}$ at $A'$ , $C_{1}C_{2}$ cuts $A_{1}A_{2}$ at $B'$ and $A_{1}A_{2}$ cuts $B_{1}B_{2}$ at $C'$ .
a) Prove that area of triangle $A'B'C'$ is smaller than or equal to the area of triangle $ABC$ .
b) Let $J$ be circumcenter of triangle $A'B'C'$ . $AJ$ cuts $BC$ at $R$ , $BJ$ cuts $CA$ at $S$ and $CJ$ cuts $AB$ at $T$ . Suppose that $(AST), (BTR), (CRS)$ intersect at $K$ . Prove that if triangle $ABC$ is not isosceles then $HIJK$ is a parallelogram.
