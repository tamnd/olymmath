---
tag: GVRGVDDA99
kind: problem
type: answer
answer: \frac{1+x^{2}}{(1-x^{2})^{2}+4x^{2}\cdot\sin^{2}\frac{\alpha}{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=47830
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the derivative.

$$
y=\frac{1}{2 \sin \frac{\alpha}{2}} \cdot \operatorname{arctg} \frac{2 x \sin \frac{\alpha}{2}}{1-x^{2}}
$$
