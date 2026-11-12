---
tag: 7MSJPFVTWK
kind: problem
type: answer
answer: \sqrt{(\frac{b}{2})^{2}+[\frac{^{2}+(\frac{b}{2}-x)^{2}-\frac{b^{2}}{4}}{2}]^{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37890
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $h$ is the height of a triangle, $b$ is the base, and $x$ is the smaller of its segments, then the radius of the circumscribed circle according to Wiedmann is expressed by the formula:

$$
r=\sqrt{\binom{b}{2}^{2}+\left(\frac{h^{2}+\left(\frac{b}{2}-x\right)^{2}-\frac{b^{2}}{4}}{2 h}\right)^{2}}
$$

Verify the validity of this formula.

Problem from the Munich manuscript of Frater Friederigus.
