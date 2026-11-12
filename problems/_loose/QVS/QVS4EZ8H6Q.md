---
tag: QVS4EZ8H6Q
kind: problem
type: answer
answer: x()=2e^{3}-4e^{-}-2e^{}+5-3,\quady()=-4+6+4e^{-}+2e^{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the Cauchy problem

$$
\begin{cases}x^{\prime}=x+2 y-9 t, & x(0)=1 \\ y^{\prime}=2 x+y+4 e^{t}, & y(0)=2\end{cases}
$$
