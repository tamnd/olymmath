---
tag: D35QEDCZKV
kind: problem
appearances:
  - at: pumac/2015/ca7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2015 official paper
    url: https://pumac.princeton.edu/s/PUMaC2015_CombinatoricsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1600006
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12973
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214880
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The lattice points $(i, j)$ for integers $0 \le i, j \le 3$ are each being painted orange or black. Suppose a coloring is good if for every set of integers $x_1, x_2, y_1, y_2$ such that $0 \le x_1 < x_2 \le 3$ and $0 \le y_1 < y_2 \le 3$ , the points $(x_1, y_1),(x_1, y_2),(x_2, y_1),(x_2, y_2)$ are not all the same color. How many good colorings are possible?
