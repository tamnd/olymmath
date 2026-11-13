---
tag: B6RYNT18Z7
kind: problem
type: answer
answer: \frac{(+)-\sqrt{(+)^{2}+4D}}{(+)+\sqrt{(+)^{2}+4D}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=176579
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that the roots of the equation

$$
x=\frac{a x+b}{c x+d}
$$

are $\alpha$ and $\beta$. Furthermore, suppose that

$$
y=\frac{a z+b}{c z+d}
$$

Prove that the latter equation can be transformed into the following form:

$$
\frac{y-\alpha}{y-\beta}=k \frac{z-\alpha}{z-\beta}
$$

and determine the value of $k$.
