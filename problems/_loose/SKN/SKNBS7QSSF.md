---
tag: SKNBS7QSSF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h1637219
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13573
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148191
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl/2016
    source: hf-ai-mo-aops
    label: 2016 Balkan MO Shortlist
---
A positive integer is called *downhill* if the digits in its decimal representation form a nonstrictly decreasing sequence from left to right. Suppose that a polynomial $P(x)$ with rational coefficients takes on an integer value for each downhill positive integer $x$ . Is it necessarily true that $P(x)$ takes on an integer value for each integer $x$ ?
