---
tag: E3RBV1EQ3M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h560325
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10081
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212077
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
Suppose that $x_1 < x_2 < \dots < x_n$ is a sequence of positive integers such that $x_k$ divides $x_{k+2}$ for each $k = 1, 2, \dots, n-2$ . Given that $x_n = 1000$ , what is the largest possible value of $n$ ?

*Proposed by Evan Chen*
