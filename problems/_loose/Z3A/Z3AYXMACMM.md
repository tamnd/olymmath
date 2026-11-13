---
tag: Z3AYXMACMM
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90704
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=389
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A set $S$ of irrational real numbers has the property that among any subset of five numbers in $S$, one can find two with irrational sum. How large can $|S|$ be?
