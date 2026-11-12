---
tag: R95DPCV36G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1716
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1976
    source: hf-numinamath-1-5
    label: XXVII OM - I - Problem 5
---
We consider the following two-player game: The first player draws a token with a natural number written on it (let's call it $ n $) and subtracts from it a proper divisor $ d $ of that number (i.e., a divisor satisfying the inequality $ 1 \leq d < n $). The second player proceeds similarly with the difference $ n - d $, i.e., subtracts a proper divisor of this difference, and then passes the resulting number to the first player. This process is continued. The player who receives the number 1 from their partner loses. Which of the players can ensure their victory if the first player draws
a) a token with the number 1975,
b) a token with the number 1976?
