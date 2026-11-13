---
tag: HV2F37FEZQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 USA Team Selection Test
    url: https://artofproblemsolving.com/community/c6h546345
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10558
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148068
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0005.parquet#row=110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: us-tst/2013
    source: hf-ai-mo-aops
    label: 2013 USA Team Selection Test
  - at: us-tst
    source: hf-mathnet
    label: United States IMO Team Selection Test
---
Two incongruent triangles $ABC$ and $XYZ$ are called a pair of *pals* if they satisfy the following conditions:
(a) the two triangles have the same area;
(b) let $M$ and $W$ be the respective midpoints of sides $BC$ and $YZ$ . The two sets of lengths $\{AB, AM, AC\}$ and $\{XY, XW, XZ\}$ are identical $3$ -element sets of pairwise relatively prime integers.

Determine if there are infinitely many pairs of triangles that are pals of each other.
