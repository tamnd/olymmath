---
tag: QA4XZ0KTF4
kind: problem
type: answer
answer: 1-\sqrt{1-}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=617
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1970
    source: hf-numinamath-1-5
    label: XXI OM - I - Problem 2
---
Given is the sequence $ \{c_n\} $ defined by the formulas $ c_1=\frac{a}{2} $, $ c_{n+1}=\frac{a+c_n^2}{2} $ where $ a $ is a given number satisfying the inequality $ 0 < a < 1 $. Prove that for every $ n $ the inequality $ c_n < 1 - \sqrt{1 - a} $ holds. Prove the convergence of the sequence $ \{c_n\} $ and calculate its limit.
