---
tag: NRN59TX1G4
kind: problem
type: answer
answer: All solutions are f(x) = C · sin x for an arbitrary real constant C.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all the functions $f : [-\frac{\pi}{2}; \frac{\pi}{2}] \to \mathbb{R}$ such that:
a. $f$ is differentiable on $[-\frac{\pi}{2}, \frac{\pi}{2}]$;
b. there exists an antiderivative $F$ of $f$ such that $F(x) + f'(x) \le 0, \forall x \in [-\frac{\pi}{2}, \frac{\pi}{2}]$ and $F(-\frac{\pi}{2}) = F(\frac{\pi}{2}) = 0$.
