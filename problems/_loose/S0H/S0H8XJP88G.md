---
tag: S0H8XJP88G
kind: problem
type: answer
answer: (f ∘ s)'(0) = (1/2) f'(0); if f'(0) ≠ 0 then s'(0) = 1/2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=263
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f : [0, 1] \to \mathbb{R}$ be a function which is continuous on $[0, 1]$ and differentiable in $0$. Consider the function $s : [0, 1] \to \mathbb{R}$,
$$
s(x) = \sup\{c \in [0; x] \mid \int_{0}^{x} f(t) dt = x f(c)\}.
$$
a) Prove that the function $f \circ s$ is differentiable in $0$ and $(f \circ s)'(0) = \frac{1}{2} f'(0)$.

b) If $f'(0) \neq 0$, prove that $s$ is differentiable in $0$ and $s'(0) = \frac{1}{2}$.
