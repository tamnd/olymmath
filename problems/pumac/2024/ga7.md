---
tag: W5WEJAVA35
kind: problem
appearances:
  - at: pumac/2024/ga7
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2024 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2024_Geometry_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
The following is the construction of the twindragon fractal. $I_0$ is the solid square region with vertices at $(0,0)$, $(\frac{1}{2},\frac{1}{2})$, $(1,0)$, $(\frac{1}{2},-\frac{1}{2})$. Recursively, the region $I_{n+1}$ consists of two copies of $I_n$: one copy which is rotated $45^\circ$ counterclockwise around the origin and scaled by a factor of $\frac{1}{\sqrt{2}}$, and another copy which is also rotated $45^\circ$ counterclockwise around the origin and scaled by a factor of $\frac{1}{\sqrt{2}}$ and then translated by $(\frac{1}{2},-\frac{1}{2})$. We have displayed $I_0$ and $I_1$ below. Let $I_\infty$ be the limiting region of $I_0,I_1,\ldots$. The area of the smallest convex polygon which encloses $I_\infty$ can be written as $\frac{a}{b}$ for relatively prime positive integers $a$ and $b$. Find $a+b$.
