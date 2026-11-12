---
tag: T34NW6TDBM
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=948
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1970
    source: hf-numinamath-1-5
    label: XXI OM - II - Problem 6
---
If $ A $ is a subset of set $ X $, then we define $ A^1 = A $, $ A^{-1} = X - A $. Subsets $ A_1, A_2, \ldots, A_k $ are called mutually independent if the product $ A_1^{\varepsilon_1} \cap A_2^{\varepsilon_2} \ldots A_k^{\varepsilon_k} $ is non-empty for every system of numbers $ \varepsilon_1, \varepsilon_2, \ldots, \varepsilon_k $, such that $ |\varepsilon_i| = 1 $ for $ i = 1, 2, \ldots, k $.
What is the maximum number of mutually independent subsets of a $ 2^n $-element set?
