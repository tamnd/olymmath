---
tag: K8E61FMSJQ
kind: problem
type: answer
answer: B^{-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=163638
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We see that $A=\frac{a^{-2}-b^{-2}}{a^{-1}-b^{-1}}$

$$
\text{ and } B=\left(\frac{a^{-1}}{a^{-1}-b^{-1}}-\frac{b^{-1}}{a^{-1}+b^{-1}}\right) \cdot\left(a^{-1}-b^{-1}\right) \cdot\left(a^{-2}+b^{-2}\right)^{-1}
$$

Prove that $A=B^{-1}$.
