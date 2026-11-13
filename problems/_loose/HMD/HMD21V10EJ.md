---
tag: HMD21V10EJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208120
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=81
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that
$$ a^2b^2(a^2+b^2-2) \geq (a+b)(ab-1) $$
for all positive real numbers $a$ and $b.$
