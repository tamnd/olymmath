---
tag: RD4K72RRRX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h250364
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40030
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237033
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2007
    source: hf-ai-mo-aops
    label: 2007 Germany Team Selection Test
---
Let $ k \in \mathbb{N}$ . A polynomial is called *$ k$ -valid* if all its coefficients are integers between 0 and $ k$ inclusively. (Here we don't consider 0 to be a natural number.)

**a.)** For $ n \in \mathbb{N}$ let $ a_n$ be the number of 5-valid polynomials $ p$ which satisfy $ p(3) = n.$ Prove that each natural number occurs in the sequence $ (a_n)_n$ at least once but only finitely often.

**b.)** For $ n \in \mathbb{N}$ let $ a_n$ be the number of 4-valid polynomials $ p$ which satisfy $ p(3) = n.$ Prove that each natural number occurs infinitely often in the sequence $ (a_n)_n$ .
