---
tag: 2GFN5C5BJ9
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4236
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(12 points) The sequence of functions is defined by the formulas

$$
f_{0}(x)=3 \sin x, f_{n+1}(x)=\frac{9}{3-f_{n}(x)}
$$

for any integer $n \geq 0$. Find $f_{2023}\left(\frac{\pi}{6}\right)$.
