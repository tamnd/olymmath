---
tag: 90KWD2SQSJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1693989
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17693
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219272
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=345
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2019
    source: hf-ai-mo-aops
    label: 2019 Hong Kong TST
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong HKG TST
---
Let $a$ be a real number. Suppose the function $f(x) = \frac{a}{x-1} + \frac{1}{x-2} + \frac{1}{x-6}$ defined in the interval $3 < x < 5$ attains its maximum at $x=4$ . Find the value of $a.$
