---
tag: TD8A3CPQ46
kind: problem
type: answer
answer: x_c=\frac{5}{8},\quady_c=\frac{5\pi}{128},\quadz_c=H\pi\sqrt{1+\frac{H^{2}}{4\pi^{2}}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30727
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the center of gravity of the arc $AB$:

a) $AB: x^{2 / 3} + y^{2 / 3} = a^{2 / 3}$ (astroid), $A(0, a), B(a, 0)$, the linear density at each point of the arc is equal to its abscissa;

b) $AB: x = \cos t, y = \sin t, z = \frac{H}{2 \pi} t, t_{A} = 0, t_{B} = 2 \pi$ (helical line with pitch $H$), $\rho(x, y) = 1$.
