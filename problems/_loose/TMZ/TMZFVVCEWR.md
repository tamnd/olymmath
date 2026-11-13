---
tag: TMZFVVCEWR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100715
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $a, b, c$ are positive numbers not greater than 1, and $n$ is a positive integer, then
$$
\frac{1}{\sqrt[n]{1+a}}+\frac{1}{\sqrt[n]{1+b}}+\frac{1}{\sqrt[n]{1+c}} \leqslant \frac{3}{\sqrt[n]{1+\sqrt[3]{a b c}}}
$$
