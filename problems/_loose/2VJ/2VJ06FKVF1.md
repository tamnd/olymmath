---
tag: 2VJ06FKVF1
kind: problem
type: answer
answer: f()={\begin{pmatrix}1&(0<\leqslant\frac{1}{2})\\\frac{\sqrt{4-1}}{2}&(>\frac{1}{2})\end{pmatrix}.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101189
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $a>0$, the curve $C:|y|=1-a x^{2}\left(|x| \leqslant \frac{1}{\sqrt{a}}\right)$ can contain a circle of radius $r$, and when the center of the circle is $(0,0)$, the maximum value of $r$ is $f(a)$.
(1) Find the expression for $f(a)$;
(2) Prove that when the center of the circle is not at $(0,0)$, $r \leqslant f(a)$.
