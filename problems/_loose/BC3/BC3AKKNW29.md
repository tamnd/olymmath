---
tag: BC3AKKNW29
kind: problem
type: answer
answer: u(x,)=\sum_{n=1}^{+\infty}(\alpha_{n}\cos\frac{\pi}{}+\beta_{n}\sin\frac{\pi}{})\sin\frac{n\pix}{}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34401
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the particular solution $u(x, t)$ of the differential equation $\frac{\partial^{2} u}{\partial t^{2}}-a^{2} \frac{\partial^{2} u}{\partial x^{2}}=0$, satisfying the boundary conditions:

$\begin{array}{ll}\text { 1) } u(0, t)=0, & \text { 2) } u(l, t)=0,\end{array}$
3) $u(x, 0)=\varphi_{1}(x)$
4) $u_{t}(x, 0)=\varphi_{2}(x)$.
