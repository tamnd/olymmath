---
tag: Y2M02SVZSJ
kind: problem
type: answer
answer: p(P(x))=x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167642
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the polynomials $p(x)=a x^{2}+b x+c$ and $P(x)=A x^{2}+B x+C$, we know that for any number $x$, substituting $p(x)$ into the polynomial $P$ results in $P(p(x))=x$. What is $p(P(x))$ equal to?
