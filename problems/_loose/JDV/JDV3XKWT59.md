---
tag: JDV3XKWT59
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90511
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0008.parquet#row=388
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Aerith picks two numbers $x<y$, and picks one of them to tell to Bob uniformly at random. Is it possible for Bob to have a better than half chance of guessing whether the one he was told is $x$ ?
