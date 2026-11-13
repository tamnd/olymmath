---
tag: 7G8NNDRNTA
kind: problem
type: answer
answer: "84"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181438
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a digital clock and the numbers formed by the four digits (hours and minutes): 10:45 will indicate the number 1045. What is the smallest positive integer that does not divide any of the numbers that appear between 11:00 and 12:59?
(a) Find all positive integers $ n $ of two digits that have the following property: both integers obtained by deleting one of the two digits of the decimal representation of $ n $ are divisors (positive integers) of $ n $.

(b) Let $ n > 10 $ be an integer written with $ k $ decimal digits, all different from zero. Suppose that each of the integers obtained by deleting one of the $ k $ digits of the decimal representation of $ n $ is a divisor (positive integer) of $ n $. Show that necessarily $ k = 2 $.

Example. For $ n = 123 $ we have $ k = 3 $, and the integers obtained by deleting digits of $ n $ are 23, 13, 12.
