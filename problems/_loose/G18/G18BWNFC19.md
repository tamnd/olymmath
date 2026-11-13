---
tag: G18BWNFC19
kind: problem
type: answer
answer: \frac{1}{(1-a_{2})(1-a_{3})(1-a_{4})}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168959
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Simplify the following expression:

$$
\begin{aligned}
& 1+\frac{a_{1}}{1-a_{1}}+ \frac{a_{2}}{\left(1-a_{1}\right)\left(1-a_{2}\right)}+\frac{a_{3}}{\left(1-a_{1}\right)\left(1-a_{2}\right)\left(1-a_{3}\right)}+ \\
& \frac{a_{4}-a_{1}}{\left(1-a_{1}\right)\left(1-a_{2}\right)\left(1-a_{3}\right)\left(1-a_{4}\right)}
\end{aligned}
$$
