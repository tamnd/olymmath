---
tag: JZ5RZW34GM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90669
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Is there an integer $x$ such that

$$
2010+2009 x+2008 x^{2}+2007 x^{3}+\cdots+2 x^{2008}+x^{2009}=0 ?
$$
