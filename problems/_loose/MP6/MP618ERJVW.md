---
tag: MP618ERJVW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253596
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c$ be positive reals such that $4(a+b+c)\geq\frac{1}{a}+\frac{1}{b}+\frac{1}{c}$. Define
\begin{align*}
&A =\sqrt{\frac{3a}{a+2\sqrt{bc}}}+\sqrt{\frac{3b}{b+2\sqrt{ca}}}+\sqrt{\frac{3c}{c+2\sqrt{ab}}} \\
&B =\sqrt{a}+\sqrt{b}+\sqrt{c} \\
&C =\frac{a}{\sqrt{a+b}}+\frac{b}{\sqrt{b+c}}+\frac{c}{\sqrt{c+a}}.
\end{align*}
Prove that $$A\leq 2B\leq 4C.$$
