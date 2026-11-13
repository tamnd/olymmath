---
tag: 91FEEYXDAB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h1220093
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12352
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214261
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=17
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2015
    source: hf-ai-mo-aops
    label: 2015 Belarusian National Olympiad
---
Find all real $x\geq-1$ such that for all $a_1,...,a_n\geq1$ , where $n\geq2$ the following inequality holds $$ \frac{a_1+x}{2}*\frac{a_2+x}{2}*...*\frac{a_n+x}{2}\leq\frac{a_1a_2...a_n+x}{2} $$
