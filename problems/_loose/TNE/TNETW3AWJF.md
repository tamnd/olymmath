---
tag: TNETW3AWJF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2213517
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54860
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230304
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2012
    source: hf-ai-mo-aops
    label: 2012 239 Open Mathematical Olympiad
---
Vasya conceived a two-digit number $a$ , and Petya is trying to guess it. To do this, he tells Vasya a natural number $k$ , and Vasya tells Petya the sum of the digits of the number $ka$ . What is the smallest number of questions that Petya has to ask so that he can certainly be able to determine Vasya's number?
