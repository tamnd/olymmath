---
tag: HJZHFH7N09
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85176
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Moldova/train/0000.parquet#row=25
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo
    source: hf-mathnet
    label: Moldova A 62 - A OLIMPIADĂ DE MATEMATICĂ A REPUBLICII MOLDOVA
---
Demonstrate that the equation

$$
[x]+[3 x]+[9 x]+[27 x]+[81 x]=19480
$$

has no solutions in $\mathrm{R}$ (where $[\alpha]$ denotes the integer part of the real number $\alpha$ ).
