---
tag: DZHV1XST8D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245426
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The general term of a sequence of numbers is defined as $a_n =\frac{1}{n^2 - n}$, for every integer $n \ge 3$.
That is, $a_3 =\frac16$, $a_4 =\frac{1}{12}$, $a_5 =\frac{1}{20}$, and so on.
Find a general expression for the sum $S_n$, which is the sum of all terms from $a_3$ until $a_n$.
