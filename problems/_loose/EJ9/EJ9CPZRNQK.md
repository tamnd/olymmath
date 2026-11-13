---
tag: EJ9CPZRNQK
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141667
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $x_{1}, x_{2}, \cdots, x_{2021}$ take values of 1 or $-\mathrm{i}$, let
$$
\begin{aligned}
S= & x_{1} x_{2} x_{3}+x_{2} x_{3} x_{4}+\cdots+x_{2019} x_{2020} x_{2021}+ \\
& x_{2020} x_{2021} x_{1}+x_{2021} x_{1} x_{2} .
\end{aligned}
$$

Find the smallest non-negative value that $S$ can take.
