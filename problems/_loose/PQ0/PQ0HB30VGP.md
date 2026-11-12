---
tag: PQ0HB30VGP
kind: problem
type: answer
answer: f(x)=\frac{3(x+1)(2-x)}{2(x^{2}+x+1)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the function $f(x)$, which is known to satisfy

$$
f(x)= \begin{cases}x \cdot f\left(\frac{2 x+3}{x-2}\right)+3, & \text { for } x \neq 2 \\ 0, & \text { for } x=2\end{cases}
$$
