---
tag: 71RHXHEVAR
kind: problem
type: answer
answer: x_{1}=\frac{\sqrt{5}+1}{2},\quadx_{2}=\sqrt{5}+2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=176223
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the following equations:

$$
\begin{aligned}
& \frac{1.618+\frac{1}{x}}{1.618-\frac{1}{x}}=1.618+\frac{1}{1.618} \\
& \frac{0.618+\frac{1}{x}}{0.618-\frac{1}{x}}=0.618+\frac{1}{0.618}
\end{aligned}
$$

For 2nd graders, substitute the values 1.618 and 0.618 with $(\sqrt{5}+1) / 2$ and $(\sqrt{5}-1) / 2$, respectively.
