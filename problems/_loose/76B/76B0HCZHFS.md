---
tag: 76B0HCZHFS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Cuba MO
    url: https://artofproblemsolving.com/community/c6h3399936
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37418
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236082
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cu-mo/2005
    source: hf-ai-mo-aops
    label: 2005 Cuba MO
  - at: ee-mo/2004
    source: hf-ai-mo-aops
    label: 2004 Estonia National Olympiad
---
Determine all triples of positive integers $(x, y, z)$ that satisfy $$ x < y < z, \ \ gcd(x, y) = 6, \ \ gcd(y, z) = 10, \ \ gcd(z, x) = 8 \ \ and \ \
lcm(x, y, z) = 2400. $$
