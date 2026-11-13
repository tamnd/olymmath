---
tag: JBAMV1FX0N
kind: problem
type: answer
answer: f(x) = x^2 + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
Find all functions $f : \mathbb{R} \to \mathbb{R}$ that satisfy
$$
f(y^2f(x) - f(xy)) = f(y^2) + 2(x^2 - f(x))(f(y) - 1) + 1
$$
for all real numbers $x$ and $y$.
