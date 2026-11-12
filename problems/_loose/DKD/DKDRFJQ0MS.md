---
tag: DKDRFJQ0MS
kind: problem
type: answer
answer: y(x)=\int_{1}^{x}\sqrt[3]{^{4}+7}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30805
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the Cauchy problem with the differential equation $3 y^{\prime \prime}=4 \frac{x^{3}}{\left(y^{\prime}\right)^{2}}$ and the initial condition $y(1)=0, y^{\prime}(1)=2$. After the substitution $y^{\prime}=p(x)$, we obtain the equation $3 p^{\prime}=4 \frac{x^{3}}{p^{2}}$.
