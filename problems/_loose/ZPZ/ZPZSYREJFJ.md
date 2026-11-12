---
tag: ZPZSYREJFJ
kind: problem
type: answer
answer: \frac{3}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=11342
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's switch to a reference frame falling with acceleration $g$ and zero initial velocity. The time count starts at the moment the apple is thrown. In the specified reference frame, both the apple and the arrow move uniformly and rectilinearly due to the law of acceleration addition. Therefore, the point where the arrow hits the apple is the third vertex $C$ of a triangle with base $A B$ and angles $\alpha$ and $\beta$. The length $A C$ can be found using the sine rule: $A C = L \frac{\sin \beta}{\sin (\alpha + \beta)}$. The desired time $T = \frac{A C}{V_{0}} = \frac{L}{V_{0}} \frac{\sin \beta}{\sin (\alpha + \beta)} = \frac{3}{4} \text{s}$.
