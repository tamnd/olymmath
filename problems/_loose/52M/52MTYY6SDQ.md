---
tag: 52MTYY6SDQ
kind: problem
type: answer
answer: \lg\frac{7}{5}\leqslantF(|-\frac{1}{6}|-|+\frac{1}{6}|)\leqslant\lg\frac{13}{5}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130515
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the function $f(x)=\frac{2 x^{2}+b x+c}{x^{2}+1}(b<0)$ has a range of $[1,3]$.
(1) Find the values of $b$ and $c$;
(2) Determine the monotonicity of the function $F(x)=\lg f(x)$ when $x \in[-1,1]$, and prove your conclusion;
(3) If $t \in \mathbf{R}$, prove that $\lg \frac{7}{5} \leqslant F\left(\left|t-\frac{1}{6}\right|-\left|t+\frac{1}{6}\right|\right) \leqslant \lg \frac{13}{5}$.
