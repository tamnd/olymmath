---
tag: ZQQA2Q1X87
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251006
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=178
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if $a$ is an integer relatively prime with $35$ then $(a^4 - 1)(a^4 + 15a^2 + 1) \equiv 0$ mod $35$.
