---
tag: RCMN85REFK
kind: problem
type: answer
answer: f(x,y)=e^{xy}+6xy+C
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30943
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Verify that the expression

$$
y\left(e^{x y}+6\right) d x+x\left(e^{x y}+6\right) d y
$$

is a total differential of some function $f(x, y)$, and find this function.
