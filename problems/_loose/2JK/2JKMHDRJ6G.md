---
tag: 2JKMHDRJ6G
kind: problem
type: answer
answer: 2^{2021}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146016
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Computers convert information into binary numbers for processing. Binary is "carry one when two is reached", for example, the binary number 10011 is converted to a decimal number as $1 \times 2^{4}+0 \times 2^{3}+0 \times 2^{2}+1 \times 2^{1}+1 \times 2^{0}=19$, so the binary number $\underbrace{(111 \cdots 111)_{2}}_{2021 \uparrow 1}$ converted to a decimal number is ( ).
A. $2^{2021}$
B. $2^{2021}+1$
C. $2^{2022}-1$
D. $2^{2021}-1$
