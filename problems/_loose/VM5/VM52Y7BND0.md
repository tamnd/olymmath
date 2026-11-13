---
tag: VM52Y7BND0
kind: problem
type: answer
answer: 2^n \cos^n \left(\frac{a}{2}\right)\sin \left(\frac{na}{2}\right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239074
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Evaluate the following sum: $n \choose 1$ $\sin (a) +$ $n \choose 2$ $\sin (2a) +...+$ $n \choose n$ $\sin (na)$

(A) $2^n \cos^n \left(\frac{a}{2}\right)\sin \left(\frac{na}{2}\right)$

(B) $2^n \sin^n \left(\frac{a}{2}\right)\cos \left(\frac{na}{2}\right)$

(C) $2^n \sin^n \left(\frac{a}{2}\right)\sin \left(\frac{na}{2}\right)$

(D) $2^n \cos^n \left(\frac{a}{2}\right)\cos \left(\frac{na}{2}\right)$
