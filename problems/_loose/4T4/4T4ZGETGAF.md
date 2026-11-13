---
tag: 4T4ZGETGAF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1955 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1898353
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56797
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249695
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1955
    source: hf-ai-mo-aops
    label: 1955 Moscow Mathematical Olympiad
---
Let the inequality $$ Aa(Bb + Cc) + Bb(Aa + Cc) + Cc(Aa + Bb) > \frac{ABc^2 + BCa^2 + CAb^2}{2} $$
with given $a > 0, b > 0, c > 0$ hold for all $A > 0, B > 0, C > 0$ . Is it possible to construct a triangle with sides of lengths $a, b, c$ ?
