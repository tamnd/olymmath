---
tag: SCH6EMDHRC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90565
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=179
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be an odd prime and $a, b$ positive integers satisfying $(p+1)^{a}-p^{b}=1$. Show that $a=b=1$.
