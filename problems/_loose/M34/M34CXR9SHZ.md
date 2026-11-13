---
tag: M34CXR9SHZ
kind: problem
type: answer
answer: f(x) = x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=413
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all non-constant functions $f : \mathbb{R} \to \mathbb{R}$ such that:
(i) $f(x)f(x+y) = f(x)^2 + x \cdot f_{2025}(y)$ for all $x, y \in \mathbb{R}$,
(ii) $f_{2025}(\cos x) + f_{2025}(\cos(\pi - x)) = 0$ for all $x \in \mathbb{R}$.
with $f_n(x) = f(f(\ldots(f(x))\ldots))$ is the composition $n$ times of the function $f$.
