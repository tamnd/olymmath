---
tag: P3MX8P9YA0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2017
    url: https://artofproblemsolving.com/community/c6h3043756
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57200
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250019
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2017
    source: hf-ai-mo-aops
    label: Russian TST 2017
---
Let's call a number of the form $x^3+y^2$ with natural $x, y$ *successful*. Are there infinitely many natural $m$ such that among the numbers from $m + 1$ to $m + 2016^2$ exactly 2017 are successful?
