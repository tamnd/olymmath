---
tag: NHRKZDQHJF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h37581
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40006
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237009
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2005
    source: hf-ai-mo-aops
    label: 2005 Germany Team Selection Test
---
A positive integer is called *nice* if the sum of its digits in the number system with base $ 3$ is divisible by $ 3$ .

Calculate the sum of the first $ 2005$ nice positive integers.
