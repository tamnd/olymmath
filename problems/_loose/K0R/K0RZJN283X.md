---
tag: K0RZJN283X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10925
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187328
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ibero-American_Mathematical_Olympiad/train/0000.parquet#row=87
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2001
    source: hf-numina-olympiads
    label: IberoAmerican_MO
  - at: ibero
    source: hf-mathnet
    label: Ibero-American Mathematical Olympiad Iberoamerican Mathematical Olympiad
---
Call a set of 3 distinct elements which are in arithmetic progression a trio. What is the largest number of trios that can be subsets of a set of $n$ distinct real numbers?
