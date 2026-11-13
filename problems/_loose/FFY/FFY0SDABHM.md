---
tag: FFY0SDABHM
kind: problem
type: answer
answer: "40"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90724
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0008.parquet#row=127
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Aerith timed how long it took herself to solve a BMC monthly contest. She writes down the elapsed time as days:hours:minutes:seconds, and also simply as seconds. For example, if she spent 1,000,000 seconds, she would write down 11:13:46:40 and $1,000,000$.

Bob sees her numbers and subtracts them, ignoring punctuation; in this case he would get

$$
11134640-1000000=10134640 .
$$

What is the largest number that always must divide his result?
