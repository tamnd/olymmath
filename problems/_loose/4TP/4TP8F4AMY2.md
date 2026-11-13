---
tag: 4TP8F4AMY2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90923
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Every positive integer is either nice or naughty, and the Oracle of Numbers knows which are which. However, the Oracle will not directly tell you whether a number is nice or naughty. The only questions the Oracle will answer are questions of the form "What is the sum of all nice divisors of $n$ ?," where $n$ is a number of the questioner's choice. For instance, suppose (just for this example) that 2 and 3 are nice, while 1 and 6 are naughty. In that case, if you asked the Oracle, "What is the sum of all nice divisors of 6 ?,' the Oracle's answer would be 5.

Show that for any given positive integer $n$ less than 1 million, you can determine whether $n$ is nice or naughty by asking the Oracle at most four questions.
