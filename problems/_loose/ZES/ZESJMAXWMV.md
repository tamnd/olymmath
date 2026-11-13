---
tag: ZESJMAXWMV
kind: problem
type: answer
answer: \frac{1}{2}forp=0,nosolutionforp=1,2^{\frac{1}{p-1}}forp\geqq2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75455
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the field of real numbers, solve the system of equations

$$
\begin{aligned}
& \log _{x}(y+z)=p \\
& \log _{y}(z+x)=p \\
& \log _{z}(x+y)=p
\end{aligned}
$$

with unknowns $x, y, z$ and a non-negative integer parameter $p$.
