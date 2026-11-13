---
tag: VZ1ACS5B88
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239529
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f,g : \mathbb{R} \times \mathbb{R} \mapsto \mathbb{R}^{+}$ such that
$$ ( \sum_{j=1}^{n}a_{j}b_{j})^2 \leq (\sum_{j=1}^{n} f({a_{j},b_{j}))(\sum_{j=1}^{n} g({a_{j},b_{j})) \leq (\sum_{j=1}^{n} (a_j)^2 )(\sum_{j=1}^{n} (b_j)^2 ) }}$$ for any two sets $a_j$ and $b_j$ of real numbers.
