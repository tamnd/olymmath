---
tag: YC03R0ZH1H
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31559
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Evaluate the double integral

$$
\iint_{D} \frac{x}{y^{5}} d x d y
$$

where the region $D$ is defined by the inequalities

$$
1 \leq \frac{x^{2}}{16}+y^{2} \leq 3, y \geq \frac{x}{4}, x \geq 0
$$
