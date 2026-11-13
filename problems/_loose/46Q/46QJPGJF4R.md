---
tag: 46QJPGJF4R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h367553
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25062
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225748
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1990
    source: hf-ai-mo-aops
    label: 1990 IMO Longlists
---
Let $S, T$ be the circumcenter and centroid of triangle $ABC$ , respectively. $M$ is a point in the plane of triangle $ABC$ such that $90^\circ \leq \angle SMT < 180^\circ$ . $A_1, B_1, C_1$ are the intersections of $AM, BM, CM$ with the circumcircle of triangle $ABC$ respectively. Prove that $MA_1 + MB_1 + MC_1 \geq MA + MB + MC.$
