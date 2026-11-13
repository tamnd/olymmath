---
tag: 8260ZVEPVZ
kind: problem
type: answer
answer: \cos\alpha+\cos\beta+\cos\gamma=1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given real numbers $\alpha, \beta, \gamma$ satisfy $\alpha+\beta+\gamma=\pi$, and
$$
\tan \frac{\beta+\gamma-\alpha}{4}+\tan \frac{\gamma+\alpha-\beta}{4}+\tan \frac{\alpha+\beta-\gamma}{4}=1 .
$$

Prove: $\cos \alpha+\cos \beta+\cos \gamma=1$.
