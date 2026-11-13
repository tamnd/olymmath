---
tag: BE8RADD4BZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Peru Cono Sur TST
    url: https://artofproblemsolving.com/community/c6h3108641
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50391
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246046
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-conosur-tst/2015
    source: hf-ai-mo-aops
    label: 2015 Peru Cono Sur TST
---
Let $a, b, c$ and $d$ be elements of the set $\{ 1, 2, 3,\ldots , 2014, 2015 \}$ such that $a < b < c < d$ , $a + b$ is a divisor of $c + d$ , and $a + c$ is a divisor of $b + d$ . Determine the largest value that $a$ can take.
