---
tag: X16JQ4D2NC
kind: problem
type: answer
answer: u(\rho,\varphi,z)=\ln\rho\cdot\operatorname{arctg}z+\rho\cos\varphi+C
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31645
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the potential of the vector field given in cylindrical coordinates: $\mathbf{a}=\left(\frac{\operatorname{arctg} z}{\rho}+\cos \varphi\right) \mathbf{e}_{\rho}-\sin \varphi \mathbf{e}_{\varphi}+\frac{\ln \rho}{1+z^{2}} \mathbf{e}_{z}$.
