---
tag: RV65KF3E0S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230499
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2012
    source: hf-mathnet
    label: Belarus Belorusija 2012
---
Given $0 < a < b < c$ prove that $$ a^{20}b^{12} + b^{20}c^{12 }+ c^{20}a^{12} <b^{20}a^{12}+ a^{20}c^{12} + c^{20}b^{12} $$

(I. Voronovich)
