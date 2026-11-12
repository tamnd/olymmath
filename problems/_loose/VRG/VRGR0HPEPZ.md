---
tag: VRGR0HPEPZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1946 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1878515
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56595
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26242
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1946
    source: hf-ai-mo-aops
    label: 1946 Moscow Mathematical Olympiad
---
Prove that after completing the multiplication and collecting the terms $$ (1 - x + x^2 - x^3 +... - x^{99} + x^{100})(1 + x + x^2 + ...+ x^{99} + x^{100}) $$ has no monomials of odd degree.
