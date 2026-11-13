---
tag: HW53PK04YK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269313
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $m$ is called self-descriptive in base $b$, where $b\ge2$ is an integer, if

i) The representation of $m$ in base $b$ is of the form $(a_0a_1\ldots a_{b-1})_b$ (that is $m=a_0b^{b-1}+a_1b^{b-2}+\ldots+a_{b-2}b+a_{b-1}$, where $0\le a_i\le b-1$ are integers).
ii) $a_i$ is equal to the number of occurences of the number $i$ in the sequence $(a_0a_1\ldots a_{b-1})$.

For example, $(1210)_4$ is self-descriptive in base $4$, because it has four digits and contains one $0$, two $1$s, one $2$ and no $3$s.
