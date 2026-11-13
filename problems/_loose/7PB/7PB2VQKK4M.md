---
tag: 7PB2VQKK4M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Ukraine National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h387806
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4421
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206602
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/2009
    source: hf-ai-mo-aops
    label: 2009 Ukraine National Mathematical Olympiad
---
Find all polynomials $P(x)$ with real coefficients such that for all pairwise distinct positive integers $x, y, z, t$ with $x^2 + y^2 + z^2 = 2t^2$ and $\gcd(x, y, z, t ) = 1,$ the following equality holds
$$2P^2(t ) + 2P(xy + yz + zx) = P^2(x + y + z) .$$**Note.** $P^2(k)=\left( P(k) \right)^2.$
