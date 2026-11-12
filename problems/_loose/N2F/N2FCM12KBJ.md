---
tag: N2FCM12KBJ
kind: problem
type: answer
answer: -2\piR^{2}H^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31637
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the surface integral

$$
I=\int_{\Sigma}\left(\varphi \frac{\partial \psi}{\partial n}-\psi \frac{\partial \varphi}{\partial n}\right) d \sigma
$$

taken over the surface $\Sigma: x^{2}+y^{2}=R^{2}, z=0, z=H(H>0)$, if $\varphi=x^{2}+y^{2}+x+z, \psi=x^{2}+y^{2}+2 z+x$.
