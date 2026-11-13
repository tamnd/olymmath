---
tag: 91YAHGX53D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 25th Philippine MO Area Stage
    url: https://artofproblemsolving.com/community/c6h3513784
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50754
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154594
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=340
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-ai-mo-aops
    label: 25th Philippine MO Area Stage
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 25th Philippine Mathematical Olympiad Area Stage
---
Let $ABC$ be an acute scalene triangle with orthocenter $H$ . Let $M$ be the midpoint of $BC$ , and suppose that the line through $H$ perpendicular to $AM$ intersects $AB$ and $AC$ at points $E$ and $F$ respectively. Denote by $O$ the circumcenter of triangle $AEF$ , and $D$ the foot of the perpendicular from $H$ to $AM$ . Prove that the line $AO$ intersects the perpendicular from $D$ to $BC$ at a point on the circumcircle of triangle $ABC$ .
