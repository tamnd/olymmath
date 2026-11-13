---
tag: GTW2E3EGD5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3045605
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54936
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248315
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2018
    source: hf-ai-mo-aops
    label: 2018 239 Open Mathematical Olympiad
---
The sequence $a_n$ is defined by the following conditions: $a_1=1$ , and for any $n\in \mathbb N$ , the number $a_{n+1}$ is obtained from $a_n$ by adding three if $n$ is a member of this sequence, and two if it is not. Prove that $a_n<(1+\sqrt 2)n$ for all $n$ .

*Proposed by Mikhail Ivanov*
