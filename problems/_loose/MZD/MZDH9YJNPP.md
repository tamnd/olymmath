---
tag: MZDH9YJNPP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1968 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h368358
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25157
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225890
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1968
    source: hf-ai-mo-aops
    label: 1968 IMO Shortlist
---
Find all solutions $(x_1, x_2, . . . , x_n)$ of the equation
$$1 +\frac{1}{x_1} + \frac{x_1+1}{x{}_1x{}_2}+\frac{(x_1+1)(x_2+1)}{x{}_1{}_2x{}_3} +\cdots + \frac{(x_1+1)(x_2+1) \cdots (x_{n-1}+1)}{x{}_1x{}_2\cdots x_n} =0$$
