---
tag: T38KCSTWVC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90619
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=40
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the sequence

$$
77492836181624186886128 \ldots,
$$

all of the digits except the first two are obtained by writing down the products of pairs of consecutive digits. Prove that infinitely many 6 s appear in the sequence.
