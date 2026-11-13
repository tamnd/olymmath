---
tag: X3XFVZNK4W
kind: problem
type: answer
answer: \sum_{k=0}^n x^{2k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246833
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate the determinant of the $ n\times n $ complex matrix $ \left(a_j^i\right)_{1\le j\le n}^{1\le i\le n} $ defined by
$$ a_j^i=\left\{\begin{matrix} 1+x^2, i=j\\x, |i-j|=1\\0, |i-j|\ge 2\end{matrix}\right. , $$
where $ n $ is a natural number greater than $ 2. $
