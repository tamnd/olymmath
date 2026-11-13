---
tag: 1VTYHYKH3H
kind: problem
type: answer
answer: f(x)=1+\frac{1}{x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186084
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all functions $f$ that are defined for all real numbers $x$ with $x \neq 0$ and satisfy the following conditions (1), (2), (3):

(1) For all real numbers $x$ with $x \neq 0$, $f\left(\frac{1}{x}\right)=x \cdot f(x)$.

(2) For all real numbers $x$ and $y$ with $x \neq 0, y \neq 0$ and $x+y \neq 0$, $f\left(\frac{1}{x}\right)+f\left(\frac{1}{y}\right)=1+f\left(\frac{1}{x+y}\right)$.

(3) $f(1)=2$.
