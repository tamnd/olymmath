---
tag: KAXR0BMJS3
kind: problem
type: answer
answer: "891"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116527
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the set
$$
I=\left\{\left(x_{1}, x_{2}, x_{3}, x_{4}\right) \mid x_{i} \in\{1,2, \cdots, 11\}\right\} \text {, }
$$
$A$ is a subset of $I$ and satisfies: for any
$$
\left(x_{1}, x_{2}, x_{3}, x_{4}\right) 、\left(y_{1}, y_{2}, y_{3}, y_{4}\right) \in A,
$$

there exist $i 、 j(1 \leqslant i<j \leqslant 4)$ such that
$$
\left(x_{i}-x_{j}\right)\left(y_{i}-y_{j}\right)<0 \text {. }
$$

Determine the maximum value of $|A|$, where $|A|$ denotes the number of elements in the set $A$.
