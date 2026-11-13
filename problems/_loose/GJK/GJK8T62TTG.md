---
tag: GJK8T62TTG
kind: problem
type: answer
answer: r_{n}=BC\frac{\sin(\frac{\gamma}{2^{n}})\sin(\frac{\beta}{2^{n}})}{\sin(\frac{\beta+\gamma}{2^{n}})}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82678
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{0}, B, C$ be three non-collinear points in the plane. We denote $A_{1}$ as the center of the incircle of $A_{0} B C$, $A_{2}$ as the center of the incircle of $A_{1} B C$, and so on to construct the points $A_{2}, A_{3}, \ldots$. For an integer $n$, calculate the radius of the incircle of $A_{n} B C$.
