---
tag: W25GB5F9VJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Romanian Master of Mathematics Shortlist
    url: https://artofproblemsolving.com/community/c6h1610595
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27658
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162370
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=68
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst
    source: hf-mathnet
    label: Romania THE 68th NMO SELECTION TESTS FOR THE BALKAN AND INTERNATIONAL MATHEMATICAL OLYMPIADS
---
Let $ABCD$ be a convex quadrilateral and let $P$ and $Q$ be variable points inside this quadrilateral so that $\angle APB=\angle CPD=\angle AQB=\angle CQD$ . Prove that the lines $PQ$ obtained in this way all pass through a fixed point , or they are all parallel.
