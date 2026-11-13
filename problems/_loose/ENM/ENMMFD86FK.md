---
tag: ENMMFD86FK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252875
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sunny wants to send some secret message to usjl. The secret message is a three digit number, where each digit is one digit from $0$ to $9$ (so $000$ is also possibly the secret message). However, when Sunny sends the message to usjl, at most one digit might be altered. Therefore, Sunny decides to send usjl a longer message so that usjl can decipher the message to get the original secret message Sunny wants to send. Sunny and usjl can communicate the strategy beforehand. Show that sending a $4$-digit message does not suffice. Also show that sending a $6$-digit message suffices. If it is deduced that sending a $c$-digit message suffices for some $c>6$, then partial credits may be awarded.
