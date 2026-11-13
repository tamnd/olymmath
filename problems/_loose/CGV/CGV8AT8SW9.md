---
tag: CGV8AT8SW9
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112901
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the following problem: Find the smallest $k \in \mathbf{N}^{\boldsymbol{*}}$, such that for any integer-coefficient polynomial $f(x)$ (with leading coefficient 1) of degree $n > k$, if there are at least $\left[\frac{n}{2}\right]+1$ distinct integers $x$ for which $|f(x)|=1$, then $f(x)$ cannot be factored into the product of two non-constant integer-coefficient polynomials.
