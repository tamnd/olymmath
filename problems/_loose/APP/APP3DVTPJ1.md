---
tag: APP3DVTPJ1
kind: problem
type: answer
answer: r_{n}=2n\cdotd_{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80157
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A, B$ and $C$ be three points on a line, and let $\Gamma_{1}$ and $\Gamma_{2}$ be the circles with diameters $[A B]$ and $[A C]$. Let $\omega_{0}$ be the circle with diameter $[B C]$. We then denote $\omega_{n}$ as the circle tangent to $\Gamma_{1}, \Gamma_{2}$, and $\omega_{n-1}$ that is not $\omega_{n-2}$. Let $r_{n}$ be the radius of $\omega_{n}$ and $d_{n}$ be the distance from the center of $\omega_{n}$ to $(A C)$. Show that $r_{n}=2 n \cdot d_{n}$.
