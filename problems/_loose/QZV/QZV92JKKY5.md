---
tag: QZV92JKKY5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106430
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
x_{n+1}=\left\{\begin{array}{ll}
\frac{1}{x_{n}}-\left[\frac{1}{x_{n}}\right], & \text { if } x_{n} \neq 0, \\
0, & \text { if } x_{n}=0,
\end{array}(n \geqslant 1) .\right.
$$

Prove: For all positive integers $n$, we have
$$
x_{1}+x_{2}+\cdots+x_{n}<\frac{f_{1}}{f_{2}}+\frac{f_{2}}{f_{3}}+\cdots+\frac{f_{n}}{f_{n+1}},
$$

where $\left\{f_{n}\right\}$ is the Fibonacci sequence: $f_{1}=f_{2}=1, f_{n+2}=f_{n+1}+f_{n}, n=1,2, \cdots$.
