---
tag: XRM7SQYKJY
kind: problem
type: answer
answer: a = 3, b = \frac{1}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206445
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(1) Evaluate $ \int_1^{3\sqrt{3}} \left(\frac{1}{\sqrt[3]{x^2}}-\frac{1}{1+\sqrt[3]{x^2}}\right)\ dx.$

(2) Find the positive real numbers $ a,\ b$ such that for $ t>1,$ $ \lim_{t\rightarrow \infty} \left(\int_1^t \frac{1}{1+\sqrt[3]{x^2}}\ dx-at^b\right)$ converges.
