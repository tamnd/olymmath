---
tag: B0HKFEFN0N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1924974
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18251
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219818
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2019
    source: hf-ai-mo-aops
    label: 2019 Romania Team Selection Test
---
Determine the largest value the expression $$ \sum_{1\le i<j\le 4} \left( x_i+x_j \right)\sqrt{x_ix_j} $$ may achieve, as $ x_1,x_2,x_3,x_4 $ run through the non-negative real numbers, and add up to $ 1. $ Find also the specific values of this numbers that make the above sum achieve the asked maximum.
