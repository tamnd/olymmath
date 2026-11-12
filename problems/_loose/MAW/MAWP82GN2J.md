---
tag: MAWP82GN2J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=42430
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for the cubic equation $a x^{3}+b x^{2}+c x+d=0$, there exists the following relationship between the roots and the coefficients:

$$
\begin{gathered}
x_{1}+x_{2}+x_{3}=-\frac{b}{a}, x_{1} \cdot x_{2}+x_{1} \cdot x_{3}+x_{2} \cdot x_{3}=\frac{c}{a} \\
x_{1} \cdot x_{2} \cdot x_{3}=-\frac{d}{a}
\end{gathered}
$$
