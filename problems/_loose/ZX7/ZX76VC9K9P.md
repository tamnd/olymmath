---
tag: ZX76VC9K9P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248770
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Soviet_Union/train/0001.parquet#row=88
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Soviet Union 18th ASU
---
Prove that every positive $a$ and $b$ satisfy inequality $\frac{(a+b)^2}{2} + \frac{a+b}{4} \ge a\sqrt b + b\sqrt a$
