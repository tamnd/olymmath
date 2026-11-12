---
tag: TMJG7AAWA6
kind: problem
type: answer
answer: y_{4}=\frac{x^{4}}{12}-\frac{5}{36x^{2}}-x+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31334
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find a particular solution of the differential equation

$$
x^{4} \cdot y^{\prime \prime \prime}-2 x^{3} \cdot y^{\prime \prime}=\frac{5}{x}
$$

satisfying the initial conditions $y(1)=-\frac{1}{18}, y^{\prime}(1)=-\frac{7}{18}$, $y^{\prime \prime}(1)=\frac{1}{6}$.
