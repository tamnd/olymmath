---
tag: 8RCFFZJPR8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213979
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for all all non-negative real numbers $a,b,c$ with $a^2+b^2+c^2=1$
$$\sqrt{a+b}+\sqrt{a+c}+\sqrt{b+c} \geq 5abc+2.$$
