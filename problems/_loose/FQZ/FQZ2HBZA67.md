---
tag: FQZ2HBZA67
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h478195
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4074
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206258
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2009
    source: hf-ai-mo-aops
    label: 2009 Romania Team Selection Test
---
Given an integer $n\geq 2$ , determine the maximum value the sum $x_1+\cdots+x_n$ may achieve, as the $x_i$ run through the positive integers, subject to $x_1\leq x_2\leq \cdots \leq x_n$ and $x_1+\cdots+x_n=x_1 x_2\cdots x_n$ .
