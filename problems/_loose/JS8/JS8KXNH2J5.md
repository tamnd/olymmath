---
tag: JS8KXNH2J5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233699
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alex, Bill, and Charlie want to play a game of DotA. They each come online at a uniformly random time between $8:00$ and $8:05\text{ }\text{PM}$, and each person queues for $2$ minutes. However, if any of them sees any other of them online while queuing, they merge parties and restart the queue, again waiting for $2$ minutes starting from the merger time.

For example, suppose that Alex logs in at $8:00\text{ PM}$, Bill logs in at $8:01\text{ PM}$, and Charlie logs in at $8:02:30\text{ PM}$ ($30$ seconds past $8:02\text{ PM}$). At $8:01\text{ PM}$, Alex and Bill would merge parties and queue for $2$ minutes starting at $8:01\text{ PM}$. At $8:02:30\text{ PM}$, Charlie would merge with Alex and Bill's party, since Alex and Bill have waited together for only $1.5$ minutes.

What is the probability that they will play as a party of $3$?
