---
tag: CQ7WXR1A9P
kind: problem
appearances:
  - at: pumac/2025/aa7
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2025 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2025_Algebra_A.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Let
$$\omega=e^{i\pi/2025}=\cos\left(\frac{\pi}{2025}\right)+i\sin\left(\frac{\pi}{2025}\right).$$
David writes the complex numbers $2,\omega,\omega^2,\dots,\omega^{4049}$ in a line going from left to right on a blackboard. Then, each minute, if the two leftmost complex numbers on the blackboard are $z_1$ and $z_2$, David erases the two numbers and replaces them with
$$\frac{1}{z_1+z_2}-\frac{1}{\frac{1}{z_1}+\frac{1}{z_2}}.$$
After $4049$ minutes, there is only one number remaining. What is the last remaining number?
