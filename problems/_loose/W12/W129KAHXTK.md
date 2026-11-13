---
tag: W129KAHXTK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84872
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that all terms of the sequence $\left(a_{n}\right)$ defined by

$$
\left\{\begin{array}{l}
a_{1}=a_{2}=a_{3}=1 \\
a_{n+1}=\frac{1+a_{n-1} a_{n}}{a_{n-2}}
\end{array}\right.
$$

are integers.
