---
tag: Z171ZWDVTC
kind: problem
type: answer
answer: binom(2014*2015,2014) - 2*binom(2014*2015,2013) + binom(2014*2015,2012)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Find the number of words using $2014$ letters $a$ and $2014^2$ letters $b$ with the following properties:
i) Among the first $k$ letters of the word, number of $b$'s is not less than number of $a$'s for any $k$ satisfying the condition $i \le k \le 2014 \cdot 2015$;
ii) Among the last $k$ letters of the word, number of $b$'s is not less than number of $a$'s for any $k$ satisfying the condition $i \le k \le 2014 \cdot 2015$.
