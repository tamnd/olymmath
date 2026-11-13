---
tag: JVGX246TR3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Taiwan Mathematics Olympiad
    url: https://artofproblemsolving.com/community/c6h3011009
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1181
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204837
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2023
    source: hf-ai-mo-aops
    label: 2023 Taiwan Mathematics Olympiad
---
Let $n$ and $k$ be positive integers. Let $A$ be a set of $2n$ distinct points on the Euclidean plane such that no three points in $A$ are collinear. Some pairs of points in $A$ are linked with a segment so that there are $n^2 + k$ distinct segments on the plane. Prove that there exists at least $\frac{4}{3}k^{3/2}$ distinct triangles on the plane with vertices in $A$ and sides as the aforementioned segments.
*Proposed by Ho-Chien Chen*
