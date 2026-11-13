---
tag: HVZX8WVSWH
kind: problem
type: answer
answer: x\in\langle1,2^{2014}]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all real numbers $x$ for which

$$
\frac{1}{\log _{x} 2 \cdot \log _{x} 4}+\frac{1}{\log _{x} 4 \cdot \log _{x} 8}+\ldots+\frac{1}{\log _{x} 2^{2013} \cdot \log _{x} 2^{2014}} \leq 2013 \log _{2} x
$$
