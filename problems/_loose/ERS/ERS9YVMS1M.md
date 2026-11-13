---
tag: ERS9YVMS1M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h364906
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25125
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225811
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1992
    source: hf-ai-mo-aops
    label: 1992 IMO Longlists
---
Let $N$ be a point inside the triangle $ABC$ . Through the midpoints of the segments $AN, BN$ , and $CN$ the lines parallel to the opposite sides of $\triangle ABC$ are constructed. Let $AN, BN$ , and $CN$ be the intersection points of these lines. If $N$ is the orthocenter of the triangle $ABC$ , prove that the nine-point circles of $\triangle ABC$ and $\triangle A_NB_NC_N$ coincide.
