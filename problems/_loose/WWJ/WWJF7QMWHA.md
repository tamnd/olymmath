---
tag: WWJF7QMWHA
kind: problem
type: answer
answer: I_{1}\approx0.4969,\quadI_{2}\approx0.7635,\quadI_{3}\approx0.1211
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34368
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Using series, calculate the approximate values of the following integrals with an accuracy of 0.0001:

$$
I_{1}=\int_{0}^{\frac{1}{3}} \frac{d t}{\sqrt{1+t^{2}}} ; I_{2}=\int_{0}^{1} \cos \sqrt{x} d x ; I_{3}=\int_{1}^{1.5} \frac{1}{v} \operatorname{arctg} \frac{v}{4} d v
$$
