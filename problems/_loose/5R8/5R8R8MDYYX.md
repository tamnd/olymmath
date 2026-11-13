---
tag: 5R8R8MDYYX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $a, b, c > 0$, prove:
$$
\sum \frac{a}{\sqrt{a+b}} \geqslant \frac{\sqrt{2}}{2} \sum \sqrt{a},
$$

where "$\sum$" denotes the cyclic sum.
This problem was selected as a 2014 Indonesian National Team Selection Exam question.
We will prove a stronger inequality:
$$
\begin{array}{l}
\sum \frac{a}{\sqrt{a+b}} \geqslant \sqrt{\left(\sum a b\right)\left(\sum \frac{1}{a+b}\right)} \\
\geqslant \frac{\sqrt{2}}{2} \sum \sqrt{a} .
\end{array}
$$
