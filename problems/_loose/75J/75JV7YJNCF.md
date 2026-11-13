---
tag: 75JV7YJNCF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89801
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=93
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2011
    source: hf-mathnet
    label: Croatia CroatianCompetitions2011
---
In triangle $ABC$ with centroid $T$ and circumcenter $O$, it is given that $OT \perp AT$. Let $A'$ be the second intersection point of line $AT$ and the circumcircle of triangle $ABC$. Let point $D$ be the intersection of lines $BA'$ and $AC$, and point $E$ be the intersection of lines $CA'$ and $AB$. Prove that the circumcenter of triangle $ADE$ lies on the circumcircle of triangle $ABC$.
