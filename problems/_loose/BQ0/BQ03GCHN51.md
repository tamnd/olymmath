---
tag: BQ03GCHN51
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h2995360
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29781
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229502
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2010
    source: hf-ai-mo-aops
    label: 2010 Argentina National Olympiad
---
$21$ numbers are written in a row. $u,v,w$ are three consecutive numbers so $v=\frac{2uw}{u+w}$ . The first number is $\frac{1}{100}$ , the last one is $\frac{1}{101}$ . Find the $15$ th number.
