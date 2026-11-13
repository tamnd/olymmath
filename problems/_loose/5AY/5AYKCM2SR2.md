---
tag: 5AYKCM2SR2
kind: problem
type: answer
answer: \det(A + B) = \det(B)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206972
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the matrix $ A,B\in \mathcal l{M}_3(\mathbb{C})$ with $ A=-^tA$ and $ B=^tB$. Prove that if the polinomial function defined by

$$ f(x)=\det(A+xB)$$

has a multiple root, then $ \det(A+B)=\det B$.
