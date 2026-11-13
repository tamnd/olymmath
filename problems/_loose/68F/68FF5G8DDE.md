---
tag: 68FF5G8DDE
kind: problem
type: answer
answer: f(x)=\frac{1}{3}(\cos\frac{x-1}{x+1}+\cos\frac{1}{x}+\cos\frac{1+x}{1-x}-2\cosx)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105006
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the functional equation $f\left(\frac{x-1}{x+1}\right)+f\left(-\frac{1}{x}\right)+f\left(\frac{1+x}{1-x}\right)=\cos x(x \neq 0, \pm 1)$.
