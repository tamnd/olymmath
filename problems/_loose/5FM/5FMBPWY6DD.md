---
tag: 5FMBPWY6DD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1956 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1899559
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56823
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249720
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1956
    source: hf-ai-mo-aops
    label: 1956 Moscow Mathematical Olympiad
---
a) $100$ numbers (some positive, some negative) are written in a row. All of the following three types of numbers are underlined: 1) every positive number, 2) every number whose sum with the number following it is positive, 3) every number whose sum with the two numbers following it is positive.
Can the sum of all underlined numbers be
(i) negative?
(ii) equal to zero?

b) $n$ numbers (some positive and some negative) are written in a row. Each positive number and each number whose sum with several of the numbers following it is positive is underlined. Prove that the sum of all underlined numbers is positive.
