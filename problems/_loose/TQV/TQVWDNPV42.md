---
tag: TQVWDNPV42
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h2906311
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44435
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240709
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=320
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2022
    source: hf-ai-mo-aops
    label: 2022 Iran MO (3rd Round)
  - at: ir-mo
    source: hf-mathnet
    label: Iran 40th Iranian Mathematical Olympiad
---
In the triangle $ABC$ , variable points $D, E, F$ are on the sides[lines] $BC, CA, AB$ respectively so the triangle $DFE$ is similar to the triangle $ABC$ in this order. Circumcircles of $BDF$ and $CDE$ intersect respectively the circumcircle of $ABC$ at $P$ and $Q$ for the second time. Prove that the circumcircle of $DPQ$ passes through a fixed point.
