---
tag: FD1PSCYJN4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232378
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=46
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all values of the parameter $a$ for which the inequality
$$\sqrt{x-x^2-a}+\sqrt{6a-2x-x^2}\leq \sqrt{10a-2x-4x^2}$$
has a unique solution.
