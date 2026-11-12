---
tag: 3HYQSGBBSY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24216
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the sides $AB, BC$, and $CA$ of triangle $ABC$ (or on their extensions), points $C_{1}, A_{1}$, and $B_{1}$ are taken.
a) Prove that points $A_{1}, B_{1}$, and $C_{1}$ lie on the same line if and only if

$$
\frac{\overline{A_{1} B}}{\overline{A_{1} C}} \cdot \frac{\overline{B_{1} C}}{\overline{B_{1} A}} \cdot \frac{\overline{C_{1} A}}{\overline{C_{1} B}}=1 \text { (Menelaus' theorem). }
$$

b) Prove that if the lines $A A_{1}, B B_{1}$, and $C C_{1}$ are pairwise non-parallel, then they intersect at one point if and only if

$$
\frac{\overline{A_{1} B}}{\overline{A_{1} C}} \cdot \frac{\overline{B_{1} C}}{\overline{B_{1} A}} \cdot \frac{\overline{C_{1} A}}{\overline{C_{1} B}}=-1 \text { (Ceva's theorem). }
$$

Let rays $l, m$, and $n$ have a common origin and lie in the same plane. Choose a positive direction of rotation in this plane. In this section, we will denote by $\sin (l, m) / \sin (n, m)$ the ratio of the sines of the angles through which the rays $l$ and $n$ must be rotated in the positive direction to coincide with the ray $m$. It is clear that this value does not depend on the choice of the positive direction of rotation in the plane, since changing this choice changes the sign of both the numerator and the denominator.

Let half-planes $\alpha, \beta$, and $\gamma$ have a common boundary. Choose one of the two directions of rotation around this line as the positive direction. In this section, we will denote by $\sin (\alpha, \beta) / \sin (\gamma, \beta)$ the ratio of the sines of the angles through which the half-planes $\alpha$ and $\gamma$ must be rotated in the positive direction to coincide with the half-plane $\beta$. It is clear that this value does not depend on the choice of the positive direction of rotation.
