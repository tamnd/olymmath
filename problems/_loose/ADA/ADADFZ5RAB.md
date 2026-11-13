---
tag: ADADFZ5RAB
kind: problem
type: answer
answer: r \le 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233439
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $r\in\mathbb{R}$. Alice and Bob plays the following game:
An equation with blank is written on the blackboard as below:
$$S=|\Box-\Box|+|\Box-\Box|+|\Box-\Box|$$
Every round, Alice choose a real number from $[0,1]$ (not necessary to be different from the numbers chosen before) and Bob fill it in an empty box. After 6 rounds, every blank is filled and $S$ is determined at the same time. If $S\ge r$ then Alice wins, otherwise Bob wins.
Find all $r$ such that Alice can guarantee her victory.
