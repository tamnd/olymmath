---
tag: PRG29MJ7AJ
kind: problem
type: answer
answer: "51"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220050
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A *mirrored polynomial* is a polynomial $f$ of degree $100$ with real coefficients such that the $x^{50}$ coefficient of $f$ is $1$, and $f(x) = x^{100} f(1/x)$ holds for all real nonzero $x$. Find the smallest real constant $C$ such that any mirrored polynomial $f$ satisfying $f(1) \ge C$ has a complex root $z$ obeying $|z| = 1$.
