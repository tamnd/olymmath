---
tag: 1EWTKSX95F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Brazil National Olympiad
    url: https://artofproblemsolving.com/community/c6h2776114
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32456
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231573
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm/2021
    source: hf-ai-mo-aops
    label: 2021 Brazil National Olympiad
---
In a school there are $2021$ doors with the numbers $1,2,\dots,2021$ . In a day $2021$ students play the following game: Initially all the doors are closed, and each student receive a card to define the order, there are exactly $2021$ cards. The numbers in the cards are $1,2,\dots,2020,2021$ .
The order will be student $1$ first, student $2$ will be the second, and going on. The student $k$ will change the state of the doors $k,2k,4k,8k,\dots,2^pk$ with $2^pk\leq 2021\leq 2^{p+1}k$ . Change the state is **if the door was close, it will be open and vice versa.**
a) After the round of the student $16$ , determine the configuration of the doors $1,2,\dots,16$ b) After the round of the student $2021$ , determine how many doors are closed.
