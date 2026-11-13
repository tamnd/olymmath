---
tag: D2CJ85RP7G
kind: problem
type: answer
answer: (-1)^{n-1}(n-1)2^{n-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=259644
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $D_n$ be the determinant of order $n$ of which the element in the $i$-th row and the $j$-th
column is $|i-j|.$ Show that $D_n$ is equal to
$$(-1)^{n-1}(n-1)2^{n-2}.$$
