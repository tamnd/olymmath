---
tag: NNM5APHWED
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Ukraine National Mathematical  Olympiad
    url: https://artofproblemsolving.com/community/c6h3221301
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=63039
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254626
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/2021
    source: hf-ai-mo-aops
    label: 2021 Ukraine National Mathematical  Olympiad
---
The numbers $(a_1 , a_2 , \ldots, a_{2021})$ and $(b_1 , b_2 , \ldots, b_{2021})$ are some different permutations of the numbers $(1, 2, \ldots, 2021)$ , and the numbers $(c_1 , c_2 , \ldots, c_{2021})$ are some permutation of the numbers $(2, 4, \ldots, 4042)$ . Prove that the given number D is positive: $$ D = \frac{c_1^2 -4 a_1b_1}{a_1 + b_1 + c_1} + \frac{c_2^2 - 4a_2b_2}{a_2 + b_2 + c_2} + \ldots + \frac{c_{2021}^2 - 4a_{2021}b_{2021}}{a_{2021} + b_{2021} + c_{2021}} $$ *Proposed by Bogdan Rublov*
