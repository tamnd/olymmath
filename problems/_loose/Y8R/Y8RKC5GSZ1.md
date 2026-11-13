---
tag: Y8RKC5GSZ1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Vietnam Team Selection Test
    url: https://artofproblemsolving.com/community/c6h141711
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=79431
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-tst/2000
    source: hf-ai-mo-aops
    label: 2000 Vietnam Team Selection Test
---
Let $a, b, c$ be pairwise coprime natural numbers. A positive integer $n$ is said to be *stubborn* if it cannot be written in the form
$n = bcx+cay+abz$ , for some $x, y, z \in\mathbb{ N}.$ Determine the number of stubborn numbers.
