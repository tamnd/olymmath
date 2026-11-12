---
tag: GA427J4NZF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=971
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1978
    source: hf-numinamath-1-5
    label: XXIX OM - I - Problem 11
---
Let $ f: \mathbb{R} \to \mathbb{R} $ be a continuous function for which there exists a number $ x $ satisfying the conditions: $ f(f(f(x))) = x $, $ f(x) \neq x $.
Prove that there exist numbers $ y_1 $, $ y_2 $, $ y_3 $ such that $ y_i \neq y_j $ for $ i \neq j $ and $ f(f(y_k))=y_k $ for $ k = 1, 2, 3 $.
Note. It is known that every continuous function $ g: \mathbb{R} \to \mathbb{R} $ has the Darboux property, meaning if $ a < b $ and $ d $ is between $ g(a) $ and $ g(b) $, then there exists a number $ c \in [a, b] $ such that $ g(c) = d $.
