---
tag: 1MXRZGVFZ3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253594
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of sequences $a_1,a_2,\dots,a_{100}$ such that

$\text{(i)}$ There exists $i\in\{1,2,\dots,100\}$ such that $a_i=3$, and

$\text{(ii)}$ $|a_i-a_{i+1}|\leq 1$ for all $1\leq i<100$.
