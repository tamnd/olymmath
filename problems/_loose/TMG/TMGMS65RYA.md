---
tag: TMGMS65RYA
kind: problem
type: answer
answer: 2^{n}\sin^{n}\frac{\theta}{2}\sin(\frac{3n\pi}{2}+\frac{n\theta}{2}+\alpha)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98038
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Simplify: $C_{n}^{0} \sin \alpha-C_{n}^{1} \sin (\alpha+\theta)+\cdots+(-1)^{n} C_{n}^{n} \sin (\alpha+n \theta)$.
