---
tag: SKD1JGBB8S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h1831674
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17217
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218811
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2019
    source: hf-ai-mo-aops
    label: 2019 All-Russian Olympiad
---
A positive integer $n$ is given. A cube $3\times3\times3$ is built from $26$ white and $1$ black cubes $1\times1\times1$ such that the black cube is in the center of $3\times3\times3$ -cube. A cube $3n\times 3n\times 3n$ is formed by $n^3$ such $3\times3\times3$ -cubes. What is the smallest number of white cubes which should be colored in red in such a way that every white cube will have at least one common vertex with a red one.
