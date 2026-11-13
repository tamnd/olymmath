---
tag: F58WHFMNW8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h35324
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55850
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2005
    source: hf-ai-mo-aops
    label: 2005 All-Russian Olympiad
---
Given three reals $a_1, a_2, a_3>1, S=a_1+a_2+a_3$ . Provided ${a_i^2\over a_i-1}>S$ for every $i=1, 2, 3$ prove that $$\frac{1}{a_1+a_2}+\frac{1}{a_2+a_3}+\frac{1}{a_3+a_1}>1.$$
