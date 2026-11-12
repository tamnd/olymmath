---
tag: MP0V68VDP1
kind: problem
type: answer
answer: f(x)=(1-x)^3,(x)=(x-1)^3+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=16875
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given various polynomials $f(x)$ and $g(x)$ of degree 3. It turns out that the polynomials $f(f(x))$ and $(g(x))^{3}$ are equal, as well as the polynomials $f(g(x))$ and $(f(x))^{3}$. Additionally, $f(0)=1$. Find all such pairs of polynomials $f, g$.
