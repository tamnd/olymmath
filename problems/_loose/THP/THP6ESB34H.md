---
tag: THP6ESB34H
kind: problem
type: answer
answer: "127"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265890
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Initially five variables are defined: $a_1=1, a_2=0, a_3=0, a_4=0, a_5=0.$ On a turn, Evan can choose an integer $2 \le i \le 5.$ Then, the integer $a_{i-1}$ will be added to $a_i$. For example, if Evan initially chooses $i = 2,$ then now $a_1=1, a_2=0+1=1, a_3=0, a_4=0, a_5=0.$ Find the minimum number of turns Evan needs to make $a_5$ exceed $1,000,000.$
