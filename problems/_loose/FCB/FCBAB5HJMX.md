---
tag: FCBAB5HJMX
kind: problem
type: answer
answer: 25+6(\sqrt{\frac{p}{q}}-\sqrt{\frac{q}{p}})^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100085
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $0<p \leqslant a, b, c, d, e \leqslant q$. Prove that:
$$
(a+b+c+d+e)\left(\frac{1}{a}+\frac{1}{b}+\frac{1}{c}+\frac{1}{d}+\frac{1}{e}\right) \leqslant 25+6\left(\sqrt{\frac{p}{q}}-\sqrt{\frac{q}{p}}\right)^{2},
$$

and determine when equality holds.
(6th USA Olympiad Problem)
