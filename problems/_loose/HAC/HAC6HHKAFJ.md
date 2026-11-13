---
tag: HAC6HHKAFJ
kind: problem
type: answer
answer: P(2013) > \frac{1}{64}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267642
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A given polynomial $P(t) = t^3 + at^2 + bt + c$ has $3$ distinct real roots.
If the equation $(x^2 +x+2013)^3 +a(x^2 +x+2013)^2 + b(x^2 + x + 2013) + c = 0$ has no real roots,
prove that $P(2013) >\frac{1}{64}$
