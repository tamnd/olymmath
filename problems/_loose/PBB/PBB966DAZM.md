---
tag: PBB966DAZM
kind: problem
type: answer
answer: \ln \left( \frac{(e - e^{-1}) (\sqrt{\frac{4}{(e - e^{-1})^2} + 1} + 1)}{2} \right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206442
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ a,\ b$ are postive constant numbers.

(1) Differentiate $ \ln (x+\sqrt{x^2+a})\ (x>0).$

(2) For $ a=\frac{4b^2}{(e-e^{-1})^2}$, evaluate $ \int_0^b \frac{1}{\sqrt{x^2+a}}\ dx.$
