---
tag: TV049C9KDF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 USA TSTST
    url: https://artofproblemsolving.com/community/c6h489750
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8946
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211008
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0004.parquet#row=471
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tstst/2012
    source: hf-ai-mo-aops
    label: 2012 USA TSTST
---
Find all infinite sequences $a_1, a_2, \ldots$ of positive integers satisfying the following properties:
(a) $a_1 < a_2 < a_3 < \cdots$ ,
(b) there are no positive integers $i$ , $j$ , $k$ , not necessarily distinct, such that $a_i+a_j=a_k$ ,
(c) there are infinitely many $k$ such that $a_k = 2k-1$ .
