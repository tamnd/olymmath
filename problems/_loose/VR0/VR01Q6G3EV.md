---
tag: VR01Q6G3EV
kind: problem
type: answer
answer: p!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205753
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number and $\mathbf{W}\subseteq \mathbb{F}_p[x]$ be the smallest set satisfying the following :

(a) $x+1\in \mathbf{W}$ and $x^{p-2}+x^{p-3}+\cdots +x^2+2x+1\in \mathbf{W}$
(b) For $\gamma_1,\gamma_2$ in $\mathbf{W}$, we also have $\gamma(x)\in \mathbf{W}$, where $\gamma(x)$ is the remainder $(\gamma_1\circ \gamma_2)(x)\pmod {x^p-x}$.

How many polynomials are in $\mathbf{W}?$
