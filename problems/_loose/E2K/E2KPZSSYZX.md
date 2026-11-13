---
tag: E2KPZSSYZX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103728
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Positive numbers $u_{1}, u_{2}, \cdots, u_{n}$ form an arithmetic sequence, prove:
$$
\begin{aligned}
t_{n} & =\frac{1}{\sqrt{u_{1}}+\sqrt{u_{2}}}+\frac{1}{\sqrt{u_{2}}+\sqrt{u_{3}}}+\cdots+\frac{1}{\sqrt{u_{n-1}}+\sqrt{u_{n}}} \\
& =\frac{n-1}{\sqrt{u_{1}}+\sqrt{u_{n}}} .
\end{aligned}
$$
