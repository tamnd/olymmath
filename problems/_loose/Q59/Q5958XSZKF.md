---
tag: Q5958XSZKF
kind: problem
type: answer
answer: (\frac{31}{8})^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114006
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Positive numbers $a, b$ satisfy $a+b=1$, prove: $\left(\frac{1}{a^{2}}-a^{3}\right)\left(\frac{1}{b^{2}}-b^{3}\right) \geqslant\left(\frac{31}{8}\right)^{2}$. Solution
$$
\begin{array}{l}
\left(\frac{1}{a^{2}}-a^{3}\right)\left(\frac{1}{b^{2}}-b^{3}\right)=\frac{\left(1-a^{5}\right)\left(1-b^{5}\right)}{a^{2} b^{2}} \\
=\frac{(1-a)(1-b)\left(a^{4}+a^{3}+a^{2}+a+1\right)\left(b^{4}+b^{3}+b^{2}+b+1\right)}{a^{2} b^{2}}
\end{array}
$$
