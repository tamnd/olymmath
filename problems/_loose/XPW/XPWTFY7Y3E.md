---
tag: XPWTFY7Y3E
kind: problem
type: answer
answer: "10003"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2013
    source: hf-mathnet
    label: Belarus BelarusMO 2013_s
---
A code lock has 10 keys labeled by digits from 0 to 9. The lock is opened by entering a code of 4 keys that are not necessarily different. It is opened as soon as the correct keys are pressed consequently, no matter what keys have been pressed earlier. For example, if the code happens to be $2002$, the sequence $45677892002$ will open the lock, but the sequence $20202$ will not.
What is the minimal length of a sequence that will guarantee opening the lock regardless of what code is?
