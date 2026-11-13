---
tag: 90HW7TQ0DY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h522312
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9952
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211948
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
Find the number of positive integers $n$ for which there exists a sequence $x_1, x_2, \cdots, x_n$ of integers with the following property: if indices $1 \le i \le j \le n$ satisfy $i+j \le n$ and $x_i - x_j$ is divisible by $3$ , then $x_{i+j} + x_i + x_j + 1$ is divisible by $3$ .

*Based on a proposal by Ivan Koswara*
