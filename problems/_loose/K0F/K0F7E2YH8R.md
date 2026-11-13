---
tag: K0F7E2YH8R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203997
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Japan/train/0000.parquet#row=298
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many positive integer sequences $(a_1,a_2,\ldots,a_{2022})$ satisfy that $a_1<a_2<\ldots<a_{2022}$, and
$$a_1^2-6^2\geq a_2^2-7^2\geq\ldots\geq a_{2022}^2-2027^2$$
