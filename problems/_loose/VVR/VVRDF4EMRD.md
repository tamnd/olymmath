---
tag: VVRDF4EMRD
kind: problem
type: answer
answer: x>1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96841
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $f(x)$ is an increasing function defined on $\mathbf{R}$, and $f(x) \neq 0, f(x+y)=f(x) \cdot f(y)$,
(1) Prove that $f(x)>0$:
(2) Prove that $f(x-y)=\frac{f(x)}{f(y)}$;
(3) If $f(1)=2$, solve the inequality $f(3 x)>4 f(x)$.
