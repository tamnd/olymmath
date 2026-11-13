---
tag: V8TZB15B9F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h37601
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35699
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234213
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1995
    source: hf-ai-mo-aops
    label: 1995 China Team Selection Test
---
Prove that the interval $\lbrack 0,1 \rbrack$ can be split into black and white intervals for any quadratic polynomial $P(x)$ , such that the sum of weights of the black intervals is equal to the sum of weights of the white intervals. (Define the weight of the interval $\lbrack a,b \rbrack$ as $P(b) - P(a)$ .)

Does the same result hold with a degree 3 or degree 5 polynomial?
