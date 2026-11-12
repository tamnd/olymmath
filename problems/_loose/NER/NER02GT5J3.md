---
tag: NER02GT5J3
kind: problem
type: answer
answer: \frac{\ln^{2}y}{2}=\operatorname{ctg}x-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30333
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find a particular integral of the equation

$$
y^{\prime} \sin ^{2} x \ln y+y=0,
$$

satisfying the initial conditions $y \left(\frac{\pi}{4}\right)=1$.
