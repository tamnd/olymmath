---
tag: GAG694PCF1
kind: problem
type: answer
answer: A\geq\frac{2}{3}T
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)$ be a polynomial of degree greater than 2, all of whose roots are real. Furthermore, assume that $f(x)>0$ for all $-1<x<1$ and that $f(-1)=f(1)=0$.

1. Interpret geometrically the quantities $A=\int_{-1}^{1} f(x) \mathrm{d} x$ and $T=\frac{2 f^{\prime}(1) f^{\prime}(-1)}{f^{\prime}(1)-f^{\prime}(-1)}$.
2. Show that $A \geq \frac{2}{3} T$.
