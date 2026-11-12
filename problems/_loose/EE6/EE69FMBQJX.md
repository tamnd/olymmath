---
tag: EE69FMBQJX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24217
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a trihedral angle with vertex $S$ and edges $a, b$, and $c$. The rays $\alpha, \beta$, and $\gamma$ starting from point $S$ are located in the planes of the faces opposite to the edges $a, b$, and $c$ respectively.

a) Prove that the rays $\alpha, \beta$, and $\gamma$ lie in the same plane if and only if

$$
\begin{gathered}
\frac{\sin (a, \gamma)}{\sin (b, \gamma)} \cdot \frac{\sin (b, \alpha)}{\sin (c, \alpha)} \cdot \frac{\sin (c, \beta)}{\sin (a, \beta)}=1 \\
\text { (first theorem of Menelaus). }
\end{gathered}
$$

b) Prove that the planes passing through the pairs of rays $a$ and $\alpha, b$ and $\beta, c$ and $\gamma$, intersect along one line if and only if

$$
\begin{aligned}
& \frac{\sin (a, \gamma)}{\sin (b, \gamma)} \cdot \frac{\sin (b, \alpha)}{\sin (c, \alpha)} \cdot \frac{\sin (c, \beta)}{\sin (a, \beta)}=-1 \\
& \text { (first theorem of Ceva). }
\end{aligned}
$$
