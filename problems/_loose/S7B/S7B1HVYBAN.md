---
tag: S7B1HVYBAN
kind: problem
type: answer
answer: f(x) = \frac{1}{2} \text{ for all } x \in \mathbb{R}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268062
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{R}\to\mathbb{R}$ satisfying:

$\frac{f(xy)+f(xz)}{2} - f(x)f(yz) \geq \frac{1}{4}$ for all $x,y,z \in \mathbb{R}$
