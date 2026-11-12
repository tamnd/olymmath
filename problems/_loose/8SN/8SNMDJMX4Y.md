---
tag: 8SNMDJMX4Y
kind: problem
type: answer
answer: \geqslant2,\frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $t=2 x-1$. Consider the function $f(t)=\frac{t}{t^{2}+4}$. Since $t^{2}+4 \geqslant 2 \sqrt{4 t^{2}}=$ $4|t|$, then $-\frac{1}{4} \leqslant \frac{t}{t^{2}+4} \leqslant \frac{1}{4}$. The values $\pm \frac{1}{4}$ are achieved at $t= \pm 2$. Therefore, the range of the function $g(t)=16^{\frac{2 x-1}{4 x^{2}-4 x+5}}=16^{\frac{t}{t^{2}+4}}$ is the half-interval $\left[\frac{1}{2} ; 2\right]$.
