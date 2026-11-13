---
tag: 7R8XQA9NYG
kind: problem
type: answer
answer: \frac{x^3 - x^2 - 1}{2x^2 - 2x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236989
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A function $f$ satisfies the equation
$$f\left(x\right)+f\left(1-\frac{1}{x}\right)=1+x$$
for every real number $x$ except for $x = 0$ and $x = 1$. Find a closed formula for $f$.
