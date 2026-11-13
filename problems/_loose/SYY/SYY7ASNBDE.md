---
tag: SYY7ASNBDE
kind: problem
type: answer
answer: "2010"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233340
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ f (n) $ be a function that fulfills the following properties:

$\bullet$ For each natural $ n $, $ f (n) $ is an integer greater than or equal to $ 0 $.
$\bullet$ $f (n) = 2010 $, if $ n $ ends in $ 7 $. For example, $ f (137) = 2010 $.
$\bullet$ If $ a $ is a divisor of $ b $, then: $ f \left(\frac {b} {a} \right) = | f (b) -f (a) | $.

Find $ f (2009 ^ {2009 ^ {2009}}) $ and justify your answer.
