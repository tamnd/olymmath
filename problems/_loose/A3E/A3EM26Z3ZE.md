---
tag: A3EM26Z3ZE
kind: problem
type: answer
answer: "2007"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5060
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
First solution: It is known that $n \equiv$ the sum of the digits of the number $n(\bmod 9), 5 n \equiv$ the sum of the digits of the number $5 n(\bmod 9)=$ the sum of the digits of $n(\bmod 9)$. Then $4 n \equiv 0($ $\bmod 9)$. Therefore, $n$ is divisible by 9 and $n \leqslant 2015$, i.e., $n=2007$.

Second solution: Since $2015 \cdot 5=10075$, the sum of the digits of the numbers 2015 and 10075 do not match. Similarly for the numbers 2014, 2013, 2012, 2011, 2010, 2009, 2008. Since $2007 \cdot 5=10035$, the number 2007 has the property that the sum of the digits of the numbers 2007 and $2007 \cdot 5$ match.
