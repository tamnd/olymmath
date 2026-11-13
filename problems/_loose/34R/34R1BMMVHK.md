---
tag: 34R1BMMVHK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Saint Petersburg Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1310104
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13099
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215002
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-spb/2015
    source: hf-ai-mo-aops
    label: 2015 Saint Petersburg Mathematical Olympiad
---
A sequence of integers is defined as follows: $a_1=1,a_2=2,a_3=3$ and for $n>3$ , $$ a_n=\textsf{The smallest integer not occurring earlier, which is relatively prime to }a_{n-1}\textsf{ but not relatively prime to }a_{n-2}. $$ Prove that every natural number occurs exactly once in this sequence.

*M. Ivanov*
