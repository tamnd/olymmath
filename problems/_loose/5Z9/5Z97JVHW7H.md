---
tag: 5Z97JVHW7H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For what value of $10 k$ does the equation $\frac{\lg \left(2-x^{2}\right)}{\lg (x-a)}=2$ have no solution? One solution? Two solutions?
Analysis The equation is equivalent to
$$
\left\{\begin{array}{l}
2-x^{2}=(x-a)^{2}, \\
2-x^{2}>0, \\
x-a>0, \\
x-a \neq 1 .
\end{array}\right.
$$

Combining (2) and (3), we can isolate $a$ in equation (1), yielding $a=x^{2}-\sqrt{2-x^{2}}$. Using trigonometric substitution, we can transform this into a trigonometric function problem, and analyze and solve it using graphs.
