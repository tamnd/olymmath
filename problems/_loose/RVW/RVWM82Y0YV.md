---
tag: RVWM82Y0YV
kind: problem
type: answer
answer: \varphi(x)=\frac{2\lambda\pi}{1+2\lambda^{2}\pi^{2}}(\lambda\pix-4\lambda\pi\sinx+\cosx)+x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31145
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the integral equation

$$
\varphi(x)-\lambda \int_{-\pi}^{\pi}\left(x \cos t+t^{2} \sin x+\cos x \sin t\right) \varphi(t) d t=x
$$
