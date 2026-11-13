---
tag: W70JBQAH8C
kind: problem
type: answer
answer: (x,y)=(-\frac{1}{3},-\frac{1}{3}),(\frac{5}{3},\frac{5}{3})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103387
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real pairs $(x, y)$ that satisfy:
$$
\left\{\begin{array}{l}
x^{2}+y^{2}+x+y=x y(x+y)-\frac{10}{27}, \\
|x y| \leqslant \frac{25}{9} .
\end{array}\right.
$$
