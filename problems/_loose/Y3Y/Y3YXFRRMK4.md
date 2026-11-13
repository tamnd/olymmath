---
tag: Y3YXFRRMK4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that if the numbers $u, t ; p, q, r, s ; x, y, z$ are calculated from the integers $f, g, h, k$ using the following formulas:

$$
\begin{gathered}
u=f\left(f^{2}+3 g^{2}\right)-h\left(h^{2}+3 k^{2}\right), t=3 k\left(h^{2}+3 k^{2}\right)-3 g\left(f^{2}+3 g^{2}\right) \\
p=f t+3 g u, q=g t-f u, r=k t-h u, s=h t+3 k u \\
x=p+q, y=p-q, z=r-s
\end{gathered}
$$

then $x^{3}+y^{3}+z^{3}$ is a cube of an integer.
