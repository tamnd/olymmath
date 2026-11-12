---
tag: 2FTQRRYY8D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=11708
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the game "set," all possible four-digit numbers consisting of the digits $1,2,3$ (each digit appearing exactly once) are used. It is said that a triplet of numbers forms a set if, in each digit place, either all three numbers contain the same digit or all three numbers contain different digits. The complexity of a set is defined as the number of digit places where all three digits are different. For example, the numbers 1232, 2213, 3221 form a set of complexity 3 (in the first place, all three digits are different, in the second place, only the digit 2 appears, in the third place, all three digits are different, and in the fourth place, all three digits are different); the numbers $1231,1232,1233$ form a set of complexity 1 (in the first three places, the digits are the same, and only in the fourth place are all digits different). The numbers 1123, 2231, 3311 do not form a set at all (in the last place, two ones and a three appear).

Which sets have the highest complexity in the game, and why?
