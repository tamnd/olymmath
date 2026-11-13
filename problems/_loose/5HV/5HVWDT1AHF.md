---
tag: 5HVWDT1AHF
kind: problem
type: answer
answer: \sqrt{2} \left( 1 - e^{-\frac{\pi}{2}} \right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206487
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a parameterized curve $ C: x = e^{ - t}\cos t,\ y = e^{ - t}\sin t\ \left(0\leq t\leq \frac {\pi}{2}\right).$

(1) Find the length $ L$ of $ C$.

(2) Find the area $ S$ of the region bounded by $ C$, the $ x$ axis and $ y$ axis.

You may not use the formula $ \boxed{\int_a^b \frac {1}{2}r(\theta)^2d\theta }$ here.
