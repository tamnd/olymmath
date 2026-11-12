---
tag: M2DJ4MZ4XF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33665
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $F(x)=\mathrm{P}((-\infty, x])$. Show the validity of the following formulas:

$$
\begin{aligned}
\mathrm{P}((a, b]) & =F(b)-F(a), \mathrm{P}((a, b))=F(b-)-F(a) \\
\mathrm{P}([a, b]) & =F(b)-F(a-), \mathrm{P}([a, b))=F(b-)-F(a-) \\
\mathrm{P}(\{x\}) & =F(x)-F(x-),
\end{aligned}
$$

where $F(x-)=\lim _{y \uparrow x} F(y)$.
