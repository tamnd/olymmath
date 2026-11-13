---
tag: YGRZWC7HKR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h360925
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5102
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207244
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Iran MO (3rd Round)
---
suppose that $a=3^{100}$ and $b=5454$ . how many $z$ s in $[1,3^{99})$ exist such that for every $c$ that $gcd(c,3)=1$ , two equations $x^z\equiv c$ and $x^b\equiv c$ (mod $a$ ) have the same number of answers?( $\frac{100}{6}$ points)
