---
tag: XNJKQ254S6
kind: problem
type: answer
answer: "-8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207403
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $a$ and $b$ are nonzero real numbers such that $\left| a \right| \ne \left| b \right|$, compute the value of the expression
$$
\left( \frac{b^2}{a^2} + \frac{a^2}{b^2} - 2 \right) \times
\left( \frac{a + b}{b - a} + \frac{b - a}{a + b} \right) \times
\left(
\frac{\frac{1}{a^2} + \frac{1}{b^2}}{\frac{1}{b^2} - \frac{1}{a^2}}
- \frac{\frac{1}{b^2} - \frac{1}{a^2}}{\frac{1}{a^2} + \frac{1}{b^2}}
\right).
$$
