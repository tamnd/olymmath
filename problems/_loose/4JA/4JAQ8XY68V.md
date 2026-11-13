---
tag: 4JAQ8XY68V
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190214
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Inside the triangle $ABC$, a point $M$ is chosen arbitrarily. Let $M_{1}, M_{2}, M_{3}$ be the projections of $M$ onto the sides $a, b, c$ of the triangle, respectively, and let $M_{a}, M_{b}, M_{c}$ be the projections of $M$ onto the altitudes $h_{a}, h_{b}, h_{c}$ of the triangle, respectively. Prove that

$$
\frac{\overline{A M_{a}}}{\overline{M M_{1}}}+\frac{\overline{B M_{b}}}{\overline{M M_{2}}}+\frac{\overline{C M_{c}}}{\overline{M M_{3}}} \geq 6
$$