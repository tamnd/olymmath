---
tag: KYYCQVC7H6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2014
    url: https://artofproblemsolving.com/community/c6h3229911
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57145
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249965
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2014
    source: hf-ai-mo-aops
    label: Russian TST 2014
---
Let $x,y,z$ be real numbers. Find the minimum value of the sum \begin{align*}|\cos(x)|+|\cos(y)|+|\cos(z)|+|\cos(x-y)|+|\cos(y-z)|+|\cos(z-x)|.\end{align*}
