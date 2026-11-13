---
tag: QJCSPTP5A1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85145
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Moldova/train/0000.parquet#row=141
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo
    source: hf-mathnet
    label: Moldova OLIMPIADA REPUBLICANĂ LA MATEMATICĂ
---
Consider the triangle $A B C$ with $m(\angle A)>90^{\circ}$ and $a=|B C|, b=|A C|, c=|A B|$ the lengths of its sides. Show that the equation

$$
x^{2}-(a+b+c) x+b^{2}+c^{2}=0
$$

has two distinct real solutions.
