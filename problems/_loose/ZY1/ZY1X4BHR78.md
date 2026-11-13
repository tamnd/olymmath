---
tag: ZY1X4BHR78
kind: problem
type: answer
answer: \operatorname{tg}\alpha=\frac{4n}{(n^{2}-1)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=174404
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the right-angled triangle $ABC$, the hypotenuse $BC=a$ is divided into $n$ equal segments, where $n$ is an arbitrary odd natural number. Let $h$ denote the height corresponding to the hypotenuse, and $\alpha$ the angle under which the segment containing the midpoint of the hypotenuse is seen from vertex $A$. Prove that

$$
\operatorname{tg} \alpha=4 n h /\left(n^{2}-1\right) a
$$
