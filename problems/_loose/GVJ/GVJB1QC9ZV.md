---
tag: GVJB1QC9ZV
kind: problem
type: answer
answer: 2^{300}<3^{200}<10^{100}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90282
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=429
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Order the numbers $2^{300}, 10^{100}$, and $3^{200}$ from least to greatest, and prove that your ordering is correct.
