---
tag: BTS6F4FX3M
kind: problem
type: answer
answer: "68"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=11703
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many numbers from 1 to 999 without the digit "0" are written in the Roman numeral system exactly one symbol longer than in the decimal system?

(P. D. Mulyenko)

Reference. To write a number in Roman numerals, you need to break it down into place value addends, write each place value addend according to the table, and then write them sequentially from the largest to the smallest. For example, let's write the number 899. According to the table, $800 = \text{DCCC}$, $90 = \text{XC}$, $9 = \text{IX}$, we get DCCCXCIX.

| 1 I | $10 \text{X}$ | $100 \text{C}$ | $1000 \text{M}$ |
| :--- | :--- | :--- | :--- |
| $2 \text{II}$ | $20 \text{XX}$ | $200 \text{CC}$ | $2000 \text{MM}$ |
| 3 III | $30 \text{XXX}$ | $300 \text{CCC}$ | $3000 \text{MMM}$ |
| $4 \text{IV}$ | $40 \text{XL}$ | $400 \text{CD}$ | |
| 5 V | $50 \text{L}$ | $500 \text{D}$ | |
| $6 \text{VI}$ | $60 \text{LX}$ | $600 \text{DC}$ | |
| $7 \text{VII}$ | $70 \text{LXX}$ | $700 \text{DCC}$ | |
| $8 \text{VIII}$ | $80 \text{LXXX}$ | $800 \text{DCCC}$ | |
| 9 IX | $90 \text{XC}$ | $900 \text{CM}$ | |
