---
tag: 8ND7MFHZ1Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 BMT
    url: https://artofproblemsolving.com/community/c6h3274489
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70394
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261331
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2021
    source: hf-ai-mo-aops
    label: 2021 BMT
---
Let the sequence $\{a_n\}$ for $n \ge 0$ be defined as $a_0 = c$ , and for $n \ge 0$ , $$ a_n =\frac{2a_{n-1}}{4a^2_{n-1} -1}. $$ Compute the sum of all values of $c$ such that $a_{2020}$ exists but $a_{2021}$ does not exist.
