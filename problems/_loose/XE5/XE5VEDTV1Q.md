---
tag: XE5VEDTV1Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1963 All Russian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1858338
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55076
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248434
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1963
    source: hf-ai-mo-aops
    label: 1963 All Russian Mathematical Olympiad
---
Given a triangle $ABC$ . We construct two angle bisectors in the corners $A$ and $B$ . Than we construct two lines parallel to those ones through the point $C$ . $D$ and $E$ are intersections of those lines with the bisectors. It happens, that $(DE)$ line is parallel to $(AB)$ . Prove that the triangle is isosceles.
