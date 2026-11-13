---
tag: HEAMKHWTFY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Lithuania National Olympiad
    url: https://artofproblemsolving.com/community/c6h468990
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5213
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207364
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: lt-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Lithuania National Olympiad
---
Decimal digits $a,b,c$ satisfy
$$ 37\mid (a0a0\ldots a0b0c0c\ldots 0c)_{10} $$
where there are $1001$ a's and $1001$ c's. Prove that $b=a+c$ .
