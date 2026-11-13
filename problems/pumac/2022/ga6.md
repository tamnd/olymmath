---
tag: G1ST4JEBCR
kind: problem
appearances:
  - at: pumac/2022/ga6
    primary: true
  - at: pumac/2022/gb8
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Geometry_A_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Triangle $\triangle ABC$ has sidelengths $AB=10$, $AC=14$, and, $BC=16$. Circle $\omega_1$ is tangent to rays $\overrightarrow{AB}$, $\overrightarrow{AC}$ and passes through $B$. Circle $\omega_2$ is tangent to rays $\overrightarrow{AB}$, $\overrightarrow{AC}$ and passes through $C$. Let $\omega_1$, $\omega_2$ intersect at points $X,Y$. The square of the perimeter of triangle $\triangle AXY$ is equal to $\frac{a+b\sqrt{c}}{d}$, where $a$, $b$, $c$, and, $d$ are positive integers such that $a$ and $d$ are relatively prime, and $c$ is not divisible by the square of any prime. Find $a+b+c+d$.
