---
tag: J2YQHHH89M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 HMNT
    url: https://artofproblemsolving.com/community/c6h2763199
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=72298
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262636
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=160
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmnt/2019
    source: hf-ai-mo-aops
    label: 2019 HMNT
  - at: hmnt/2019
    source: hf-mathnet
    label: United States HMMT November 2019
---
Compute the sum of all positive real numbers $x \le 5$ satisfying $$ x =\frac{ \lceil x^2 \rceil + \lceil x \rceil \cdot \lfloor x \rfloor}{ \lceil x\rceil + \lfloor x \rfloor} $$
