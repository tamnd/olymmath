---
tag: QYNHD81Q8C
kind: problem
type: answer
answer: 69,412,418
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76052
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Milan wrote down several of the first natural numbers, omitting only the numbers 4, $9,14,19,24,29, \ldots$ Then he inserted the minus and plus signs alternately between the written numbers, so he got the expression

$$
1-2+3-5+6-7+8-10+11-12+13-15+\ldots
$$

Finally, he inserted a left parenthesis after each minus sign and the same number of right parentheses at the end of the expression:

$$
1-(2+3-(5+6-(7+8-(10+11-(12+13-(15+\ldots))))))
$$

The resulting expression had a value of 103. How many numbers were in Milan's expression? (Find all possibilities.)
