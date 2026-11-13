---
tag: N1G9F8K7CY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235723
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $n$ is "*olympic*" if there are $n$ non-negative integers $x_1, x_2, ..., x_n$ that satisfy that:
$\bullet$ There is at least one positive integer $j$: $1 \le j \le n$ such that $x_j \ne 0$.
$\bullet$ For any way of choosing $n$ numbers $c_1, c_2, ..., c_n$ from the set $\{-1, 0, 1\}$, where not all $c_i$ are equal to zero, it is true that the sum $c_1x_1 + c_2x_2 +... + c_nx_n$ is not divisible by $n^3$.
Find the largest positive "olympic" integer.
