---
tag: TJXCRRA556
kind: problem
type: answer
answer: 2000=47+48+\cdots+78=68+69+\cdots+92=398+399+400+401+402
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142568
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Arrange the numbers that can be expressed as the sum of $m$ consecutive positive integers ($m>1$) in ascending order to form a sequence, denoted as $\{a(m, n)\}$, where $a(m, n)$ represents the $n$-th number (in ascending order) that can be expressed as the sum of $m$ consecutive positive integers.
（1）Write down $a(2,1), a(2,2), a(2,3), a(2,4)$;
（2）Find the analytical expression for $a(m, n)$;
（3）Can 2000 be expressed as the sum of several consecutive positive integers? If yes, find all the solutions; if not, provide the reason.
