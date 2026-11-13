---
tag: 4AERS6GAQ7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 India PRMO
    url: https://artofproblemsolving.com/community/c6h1893411
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17790
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2019
    source: hf-ai-mo-aops
    label: 2019 India PRMO
---
Let $x_{1}$ be a positive real number and for every integer $n \geq 1$ let $x_{n+1} = 1 + x_{1}x_{2}\ldots x_{n-1}x_{n}$ .
If $x_{5} = 43$ , what is the sum of digits of the largest prime factors of $x_{6}$ ?
