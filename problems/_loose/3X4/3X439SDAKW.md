---
tag: 3X439SDAKW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29151
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Jury, PNR, 77). Prove that if the function $f(x, y)$, defined on the set of all pairs of rational numbers and taking only positive values, satisfies the three identities

$$
\begin{aligned}
f(x y, z) & \equiv f(x, z) f(y, z) \\
f(z, x y) & \equiv f(z, x) f(z, y) \\
f(x, 1-x) & \equiv 1, x, y, z \in \mathbf{Q}
\end{aligned}
$$

then the identities

$$
f(x, x) \equiv 1, f(x,-x) \equiv 1, f(x, y) f(y, x) \equiv 1, x, y \in \mathbf{Q}
$$

hold.
