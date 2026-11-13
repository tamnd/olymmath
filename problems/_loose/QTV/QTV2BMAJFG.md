---
tag: QTV2BMAJFG
kind: problem
type: answer
answer: \frac{\sqrt{6}-\sqrt{2}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126428
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{a_{n}\right\}$ satisfies:
$$
\begin{array}{l}
a_{1}=0, a_{2}=1, \\
a_{n+1}=\frac{\sqrt{6}-\sqrt{2}}{2} a_{n}-a_{n-1}(n \geqslant 2) .
\end{array}
$$

Then $a_{2019}=$
