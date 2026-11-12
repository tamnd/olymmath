---
tag: 1K6MKQRPSK
kind: problem
type: answer
answer: f(x)=x+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1240
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1997
    source: hf-numinamath-1-5
    label: XLVIII OM - I - Problem 9
---
Determine all functions $ f: \langle 1,\ \infty) \to \langle 1,\ \infty) $ that satisfy the following conditions:

[(i)] $ f(x+1) = \frac{(f(x))^2-1}{x} $ for $ x \geq 1 $;
[(ii)] the function $ g(x)=\frac{f(x)}{x} $ is bounded.
