---
tag: QS0R37BZT9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89169
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=300
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Mathematica competitions in Croatia
---
Prove that

$$
\log _{2}\left(1+\frac{1}{1}\right)+\log _{2}\left(1+\frac{1}{2}\right)+\cdots+\log _{2}\left(1+\frac{1}{k}\right)+\cdots+\log _{2}\left(1+\frac{1}{2014}\right)<11
$$
