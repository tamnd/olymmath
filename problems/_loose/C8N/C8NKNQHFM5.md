---
tag: C8NKNQHFM5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A graph $G$ with $n$ vertex is called *good * if every vertex could be labelled with distinct positive integers which are less than or equal $\lfloor \frac{n^2}{4} \rfloor$ such that there exists a set of nonnegative integers $D$ with the following property: there exists an edge between $2$ vertices if and only if the difference of their labels is in $D$.
Show that there exists a positive integer $N$ such that for every $n \ge N$, there exist a not-good graph with $n$ vertices.
