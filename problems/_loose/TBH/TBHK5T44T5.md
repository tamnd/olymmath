---
tag: TBHK5T44T5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213843
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=263
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAMC
---
Let $ABC$ be a triangle and let $P$ be a point on $BC$. Points $M$ and $N$ lie on $AB$ and $AC$, respectively such that $MN$ is not parallel to $BC$ and $AMP N$ is a parallelogram. Line $MN$ meets the circumcircle of $ABC$ at $R$ and $S$. Prove that the circumcircle of triangle $RP S$ is tangent to $BC$.
