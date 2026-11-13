---
tag: WFK5Q4YXX4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h3072503
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=805
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204457
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2023
    source: hf-ai-mo-aops
    label: 2023 Irish Math Olympiad
---
For $n \geq 3$ , a *special n-triangle* is a triangle with $n$ distinct numbers on each side such that the sum of the numbers on a side is the same for all sides. For instance, because $41 + 23 + 43 = 43 + 17 + 47 = 47 + 19 + 41$ , the following is a special $3$ -triangle: $$ 41 $$ $$ 23\text{ }\text{ }\text{ }\text{ }\text{ }19 $$ $$ 43\text{ }\text{ }\text{ }\text{ }\text{ }17\text{ }\text{ }\text{ }\text{ }\text{ }47 $$ Note that a special $n$ -triangle contains $3(n - 1)$ numbers.

An infinite set $A$ of positive integers is a *special set* if, for each $n \geq 3$ , the smallest $3(n - 1)$ numbers of $A$ can be used to form a special $n$ -triangle.

Show that the set of positive integers that are not multiples of $2023$ is a special set.
