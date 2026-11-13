---
tag: V6FBA7RNA5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1422701
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78565
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2017
    source: hf-ai-mo-aops
    label: 2017 Online Math Open Problems
---
A five-digit positive integer is called *$k$ -phobic* if no matter how one chooses to alter at most four of the digits, the resulting number (after disregarding any leading zeroes) will not be a multiple of $k$ . Find the smallest positive integer value of $k$ such that there exists a $k$ -phobic number.

*Proposed by Yannick Yao*
