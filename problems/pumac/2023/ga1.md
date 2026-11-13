---
tag: SAVPAT77VW
kind: problem
appearances:
  - at: pumac/2023/ga1
    primary: true
  - at: pumac/2023/gb3
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Geometry_A_2023.pdf
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268555
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a common chord between two intersecting circles to be the line segment connecting their two intersection points. Let $\omega_1$, $\omega_2$, $\omega_3$ be three circles of radii 3, 5, and 7, respectively. Suppose they are arranged in such a way that the common chord of $\omega_1$ and $\omega_2$ is a diameter of $\omega_1$, the common chord of $\omega_1$ and $\omega_3$ is a diameter of $\omega_1$, and the common chord of $\omega_2$ and $\omega_3$ is a diameter of $\omega_2$. Compute the square of the area of the triangle formed by the centers of the three circles.
