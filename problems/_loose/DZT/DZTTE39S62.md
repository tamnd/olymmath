---
tag: DZTTE39S62
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 23rd Philippine MO Qualifying Stage
    url: https://artofproblemsolving.com/community/c6h3497567
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50818
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154718
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-ai-mo-aops
    label: 23rd Philippine MO Qualifying Stage
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 23rd Philippine Mathematical Olympiad Qualifying Stage
---
Let $ \triangle ABC $ be an equilateral triangle with side length $16$. Points $ D, E, F $ are on $ CA $, $ AB $, and $ BC $, respectively, such that $ DE \perp AE $, $ DF \perp CF $, and $ BD = 14 $. The perimeter of $ \triangle BEF $ can be written in the form $ a + b\sqrt{2} + c\sqrt{3} + d\sqrt{6} $, where $ a, b, c, $ and $ d $ are integers. Find $ a + b + c + d $.
