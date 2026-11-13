---
tag: TRGP3HM3EX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Bulgaria EGMO TST
    url: https://artofproblemsolving.com/community/c6h3008224
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32937
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231984
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-egmo-tst/2019
    source: hf-ai-mo-aops
    label: 2019 Bulgaria EGMO TST
---
Let $x_1,\ldots,x_n$ be a sequence with each term equal to $0$ or $1$ . Form a triangle as follows: its first row is $x_1,\ldots,x_n$ and if a row if $a_1, a_2, \ldots, a_m$ , then the next row is $a_1 + a_2, a_2 + a_3, \ldots, a_{m-1} + a_m$ where the addition is performed modulo $2$ (so $1+1=0$ ). For example, starting from $1$ , $0$ , $1$ , $0$ , the second row is $1$ , $1$ , $1$ , the third one is $0$ , $0$ and the fourth one is $0$ .

A sequence is called good it is the same as the sequence formed by taking the last element of each row, starting from the last row (so in the above example, the sequence is $1010$ and the corresponding sequence from last terms is $0010$ and they are not equal in this case). How many possibilities are there for the sequence formed by taking the first element of each row, starting from the last row, which arise from a good sequence?
