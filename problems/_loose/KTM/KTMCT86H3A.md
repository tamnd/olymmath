---
tag: KTMCT86H3A
kind: problem
type: answer
answer: "60"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12246
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia XL Russian mathematical olympiad
---
On the board, the expression $\frac{a}{b} \cdot \frac{c}{d} \cdot \frac{e}{f}$ is written, where $a, b, c, d, e, f$ are natural numbers. If the number $a$ is increased by 1, then the value of this expression increases by 3. If in the original expression the number $c$ is increased by 1, then its value increases by 4; if in the original expression the number $e$ is increased by 1, then its value increases by 5. What is the smallest value that the product $b d f$ can have?

(N. Agakhanov)
