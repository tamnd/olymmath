---
tag: DJ5D94N9HG
kind: problem
type: answer
answer: \frac{1}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178560
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[1, \infty) \rightarrow \mathbb{R}, f(x)=\int_{0}^{1} \frac{t^{x}}{2 t+1} d t$.

a) Calculate $f(1)$.

b) Show that $2 f(x+1)+f(x)=\frac{1}{x+1}$, for any $x \in[1, \infty)$.

c) Calculate $\lim _{x \rightarrow \infty} x f(x)$.
