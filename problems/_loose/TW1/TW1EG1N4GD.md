---
tag: TW1EG1N4GD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1940895
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18881
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2020
    source: hf-ai-mo-aops
    label: 2020 Hong Kong TST
---
Find all real-valued functions $f$ defined on the set of real numbers such that $$ f(f(x)+y)+f(x+f(y))=2f(xf(y)) $$ for any real numbers $x$ and $y$ .
