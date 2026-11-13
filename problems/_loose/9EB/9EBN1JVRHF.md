---
tag: 9EBN1JVRHF
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89581
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Mathematica competitions in Croatia
---
Calculate the product

$$
\left(1-\frac{\cos 61^{\circ}}{\cos 1^{\circ}}\right)\left(1-\frac{\cos 62^{\circ}}{\cos 2^{\circ}}\right) \ldots\left(1-\frac{\cos 119^{\circ}}{\cos 59^{\circ}}\right)
$$
